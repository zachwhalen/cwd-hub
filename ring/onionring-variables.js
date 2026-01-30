// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
// var sites = [
// 'http://x-files.dgst101.net/webpage.html',
// 'http://x-files.dgst101.net/another_webpage.html',
// 'https://example.com/',
// 'https://example.com/'
// ];
var sites = [
    {'title' : 'DIGIMON',
     'URL' : 'https://argaloes.github.io/cwd/unit-1-hello/final/',
     'by' : 'DIGIMON'
    },
    {
        'title' : 'SCREAM',
        'URL' : 'https://mswain2.github.io/cwd/unit-1-hello/final/index.html',
        'by' : 'Kenzie Swain'
    },
    {
        'title' : 'Dead By Daylight: These Are Some Killers That I HATE!',
        'URL' : 'https://otwheelerumw.github.io/cwd/unit-1-hello/final/index.html',
        'by': 'Owen Wheeler'
    },
    {
        'title' : 'Voyager Fan Page',
        'URL' : 'https://sinorsavannah.github.io/cwd/unit-1-hello/final/index.html',
        'by' : 'Savannah Sinor'
    },
    {
        'title' : "Ranger's Apprentice Fan Page",
        'URL' : 'https://sidelineghost.github.io/cwd/unit-1-hello/final/index.html',
        'by' : 'James Turgeon'
    },
    {
        'title' : 'Ariana Grande Fan Page',
        'URL' : 'https://ahardy9.github.io/cwd/unit-1-hello/final/index.html',
        'by' : 'Alyson Hardy'
    },
    {
        'title' : 'Welcome to Quahog',
        'URL' : 'http://kendallswaim.github.io/cwd/unit-1-hello/final/',
        'by' : 'Kendall Swaim'
    }
    
]
//the name of the ring
var ringName = 'CWD Webring';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'webring';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://zachwhalen.github.io/cwd-hub/ring/';

//should the widget include a random button?
var useRandom = true;
