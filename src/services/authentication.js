import firebase from "./firebase";
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const yahooProvider = new firebase.auth.OAuthProvider("yahoo.com");
const createNewUser = (email, pwd) => {
  auth.createUserWithEmailAndPassword(email, pwd).then((cred) => {
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

const authLogin = async ({ email, pwd }) => {
  return await auth
    .signInWithEmailAndPassword(email, pwd)
    .then((cred) => console.log(cred));
};
const googleAuth = async (e) => {
  e.preventDefault();
  return await auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      return {
        user: res.user,
        token: res.token,
        cred: res.credential,
      };
  })
    .catch((err) => console.log("Err", err));
};
const yahooAuth = async (e) => {
  return await auth
    .signInWithPopup(yahooProvider)
    .then((res) => {
      return {
        user: res.user,
        token: res.token,
        cred: res.credential,
      }
    })
    .catch((err) => console.log("Err", err));
};

const newEmailUser = ({email,name,pwd}) => {
    if (localStorage) {
    localStorage.setItem("user", JSON.stringify({ email, name }));
  }
  return createNewUser(email, pwd);
};

export default newEmailUser;

export {
  authState,
  authOut,
  authLogin,
  auth,
  newEmailUser,
  googleAuth,
  yahooAuth,
};
