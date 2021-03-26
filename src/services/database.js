import firebase from "./firebase";
const DB = firebase.firestore();

const fetchMovies = async () => DB.collection("Movies-react-app").get();
const addToDataBase = (e) => {
    e.preventDefault()
  const title = e.target["title"].value;
  const imageURL = e.target["image"].value;
  const youtube = e.target["youtube"].value;
  const info = e.target["info"].value;
  const description = e.target["description"].value;
 return DB.collection("Movies-react-app")
    .add({
      title,
      image: imageURL,
      description: description,
      youtube,
      info,
    })
    .then((doc) => console.log(doc.id));
};
export { fetchMovies, addToDataBase };
