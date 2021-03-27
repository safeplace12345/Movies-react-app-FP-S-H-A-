import firebase from "./firebase";
const DB = firebase.firestore();

const fetchMovies = async () => DB.collection("Movies-react-app").get();
const saveMovie = async ({title,imageURL,youtube,info,description}) => {
 return await DB.collection("Movies-react-app")
    .add({
      title,
      image: imageURL,
      description: description,
      youtube,
      info,
    })
    .then((doc) => console.log(doc.id));
};
export { fetchMovies, saveMovie };
