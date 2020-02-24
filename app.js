
// singInWIthEmailAndPassword(email, pass);
// createUserWithEmailAndPassword(email, pass);
// onAuthStateChanged(firebaseUser => { }) returns

  // Your web app's Firebase configuration
// you code here

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const emailTxt = $('#exampleInputEmail1');
const passText = $('#exampleInputPassword1');
const logoutBtn = $('#logout-btn');
const loginBtn = $('#loginBtn');
const singUpBtn = $('#signUpBtn');

// logoutBtn.hide()

loginBtn.on("click", function(){
    event.preventDefault();
    
    const email = emailTxt.val();
    const pass = passText.val();
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass).then(function(res) {
        console.log('here');
        console.log(res)
    });

    promise.catch(function(e){
        console.log(e.message)
    });
    // clear inputs
    passText.val('');
    emailTxt.val('');

})

firebase.auth().onAuthStateChanged(firebaseUser => { 
    if(firebaseUser){
        console.log(firebaseUser);
        logoutBtn.show();
    }else{
        logoutBtn.hide();
    }
});

singUpBtn.on("click", function(){
    event.preventDefault();
    
    const email = emailTxt.val();
    const pass = passText.val();
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass).then(function(res) {
        console.log(res)

    });

    promise.catch(function(e){
        console.log(e.message)
    });
    // clear inputs
    passText.val('');
    emailTxt.val('');

    console.log('here');
});

logoutBtn.on('click', function(res){
    console.log('here')
    firebase.auth().signOut();
})




