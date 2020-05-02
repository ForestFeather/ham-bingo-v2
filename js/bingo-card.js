var region0 = [
    'MN Minnesota',
    'Iowa',
    'Colorado',
    'Kansas',
    'Missouri',
    'Nebraska',
    'North Dakota',
    'South Dakota'
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
    'Eastern New York',
    'New York City - Long Island',
    'Northern New Jersey',
    'Northern New York',
    'Southern New Jersey',
    'Western New York'
];

var region3 = [
    'Delaware',
    'Eastern Pennsylvania',
    'Maryland - DC',
    'Western Pennsylvania'
];

var region4 = [
    'Alabama',
    'Georgia',
    'Kentucky',
    'North Carolina',
    'Northern Florida',
    'South Carolina',
    'Southern Florida',
    'West Central Flordia',
    'Tennessee',
    'Virginia',
    'Puerto Rico',
    'Virgin Islands'
];

var region5 = [
    'Arkansas',
    'Louisiana',
    'Mississippi',
    'New Mexico',
    'North Texas',
    'Oklahoma',
    'South Texas',
    'West Texas'
];

var region6 = [
    'East Bay',
    'Los Angeles',
    'Orange County',
    'Santa Barbara',
    'Santa Clara Valley',
    'San Diego',
    'San Fransisco',
    'San Joaquin Valley',
    'Sacreamento Valley',
    'Pacific'
];

var region7 = [
    'Arizona',
    'Eastern Washington',
    'Idaho',
    'Montana',
    'Nevada',
    'Oregon',
    'Utah',
    'Western Washington',
    'Wyoming',
    'Alaska'
];

var region8 = [
    'Michigan',
    'Ohio',
    'West Virginia'
];

var region9 = [
    'Illinois',
    'Indiana',
    'Wisconsin'
];

var canadaRegions = [
    'Maritime',
    'Newfoundland/Labrador',
    'Prince Edward Island',
    'Quebec',
    'Ontario North',
    'Ontario South',
    'Ontario East',
    'Greater Toronto Area',
    'Manitoba',
    'Saskatchewan',
    'Alberta',
    'British Columbia',
    'Northern Territories'
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
    'Make contact on 160m',
    'Make contact on 80m',
    'Make contact on 40m',
    'Make contact on 20m',
    'Make contact on 15m',
    'Make contact on 10m',
    'Make contact on 6m',
    'Make contact on 2m',
    'Make contact on 1.25m',
    'Make contact on 70cm'
];

var specialProtocols = [
    'Make contact with CW',
    'Make contact with AM',
    'Make contact with SSB',
    'Make contact with AM',
    'Make contact with FM',
    'Make contact with FT4/8',
    'Make contact with PSK31',
    'Make contact with APRS'
];

var locationChallenges = [
    'Make contact with Maritime station',
    'Make contact with Mobile station',
    'Make contact with Aeronautical station',
    'Make contact with International Space Station',
    'Make contact with a Military Station',
    'Make contact with a National Park',
    'Make contact with a State Park',
    'Make contact with a Summit on the Air',
    'Make contact with an Island on the Air',
    'Make contact with a Lighthouse/Lightship',
    'Make contact with a Special Event Station',
    'Make contact with W1AW'
];

var clubChallenges = [
    'Make contact with 1 club member',
    'Make contact with 5 club members',
    'Make contact with 10 club members',
    'Make contact with a nearby club',
    'Make contact with a distant club',
    'Make contact with a national club',
    'Make contact with an international club'
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
    'Make contact with a Class A station',
    'Make contact with a Class B station',
    'Make contact with a Class C station',
    'Make contact with a Class D station',
    'Make contact with a class E station',
    'Make contact with a class F station',
    'Make contact with a QRP station'
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

    return false;
}
