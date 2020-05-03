var region0 = [
    'MN Minnesota',
    'IA Iowa',
    'CO Colorado',
    'KS Kansas',
    'MO Missouri',
    'NE Nebraska',
    'ND North Dakota',
    'SD South Dakota'
];

var region1 = [
    'CT Connecticut',
    'EMA Eastern Massachusetts',
    'WMA Western Massachusetts',
    'ME Maine',
    'NH New Hampshire',
    'RI Rhode Island',
    'VT Vermont'
];

var region2 = [
    'ENY Eastern New York',
    'NLI New York City - Long Island',
    'NNJ Northern New Jersey',
    'NNY Northern New York',
    'SNJ Southern New Jersey',
    'WNY Western New York'
];

var region3 = [
    'DE Delaware',
    'EPA Eastern Pennsylvania',
    'MDC Maryland - DC',
    'WPA Western Pennsylvania'
];

var region4 = [
    'AL Alabama',
    'GA Georgia',
    'KY Kentucky',
    'NC North Carolina',
    'NFL Northern Florida',
    'SC South Carolina',
    'SFL Southern Florida',
    'WCF West Central Flordia',
    'TN Tennessee',
    'VA Virginia',
    'PR Puerto Rico',
    'VI Virgin Islands'
];

var region5 = [
    'AK Arkansas',
    'LA Louisiana',
    'MS Mississippi',
    'NM New Mexico',
    'NTX North Texas',
    'OK Oklahoma',
    'STX South Texas',
    'WTX West Texas'
];

var region6 = [
    'EB East Bay',
    'LAX Los Angeles',
    'ORG Orange County',
    'SB Santa Barbara',
    'SCV Santa Clara Valley',
    'SDG San Diego',
    'SF San Fransisco',
    'SJV San Joaquin Valley',
    'SV Sacramento Valley',
    'PAC Pacific'
];

var region7 = [
    'AZ Arizona',
    'EWA Eastern Washington',
    'ID Idaho',
    'MT Montana',
    'NV Nevada',
    'OR Oregon',
    'UT Utah',
    'WWA Western Washington',
    'WY Wyoming',
    'AK Alaska'
];

var region8 = [
    'MI Michigan',
    'OH Ohio',
    'WV West Virginia'
];

var region9 = [
    'IL Illinois',
    'IN Indiana',
    'WI Wisconsin'
];

var canadaRegions = [
    'MAR Maritime',
    'NL Newfoundland / Labrador',
    'PE Prince Edward Island',
    'QC Quebec',
    'ONN Ontario North',
    'ONS Ontario South',
    'ONE Ontario East',
    'GTA Greater Toronto Area',
    'MB Manitoba',
    'SK Saskatchewan',
    'AB Alberta',
    'BC British Columbia',
    'NT Northern Territories'
];

var generalRegions = [
    'ITU Region 1',
    'ITU Region 2',
    'ITU Region 3'
];

var arrlDivisions = [
    'Atlantic Division',
    'Central Division',
    'Dakota Division',
    'Delta Division',
    'Great Lakes Division',
    'Hudson Division',
    'Midwest Division',
    'New England Division',
    'Northwestern Division',
    'Pacific Division',
    'Roanoke Division',
    'Rocky Mountain Division',
    'Southeastern Division',
    'Southwestern Division',
    'West Gulf Division'
];

var continents = [
    'North America',
    'South America',
    'Europe',
    'Africa',
    'Asia',
    'Oceania'
];

var distances = [
    'Contact 1-5 Miles Away',
    'Contact 5-15 Miles Away',
    'Contact 15-40 Miles Away',
    'Contact 40-75 Miles Away',
    'Contact 75-120 Miles Away',
    'Contact 120-200 Miles Away',
    'Contact 200-300 Miles Away',
    'Contact 300-500 Miles Away',
    'Contact 500-750 Miles Away',
    'Contact 750-1000 Miles Away',
    'Contact 1000-1500 Miles Away',
    'Contact 1500-2000 Miles Away',
    'Contact 2000-3000 Miles Away',
    'Contact 3000-5000 Miles Away',
    'Contact 5000-8000 Miles Away',
    'Contact >8000 Miles Away'
];

var modeCounts = [
    'Make 1 CW contact',
    'Make 5 CW contacts',
    'Make 1 SSB contact',
    'Make 5 SSB contacts',
    'Make 1 AM contact',
    'Make 5 AM contacts',
    'Make 1 digital contact',
    'Make 5 digital contacts',
    'Make 1 satellite contact',
    'Make 5 satellite contacts'
];

