import firebase from "./firebase";
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const yahooProvider = new firebase.auth.OAuthProvider("yahoo.com")
const createNewUser = (email, pwd) => {
  auth.createUserWithEmailAndPassword(email, pwd).then((cred) => {
    console.log(cred);
    return cred;
  });
};
const authState = (callback) => {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      return callback({ logged: true, user });
    }
    return callback({ logged: false, user });
  });
};

const authOut = () => {
  return auth.signOut().then(console.log("User left ...."));
};

const authLogin = (e) => {
  e.preventDefault();
  const email = e.target["email"].value;
  const pwd = e.target["pwd"].value;
  return auth
    .signInWithEmailAndPassword(email, pwd)
    .then((cred) => console.log(cred));
};
const googleAuth = (e) => {
   e.preventDefault();
    return auth.signInWithPopup(googleProvider).then(res => {
       const creds = res.credential;
       const token = creds.token;
       const user = res.user;
    }).catch(err=> console.log('Err' ,err))
}
const yahooAuth = (e) => {
    return auth.signInWithPopup(yahooProvider).then(res => {
       const creds = res.credential;
       const token = creds.token;
       const user = res.user;
    }).catch(err=> console.log('Err' ,err))
}
 
const newEmailUser = (e) => {
  e.preventDefault();
  const form = e.target.form;
  const email = form["email"].value;
  const name = form["name"].value;
  const pwd = form["pwd"].value;
  if (localStorage) {
    localStorage.setItem("user", JSON.stringify({ email, name }));
  }
  return createNewUser(email, pwd);
};

export default newEmailUser;

export {authState, authOut, authLogin, auth, newEmailUser , googleAuth , yahooAuth };
