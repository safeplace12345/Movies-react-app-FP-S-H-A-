
const form = (e, callback) => {
  const pwd = e.target["pwd"].value;
  const email = e.target["email"].value;
  const name = e.target["name"].value;
  let data = {
    email,
    pwd,
    name
  };
  return callback(data);
};
const movie = (e ,callback) => {
     const title = e.target["title"].value;
     const imageURL = e.target["image"].value;
     const youtube = e.target["youtube"].value;
     const info = e.target["info"].value;
     const description = e.target["description"].value;
     let data = {
       title,
       imageURL,
       youtube,
       info,
       description,
     };
     return callback(data)
}

export const getData = {
    form,
    movie
}
