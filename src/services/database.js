import firebase from "./firebase";
const DB = firebase.firestore();

const fetchMovies = async () => DB.collection("Movies-react-app").get();
const saveMovieToDB = async ({title,imageURL,youtube,info,description}) => {
 return await DB.collection("Movies-react-app")
    .add({
      title,
      image: imageURL,
      description: description,
      youtube,
      info,
    })
};
export { fetchMovies, saveMovieToDB };
