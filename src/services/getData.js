
const form = (e, callback) => {
  const pwd = e.target["Password"].value;
  const email = e.target["Email"].value;
  return callback({email,pwd});
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
