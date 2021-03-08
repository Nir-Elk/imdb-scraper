# IMDB Scraper

Steaming movie results by quering imdb using node.js


Use the package manager [npm](https://www.npmjs.com) which coming a part of [nodejs](https://nodejs.org/en/download/).

## Installation
```bash
git clone https://github.com/Nir-Elk/imdb-scraper.git
cd projectName # Or your picked procjet directoy name
npm install
```

## Usages
```bash
#cd project directory
node index.js The Lion King
```

## Usages
```
The results will be streaming to "output.txt" file
```
```
Process will be end with exit code 1 for success or exit code -1 for failure
```
```
In case of fail the error will be console logged to in your std
```

## Output example for quering ""
Each line is in the shape of:
```
#any varablie can by an empty string, indicates the field is not avalible on IMDB
${name}|${genres}|${duration}|${directors}|${stars}
```
```
Star Trek VI: The Undiscovered Country|Action, Adventure, Sci-Fi|1h 50min|Nicholas Meyer|William Shatner, Leonard Nimoy, DeForest Kelley
Star Trek: Insurrection|Action, Adventure, Sci-Fi|1h 43min|Jonathan Frakes|Patrick Stewart, Jonathan Frakes, Brent Spiner
Star Trek: The Motion Picture|Adventure, Mystery, Sci-Fi|2h 12min|Robert Wise|William Shatner, Leonard Nimoy, DeForest Kelley
Star Trek Into Darkness|Action, Adventure, Sci-Fi|2h 12min|J.J. Abrams|Chris Pine, Zachary Quinto, Zoe Saldana
Star Trek V: The Final Frontier|Action, Adventure, Fantasy|1h 47min|William Shatner|William Shatner, Leonard Nimoy, DeForest Kelley
Star Trek|Action, Adventure, Sci-Fi|2h 7min|J.J. Abrams|Chris Pine, Zachary Quinto, Simon Pegg
Star Trek IV: The Voyage Home|Action, Adventure, Comedy|1h 59min|Leonard Nimoy|William Shatner, Leonard Nimoy, DeForest Kelley
Untitled Star Trek Sequel|Action, Adventure||Noah Hawley|Zoe Saldana, Karl Urban, Chris Pine
Star Trek: First Contact|Action, Adventure, Drama|1h 51min|Jonathan Frakes|Patrick Stewart, Jonathan Frakes, Brent Spiner
Star Trek: Generations|Action, Adventure, Mystery|1h 58min|David Carson|Patrick Stewart, William Shatner, Malcolm McDowell
Star Trek First Frontier|Sci-Fi|1h 25min|Kenneth Smith|Robert Pralgo, Tara Ochs, Mark Ashworth
Star Trek II: The Wrath of Khan|Action, Adventure, Sci-Fi|1h 53min|Nicholas Meyer|William Shatner, Leonard Nimoy, DeForest Kelley
Star Trek III: The Search for Spock|Action, Adventure, Sci-Fi|1h 45min|Leonard Nimoy|William Shatner, Leonard Nimoy, DeForest Kelley
Star Trek: Nemesis|Action, Adventure, Sci-Fi|1h 56min|Stuart Baird|Patrick Stewart, Jonathan Frakes, Brent Spiner
Star Trek Beyond|Action, Adventure, Sci-Fi|2h 2min|Justin Lin|Chris Pine, Zachary Quinto, Karl Urban

```
## About Me
```
Name: Nir Elkayam
Email: nirelkayam31@gmail.com
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://opensource.org/licenses/ISC)