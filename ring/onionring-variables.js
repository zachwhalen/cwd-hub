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
    },
    {
        'title':"Ian's Digital Studies Gaming Headquarters!",
        'URL': 'http://iandgst395.coxiand.com/webpage.html',
        'by': 'Ian Cox'
    },
    {
        'title':"One Direction",
        'URL': 'http://retro.carolinepconner.com/webpage.html',
        'by': 'Caroline Conner'
    },
    {
        'title':"Ema's Website",
        'URL': 'http://2.0dgst395.emacorujo.com/',
        'by': 'Ema'
    },
    {
        'title':"Favorite Nintendo 64 Games",
        'URL': 'http://retro.andrix-projects.com/webpage.html',
        'by': 'Andrix'
    },
    {
        'title':"Anna's Fan Club",
        'URL':'https://retro.annamblake.com/MaisiePetersFanClub.html',
        'by':'Anna'
    },
    // {
    //     'title':"SAVA'S PHOTOGRAPHY VAULT",
    //     'URL':'http://my.scarver.net.rcarver.net/Retrohomepage.html',
    //     'by':'Russell Carver'
    // },
    {
        'title':"Paul's Retro Homepage",
        'URL':'https://retrohomepage.pauld11.com/gameboy_retro_homepage_html',
        'by':'Paul Datovech'
    },
    // {
    //     'title':'Welcome to My Retro Geocities Page!',
    //     'URL':'https://dgst395.nicholasfbrooks.com/cool.html',
    //     'by':'Nicholas Brooks'
    // },
    // {
    //     'title':'Taylor Swift Fan Central',
    //     'URL':'https://project.kathryn-durham.com/another_webpage.html',
    //     'by':'Kathryn Durham'
    // },
    {
        'title':'SUITS',
        'URL':'http://midgst.funntimes.com/myhtml',
        'by':'Amanda Sheward'
    },
    {
        'title':'under da sea',
        'URL':'http://dgst395.jordanrae.org/retro.html',
        'by':'Jordan'
    },
    {
        'title': "TRISHA'S FANCLUB",
        'URL':'https://jessishappyplace.jjerrell99.com/happyplace.html',
        'by':'Jessi J'
    },
    {
        'title':'the spice girls',
        'URL':'http://thespicegirls.martinisbymartina.com/webpage.html',
        'by':'Martina'
    },
    {
        'title':'The Book Bag',
        'URL': 'https://htmltime.cassc.net/TheBookBag.html',
        'by': 'Cassidy'
    },
    {
        'title':'Taylor Swift',
        'URL':'http://dgst.erinlandfairphotography.com/webpage.html',
        'by':'ERIN LANDFAIR'
    },
    {
        'title':'Phil Dunphey',
        'URL':'http://x-files.retro.slights.org/Webpage.html',
        'by':'Sydney Light'
    },
    {
        'title':"Ariana Grande's Discography",
        'URL':'http://dgst395.emdesignlife.com/code.html',
        'by': 'Emma'
    },
    {
        'title': 'RetroCircus',
        'URL':'https://retrocircus.vreinhardt.com/webpage.html',
        'by':''
    },
    // {
    //     'title':'Jujutsu Kaisen Retro Fanpage',
    //     'URL':'https://retrohomepage.jasminerivas.net/project.html',
    //     'by':'Jasmine'
    // },
    // {
    //     'title':'After School Activities',
    //     'URL':'https://applied396.mstrong.org/Webpage.html',
    //     'by':''
    // },
    {
        'title':'The Corner of Cryptids',
        'URL':'http://retro.duncanbowles.net/webpage.html',
        'by':'Duncan'
    },
    // {
    //     'title':"Finance Bro Central",
    //     'URL':'https://theme.briangaydos.com/BriansRetroPage.html',
    //     'by':'Brian Gaydos'
    // },
    {
        'title':'Welcome to my Retro Page',
        'URL':'http://retro.emmygoggin.com/webpage.html',
        'by':'ENG webpage'
    },
    {
        'title':'Welcome to Bratz World',
        'URL':'http://retrohomepage.biyakhan.com/another_html',
        'by':'Hudaybiya Khan'
    },
    // {
    //     'title':'Zork Fanpage',
    //     'URL':'https://retro.therealryanhiggins.com/Zork_Fanpage.html',
    //     'by':'Ryan Higgins'
    // },
    // {
    //     'title':"Ty's Retro Homepage",
    //     'URL':'https://retrohomepage.tywhtn.com/retrohome.html',
    //     'by':'Ty Wheaton'
    // },
    {
        'title':'My top 5 songs from Taylor Swift’s Reputation album',
        'URL':'http://tswiftie.laynasdigitaldesigns.com/webpage.html',
        'by':'Elayna Milligan'
    },
    {
        'title':'Alexaverse',
        'URL':'https://alexaverse.ampasto.com/webpage.html',
        'by':'Alexandra Pasto'
    },
    {
        'title':'Naruto Retropage',
        'URL':'https://retroninja.quintonthomas.com/webpage.html',
        'by':'Quinton Thomas'
    },
    // {
    //     'title':'Nature of the World',
    //     'URL':'https://dgst395.frymadisone.com/project.html',
    //     'by':'Maddie Fry'
    // },
    {
        'title':'Snowboarding is Cool!',
        'URL':'https://thenewretropage.gdelaney.org/therealretro.html',
        'by':'Grace'
    },
    {
        'title':'90s Askew',
        'URL':'https://htmlsite.blaisewingold.com/90sAskew.html',
        'by':'Blaise Wingold'
    },
    // {
    //     'title':'DJ Premier Page',
    //     'URL':'https://dgst2.mycpsc240.net/RetroHomepage.html',
    //     'by':'Nahom Wendweson'
    // },
    // {
    //     'title':'Disney 101',
    //     'URL':'https://disney101.madelynwinfrey.com/home.html',
    //     'by':'Madelyn'
    // },
    {
        'title':'Retro Webkinz',
        'URL':'http://blast2past.abbymills.net/webpage.html',
        'by':''
    },
    {
        'title':'Letters',
        'URL':'https://home.katiereif.com/',
        'by':'Katie Reif'
    },
    {
        'title':'Junk Drawer',
        'URL':'http://retrohomepage.mkiser03.com/retrohomepage.html',
        'by':'Mya Kiser'
    },
    {
        'title':'Who is SH1NOB1?',
        'URL':'http://sub.sh1nob101.com/webpage.html',
        'by':'Darryl Nyamedi'
    },
    {
        'title':'Fish and Coral Journal',
        'URL':'http://retro.tammymacey.com/',
        'by':'Tammy'
    },
    {
        'title':'The Vast Expanse',
        'URL':'http://retro.alexandergluchowski.com/space',
        'by':'AJ Gluchowski'
    },
    {
        'title':"Kwajo's Debut Album: Spleck",
        'URL':'http://retro.kwajooo.com/author_webpage.html',
        'by':'Nathan Nyamedi'
    },
    // {
    //     'title':'A blog about my dog',
    //     'URL':'https://retro.rachelmweaver.com/webpage.html',
    //     'by':'Rachel Weaver'
    // },
    {
        'title':'Alphys Kin',
        'URL':'http://alphyskin.nadiacloudart.com/alphys.html',
        'by':'Nadia Cloud'
    }, 		
    // {
    //     'title':"Places I've traveled to",
    //     'URL':'http://project.kazuferris.com/RetroHomepage.html',
    //     'by':'Kazu'
    // },
    {		
        'title':'Lana Del Rey',
        'URL':'http://mydgst.luisafernandarestrepo.com/dgst395',
        'by':'Luisa Restrepo'
    },
    {
        'title':'Favorite Nintendo 64 Games',
        'URL':'http://retro.andrix-projects.com/webpage.html',
        'by':'Rosina Andrix'
    },
    {
        'title':'Nature of the World',
        'URL':'https://dgst395.frymadisone.com/retro-homepage.html',
        'by':'Madison Fry'    
    },
    {
        'title': "I Can't Stop Thinking About Chess",
        'URL':'https://dgst395.unnaturallyblue.com/homeonthewebchess.html',
        'by':'Nellie Bittenbender'
    },
    {
        'title':"Welcome to Wills Wonders",
        'URL':'http://homeweb.willwonders.com/homepage.html',
        'by':'William Gawtry'
    },
    {
        'title':'Retro Bills Website',
        'URL':'https://applied.livkern.com/homepage.html',
        'by':'Olivia Kern'
    },
    {
        'title':'Welcome to My Homepage!',
        'URL':'http://applied.wisewordsfromash.com/homepagefi.html',
        'by':'Ashley Coleman'
    },
    {
        'title': 'Mads Moments',
        'URL':'https://dgst395.madsmoments.com/homepage.html',
        'by':''
    },
    {
        'title':'Book Talk with Katy',
        'URL':'https://dgst395.katyfield.net/booktalk.html',
        'by':'Katy Field'
    },
    {
        'title':'Retro Game Vault',
        'URL':'https://dgst.adserrano.com/index.html',
        'by':'Dominic'
    },
    {
        'title':'Brass & Cog',
        'URL':'https://dgst.carsonf.info/connect.html',
        'by':'Carson Frank'
    },
    {
        'title':'Arcturus',
        'URL':'https://appliedfolder.justinly.org/arcturus.html',
        'by':'Justin Ly'
    },
    {
        'title':'Coaching with Katie',
        'URL':'https://applieddgst.katieroylee.com/homepage.html',
        'by':'Katie Royle'
    },
    {
        'title':'Music is my Life!',
        'URL':'https://dgst.lyladodge.com/home.html',
        'by':'Lyla Dodge'
    },
    {
        'title':"Miley's Website",
        'URL':'https://mileyfarley.com/MileysHome.html',
        'by':'Miley Farley'
    }
    
]
//the name of the ring
var ringName = 'EagleCities Webring';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'garden';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://garden.dgst101.net/index.html';

//should the widget include a random button?
var useRandom = true;
