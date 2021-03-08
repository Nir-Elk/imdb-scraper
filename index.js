const puppeteer = require("puppeteer")
const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const stream = fs.createWriteStream(`output.txt`)
const Url = (text) => `https://www.imdb.com/find?q=${text}&s=tt&ttype=ft`;

const search = process.argv.slice(2).join(' ')
const start = Date.now();

const movies = [];

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(Url(search)).catch(err=>{
        console.warn(err)
        process.exit(-1);
    })

    const hrefs = await page.$$eval(".result_text > a", (list) => list.map((movie) => movie.href).slice(0, 15));

    const promises = []
    for (let i = 0; i < hrefs.length; i++) {
        promises.push(browser.newPage().then(async page => {
            await page.goto(hrefs[i]);
            const name = await page.$eval(".title_wrapper > h1", (elm) => elm.innerText.split("(")[0].trim());
            const genres = await page.$$eval(".subtext > a", (list) => list.map((elm) => elm.innerText).slice(0, list.length - 1).reduce((accumulator, currentValue) => accumulator + ", " + currentValue).trim());
            let duration;
            try {
                duration = await page.$eval(".subtext > time", (elm) => elm.innerText.trim());
            } catch (e) {
                duration = "";
            }
            const directors = await page.$$eval(".plot_summary > .credit_summary_item", (list) => list[0].innerText.split(":")[1].split("|")[0].trim());
            const stars = await page.$$eval(".plot_summary > .credit_summary_item", (list) => list[2].innerText.split(":")[1].split("|")[0].trim());


            stream.write(`${name}|${genres}|${duration}|${directors}|${stars}\n`, function (err) {
                if (err) console.warn(err);
            });

            return `${name}|${genres}|${duration}|${directors}|${stars}`;
        }))
    }

    await Promise.all(promises).then(async (values) => {
        console.log(Date.now() - start);
        console.log('done!');
        await browser.close()
        process.exit(1);
    });
})()
