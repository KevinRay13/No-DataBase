const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const baseUrl =
  "http://beta-api-kuroganehammer.azurewebsites.net/api/characters";

let characters = [];

app.use(bodyParser.json());
app.use(cors());
axios
  .get(baseUrl)
  .then(res => {
    characters = res.data.map(character => {
      return {
        name: character.Name,
        OwnerId: character.OwnerId,
        img: character.MainImageUrl
      };
    });

    //console.log(characters);
  })
  .catch(err => console.log("errorrr"));

app.get("/api/characters", (req, res) => {
  //console.log(characters);
  //   characters = characters.map(character => {
  //     return {
  //       name: character.Name,
  //       OwnerId: character.OwnerId,
  //       img: character.MainImageUrl
  //     };

  res.json(characters);
});

//   let newArr = [];
//   characters.forEach((character, i) => {
//     // console.log(characters.name);
//     newArr.push({
//       name: character.Name,
//       OwnerId: character.OwnerId,
//       img: character.MainImageUrl
//     });
//   });
//   res.json(newArr);
// });
app.delete(`/api/characters/:id/`, (req, res, next) => {
  const deleteId = req.params.id;
  delCharacter = characters.findIndex(del => del.id === +deleteId);

  characters.splice(+req.params.id, 1);
  //console.log(characters);
  res.send(characters);
});

app.post("/api/characters/:name/", (req, res) => {
  const { name, img } = req.body;
  characters.push({ name, img });

  res.status(200).send(characters);
});

app.listen(3001, console.log("im listening on port 3001"));