var bands = [
    'Contact on 160m',
    'Contact on 80m',
    'Contact on 40m',
    'Contact on 20m',
    'Contact on 15m',
    'Contact on 10m',
    'Contact on 6m',
    'Contact on 2m',
    'Contact on 1.25m',
    'Contact on 70cm'
];

var specialProtocols = [
    'Contact with CW',
    'Contact with AM',
    'Contact with SSB',
    'Contact with AM',
    'Contact with FM',
    'Contact with FT4/8',
    'Contact with PSK31',
    'Contact with APRS'
];

var locationChallenges = [
    'Contact with Maritime station',
    'Contact with Mobile station',
    'Contact with Aeronautical station',
    'Contact with International Space Station',
    'Contact with a Military Station',
    'Contact with a National Park',
    'Contact with a State Park',
    'Contact with a Summit on the Air',
    'Contact with an Island on the Air',
    'Contact with a Lighthouse / Lightship',
    'Contact with a Special Event Station',
    'Contact with W1AW'
];

var clubChallenges = [
    'Contact with 1 club member',
    'Contact with 5 club members',
    'Contact with 10 club members',
    'Contact with a nearby club',
    'Contact with a distant club',
    'Contact with a national club',
    'Contact with an international club'
];

var contactCounts = [
    'Make 5 contacts in 10 minutes',
    'Make 10 contacts in 10 minutes',
    'Make 30 contacts in an hour',
    'Make 100 contacts in 3 hours',
    'Make 300 contacts in 6 hours',
    'Make 500 contacts in 8 hours',
    'make 1000 contacts in 24 hours'
];

var stationClasses = [
    'Contact with a Class A station',
    'Contact with a Class B station',
    'Contact with a Class C station',
    'Contact with a Class D station',
    'Contact with a class E station',
    'Contact with a class F station',
    'Contact with a QRP station'
];

var bonusPoints = [
    'Use 100% Emergency Power',
    'Originate a Formal Message to Section Manager',
    'Relay a formal message',
    'Make a satellite QSO',
    'Make 5 contacts using alternate power source',
    'Copy a W1AW bulletin',
    'Submit field day entry via web',
    'Participate with a youth',
    'Promote your operation via social media',
    'Declare a safety officer for your operation'
];

var socialPoints = [
    'Obtain publicity from local media',
    'Operate from a public location',
    'Provide public information'
];

var listOfCategories = {
    'Region 0': region0,
    'Region 1': region1,
    'Region 2': region2,
    'Region 3': region3,
    'Region 4': region4,
    'Region 5': region5,
    'Region 6': region6,
    'Region 7': region7,
    'Region 8': region8,
    'Region 9': region9,
    'Canada Regions': canadaRegions,
    'General Regions': generalRegions,
    'ARRL Divisions': arrlDivisions,
    'Continents': continents,
    'Distances': distances,
    'Mode Counts': modeCounts,
    'Bands': bands,
    'Special Protocols': specialProtocols,
    'Location Challenges': locationChallenges,
    'Club Challenges': clubChallenges,
    'Contact Counts': contactCounts,
    'Station Classes': stationClasses,
    'Bonus Points': bonusPoints,
    'Social Points': socialPoints,
};


var emptyLines = [];
var linesCopy = buildLines();
var seed;
var rng = new Math.seedrandom();

function buildLines() {
    var lines = [];
    for (var [key, value] of Object.entries(listOfCategories)) {
        var checkbox = document.getElementById(key);
        if(checkbox == null || checkbox.checked == true) {
            lines = lines.concat(value);
        }
    }
    
    return lines.filter(Boolean).slice();
}

function newSeed() {
    var seedField = document.getElementById("seed");
    rng = new Math.seedrandom();
    seedField.value = Math.abs(rng.int32());
}

function initAll() {
    if (document.getElementById) {
        newSeed();
        newCard();
    } else {
        alert("Your browser does not support this script.");
    }
}

function newCard() {
    rng = new Math.seedrandom(document.getElementById("seed").value);
    linesCopy = buildLines();
    for (var i = 0; i < 24; i++) {
        setSquare(i);
    }
}

function setSquare(thisSquare) {
    var currentSquare = "square" + thisSquare;

    var randomString = getRandomStringAndRemove(thisSquare);
    document.getElementById(currentSquare).innerHTML = randomString;
}

function getRandomStringAndRemove(thisSquare) {
    var randomIndex = Math.floor(rng() * (linesCopy.length - thisSquare) ) + 1;
    var randomString = linesCopy.splice(randomIndex, 1);
    return randomString;
}

function anotherCard() {
    newCard();

    document.getElementById("Card").scrollIntoView();

    return false;
}
