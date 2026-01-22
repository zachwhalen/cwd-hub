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
    {'title' : 'X-FILES LOL',
     'URL' : 'https://x-files.dgst101.net/webpage.html',
     'by' : 'Dana Scully'
    }
    
]
//the name of the ring
var ringName = 'EagleCities Webring';

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
