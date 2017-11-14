/* Home Page */


/* News Page */
$.each(data.News, function (i, v) {
    makeNewsDiv(v);
});

function makeNewsDiv(event) {
    // Make Div
    var div = document.createElement('div');
    $(div).addClass("contentDiv newsDiv");
    // News Title
    var h3 = document.createElement('h3');
    h3.innerText = event.Title;
    $(div).append(h3);
    // News Date
    var h4 = document.createElement('h4');
    h4.innerText = event.Date;
    $(div).append(h4);
    // News Description
    var p = document.createElement('p');
    p.innerText = event.Description;
    $(div).append(p);
    // News Image
    var img = document.createElement('img');
    //$(img).attr('src', event.Image);
    $(img).attr('src', 'media/startPic.jpg');
    $(div).append(img);
    // Attach News
    $(".pageNews").append(div)
}


/* Events  Page */
$.each(data.Events, function (i, v) {
    makeEventDiv(v);
});

function makeEventDiv(event) {
    // Make Div
    var div = document.createElement('div');
    $(div).addClass("contentDiv eventDiv");
    // Event Title
    var h3 = document.createElement('h3');
    h3.innerText = event.Name;
    $(div).append(h3);
    // Event Date
    var h4 = document.createElement('h4');
    h4.innerText = event.Date;
    $(div).append(h4);
    // Event Host
    var h5 = document.createElement('h5');
    h5.innerText = event.Host;
    $(div).append(h5);
    // Event Description
    var p = document.createElement('p');
    p.innerText = event.Description;
    $(div).append(p);
    // Event Image
    var img = document.createElement('img');
    $(img).attr('src', event.Image);
    $(div).append(img);
    // Attach Event
    $(".pageEvents").append(div);
}

/* Schedule Page */


makeScheduleDiv();


function makeScheduleDiv() {
    $.each(data.Matches, function (i, v) {
        var div = document.createElement('div');
        $(div).addClass("contentDiv");
        // Event Date
        var h4 = document.createElement('h4');
        h4.innerText = v.Date;
        $(div).append(h4);
        // Center Div
        var matchBox = document.createElement('div');
        $(matchBox).addClass("matchBox");

        //// Home Team
        var teamDiv = document.createElement('div');
        $(teamDiv).addClass("teamDiv");
        // Team Logo
        var img = document.createElement('img');
        $(img).attr("src", data.Teams[indexOfKeyValue(data.Teams, ['Team Name'], v["Home Team"])].Logo);
        $(teamDiv).append(img);
        // Team Name
        var h4 = document.createElement('h4');
        h4.innerText = v["Home Team"];
        $(teamDiv).append(h4);
        $(matchBox).append(teamDiv);

        /// Score
        var span = document.createElement('span');
        if (v.Played == true) {
            span.innerText = v.Score;
        } else {
            span.innerText = '- -';
        }
        $(matchBox).append(span);

        //// Away Team
        var teamDiv = document.createElement('div');
        $(teamDiv).addClass("teamDiv");
        // Team Logo
        var img = document.createElement('img');
        $(img).attr("src", data.Teams[indexOfKeyValue(data.Teams, ['Team Name'], v["Away Team"])].Logo);
        $(teamDiv).append(img);
        $(teamDiv).append(img);
        // Team Name
        var h4 = document.createElement('h4');
        h4.innerText = v["Away Team"];
        $(teamDiv).append(h4);
        $(matchBox).append(teamDiv);

        $(div).append(matchBox);
        // Match Location
        var h5 = document.createElement('h5');
        h5.innerText = data.Teams[indexOfKeyValue(data.Teams, ['Team Name'], v["Home Team"])].Location;
        $(div).append(h5);
        $(".pageSchedule").append(div);
    });


}
/* Location Page */
$.each(data.Teams, function (i, v) {
    var div = document.createElement('div');
    $(div).addClass("contentDiv");
    // School Name
    var h3 = document.createElement('h3');
    h3.innerText = v.School;
    $(div).append(h3);
    // Address
    var h4 = document.createElement('h4');
    h4.innerText = v.Location;
    $(div).append(h4);
    // Iframe
    var iframe = document.createElement('iframe');
    $(iframe).attr('src', v["iFrame Map"]);
    //$(iframe).attr('allowfullscreen', '');
    $(div).append(iframe);
    $('.pageLocations').append(div);
});

/* Teams / Rankings Page */
var teams = Object.assign([], data.Teams);
teams.sort(function (a, b) {
    return b.Points - a.Points;
});

var pointsTableDiv = document.createElement('div');
$(pointsTableDiv).addClass("contentDiv");
var pointsTable = document.createElement('table');
$(pointsTableDiv).append(pointsTable);
var tableHead = document.createElement('thead')
tableHead.innerHTML = '<tr><th>Points</th><th>Team</th></tr>';
$(pointsTable).append(tableHead);
$.each(teams, function (i, v) {
    var row = document.createElement('tr');
    row.innerHTML = '<tr><td>' + v.Points + '</td><td>' + v.School + '</td></tr>';
    $(pointsTable).append(row);
});


$('.pageTeams').append(pointsTableDiv);

var div = document.createElement('div');
$(div).addClass("contentDiv");
var teamsDiv = document.createElement('div');
$(teamsDiv).addClass("teamsDiv");
$(div).append(teamsDiv);
$.each(data.Teams, function (i, v) {
    var teamDiv = document.createElement('div');
    $(teamDiv).addClass("teamDiv");
    // Team Logo
    var img = document.createElement('img');
    $(img).attr("src", v.Logo);
    $(teamDiv).append(img);
    // Team Name
    var h4 = document.createElement('h4');
    h4.innerText = v["Team Name"];
    $(teamDiv).append(h4);
    // Team School
    var p = document.createElement('p');
    p.innerText = v.School;
    $(teamDiv).append(p);

    $(teamsDiv).append(teamDiv);
});
$('.pageTeams').append(div);
