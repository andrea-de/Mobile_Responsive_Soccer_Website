document.getElementById("login").addEventListener("click", login);
document.getElementById("logout").addEventListener("click", logout);
document.getElementById("post").addEventListener("click", writeNewPost);
//document.getElementById("body").addEventListener("submit", writeNewPost);
document.getElementById("body").addEventListener("keydown", function () {
    whatkey(event);
});

function whatkey(e) {
    if (e.key == 'Enter') {
        writeNewPost();
    }
}

function login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

function logout() {
    firebase.auth().signOut().then(function () {
        console.log('Signed Out');
    });
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log("Signed In");
        showChat();
        getPosts();

        //        document.getElementById('body').addEventListener('click', function () {
        //            showSomeInfo(user);
        //        });
    } else {
        // No user is signed in.
        $('#login').removeClass('hide');
        $('.chatbox').addClass('hide');
        $('.chatDiv').addClass('hide');
        $('#logout').addClass('hide');
    }
});

//function showSomeInfo(user) {
//    console.log("Sign-in provider: " + user.providerId);
//    console.log("  Photo URL: " + user.photoURL);
//    console.log(user);
//}

function showChat() {
    $('#login').addClass('hide');
    $('.chatbox').removeClass('hide');
    $('.chatDiv').removeClass('hide');
    $('#logout').removeClass('hide');
}

function writeNewPost() {
    if (document.getElementById("body").value == '') {
        return;
    } else {
        var userName = firebase.auth().currentUser.displayName;
        var text = document.getElementById("body").value;
        document.getElementById("body").value = "";

        // A post entry.

        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('match1').push().key;



        var postData = {
            user: userName,
            body: text
        };

        var updates = {};
        updates['/match1/' + newPostKey] = postData;


        return firebase.database().ref().update(updates);
    }
}

function getPosts() {
    firebase.database().ref('match1').on('value', function (data) {
        var logs = document.getElementById("posts");
        //logs.innerHTML = "";
        var posts = data.val();

        for (var key in posts) {
            // runs each time a text is posted the number of posts. Seems like too much 
            var text = document.createElement("div");
            var element = posts[key];
            var br = document.createElement('br');

            if (element.user == firebase.auth().currentUser.displayName) {
                $(text).addClass('myPost')
                text.append("You: " + element.body);
                logs.append(text);
                logs.append(br);
            } else {
                text.append(element.user + ": " + element.body);
                logs.append(text);
                logs.append(br);
            }




        }
        scroll();
    });
}

function scroll() {
    setTimeout(function () {
        var element = document.getElementById("posts");
        element.scrollTop = element.scrollHeight;
    }, 0);
}


/*
var loading = new Promise(function (resolve, reject) {
    getPosts();
});
loading.then(function () {
    scroll();
});
*/
