// Finds index of first object in Array with matching Key: Value 
function indexOfKeyValue(array, key, value) {
    for (i = 0; i < array.length; i++) {
        for (var k in array[i]) {
            if (key == k) {
                if (value == array[i][k])
                    return i;
            }
        }
    }
    console.log('key or value not found');
}

var data = {
    "News": [
        {
            "Title": "Kids are Annoying",
            "Date": "August 24, 2017",
            "Description": "Surveys all around the world discover that nearly everyone on earth believes children to be extremely annoying. Surveyees also not that their children are the exception.",
            "Ticker": "",
            "Image": "",
        },
        {
            "Title": "Bad Players of Clueless Parents",
            "Date": "September 3, 2017",
            "Description": "Local kid scores an own goal that Loses match. His parents cheer as other attendees throw garbage at them.",
            "Ticker": "",
            "Image": "",
        },
        {
            "Title": "Terrible Coaching",
            "Date": "September 20, 2017",
            "Description": "Referees suspected of fixing matches for very small sums of money.",
            "Ticker": "",
            "Image": "",
        }
    ],
    "Events": [
        {
            "Name": "Season Kick-Off",
            "Date": "August 31st, 2017",
            "Host": "North Elementary",
            "Description": "Come celebrate the new season of our stupid kids playing soccer together. Bring alcohol, you'll need it.",
            "Image": "media/startPic.jpg"
        },
        {
            "Name": "Celebrate the season ending",
            "Date": "Octobers 1st, 2017",
            "Host": "AJ Katzenmaier Elementary",
            "Description": "Celebrate the end of the season, and ..... no one cars. Just come and drink and hopefully the loud annoying screams of the children won't ruin the day completely.",
            "Image": "https://static1.squarespace.com/static/57434ca560b5e9a87ec8966d/t/578bb677d2b85738b5d53cc6/1468774080628/"
        },
        {
            "Name": "New Years Eve Party",
            "Date": "December 31st, 2017",
            "Host": "Marjorie P Hart Elementary",
            "Description": "Leave your stupid kids at home and come party. Open bar.",
            "Image": "https://static1.squarespace.com/static/57434ca560b5e9a87ec8966d/t/578bb677d2b85738b5d53cc6/1468774080628/"
        }

    ],
    "Teams": [
        {
            "Team Name": "Kings",
            "School": "AJ Katzenmaier Elementary",
            "Location": "24 W. Walton St., Chicago, IL 60610",
            "iFrame Map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1476.2794062304008!2d-87.62995115433905!3d41.90011777929446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15e198c063fc787c!2sAJ+Katzenmaier+Elementary!5e0!3m2!1sen!2ses!4v1504861894216",
            "Logo": "http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/SAC.svg",
            "Points": "7"
        },
        {
            "Team Name": "Grizzlies",
            "School": "Greenbay Elementary",
            "Location": "1734 N. Orleans St., Chicago, IL 60614",
            "Map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11876.091922879736!2d-87.6378335!3d41.9138647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb351205fae50c6f3!2sGreenbay+Elementary!5e0!3m2!1sen!2ses!4v1504869950302",
            "Logo": "http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/MEM.svg",
            "Points": "10"
        },
        {
            "Team Name": "Hawks",
            "School": "Howard A Yeager Elementary",
            "Location": "2245 N. Southport Ave., Chicago, IL 60614",
            "iFrame Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5858505787533!2d-87.66511018415366!3d41.923260979218696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f852467%3A0xb6cb22b2f0358874!2sHoward+A+Yeager+Elementary!5e0!3m2!1sen!2ses!4v1504870093098",
            "Logo": "http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/ATL.svg",
            "Points": "0"
        },
        {
            "Team Name": "Magic",
            "School": "Marjorie P Hart Elementary",
            "Location": "2625 N. Orchard St., Chicago, IL 60614",
            "iFrame Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289253050458!2d-87.64816033415356!3d41.92963547921816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2637f9d7%3A0xdbff5d5dfcfcfa35!2sMarjorie+P+Hart+Elementary!5e0!3m2!1sen!2ses!4v1504870177677",
            "Logo": "http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/ORL.svg",
            "Points": "0"
        },
        {
            "Team Name": "Nets",
            "School": "North Elementary",
            "Location": "1409 N. Ogden Ave., Chicago, IL 60610",
            "iFrame Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.335548703626!2d-87.64831158415406!3d41.90714487921985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af14860a5%3A0x5736e62f19086c62!2sNorth+Elementary!5e0!3m2!1sen!2ses!4v1504870208630",
            "Logo": "http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/BKN.svg",
            "Points": "0"
        },
        {
            "Team Name": "Spurs",
            "School": "South Elementary",
            "Location": "2101 N. Fremont St., Chicago, IL 60614",
            "iFrame Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23754.685881934314!2d-87.66363246693624!3d41.90714086862017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196e269cbf%3A0x1caabcbc4893f0da!2sSt+James+Lutheran+School!5e0!3m2!1sen!2ses!4v1504870248566",
            "Logo": "http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/SAS.svg",
            "Points": "0"
        },
    ],
    "Matches": [
        {
            "Date": "9/01",
            "Home Team": "Kings",
            "Away Team": "Grizzlies",
            "Played": true,
            "Score": '1 - 5',
        },
        {
            "Date": "9/01",
            "Home Team": "Hawks",
            "Away Team": "Magic",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/01",
            "Home Team": "Nets",
            "Away Team": "Spurs",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/08",
            "Home Team": "Magic",
            "Away Team": "Kings",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/08",
            "Home Team": "Spurs",
            "Away Team": "Hawks",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/08",
            "Home Team": "Grizzlies",
            "Away Team": "Nets",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/15",
            "Home Team": "Spurs",
            "Away Team": "Kings",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/15",
            "Home Team": "Grizzlies",
            "Away Team": "Hawks",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/15",
            "Home Team": "Magic",
            "Away Team": "Nets",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/22",
            "Home Team": "Kings",
            "Away Team": "Hawks",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/22",
            "Home Team": "Grizzlies",
            "Away Team": "Magic",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/22",
            "Home Team": "Spurs",
            "Away Team": "Nets",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/29",
            "Home Team": "Nets",
            "Away Team": "Kings",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/29",
            "Home Team": "Hawks",
            "Away Team": "Spurs",
            "Played": false,
            "Score": null,
        },
        {
            "Date": "9/29",
            "Home Team": "Magic",
            "Away Team": "Grizzlies",
            "Played": false,
            "Score": null,
        },
    ]
}
