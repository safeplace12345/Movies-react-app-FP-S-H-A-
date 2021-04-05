import firebase from "./firebase";
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const yahooProvider = new firebase.auth.OAuthProvider("yahoo.com");
const createNewUser = (email, pwd) =>
  auth.createUserWithEmailAndPassword(email, pwd);
const authState = (callback) =>
  auth.onAuthStateChanged((user) => callback({ logged: !!user, user }));

const authOut = () => auth.signOut().then(console.log("User left ...."));

const authLogin = async ({ email, pwd }) =>
  await auth
    .signInWithEmailAndPassword(email, pwd)
    .then((cred) => console.log(cred));

const authSignIn = (provider) =>
  auth
    .signInWithPopup(provider)
    .then((res) => ({
      user: res.user,
      token: res.token,
      cred: res.credential,
    }))
    .catch((err) => console.log("Err", err));

const googleAuth = async () => authSignIn(googleProvider);

const yahooAuth = async (e) => authSignIn(yahooProvider);

const newEmailUser = ({ email, name, pwd }) => createNewUser(email, pwd);

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
