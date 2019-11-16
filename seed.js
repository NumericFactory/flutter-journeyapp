const dotenv = require('dotenv').config();
const mongoose = require("mongoose");
const City = require("./models/city.model");

console.log(`${process.env.BASEURL}`);

mongoose
  .connect(
    `${process.env.DB_CONN}`,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    Promise.all([
      new City({
        name: "Paris",
        image: `${process.env.BASEURL}/assets/images/paris.jpeg`,
        activities: [
          {
            image: `${process.env.BASEURL}/assets/images/activities/louvre.jpeg`,
            name: "Louvre",
            city: "Paris",
            price: 12.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/chaumont.jpeg`,
            name: "Chaumont",
            city: "Paris",
            price: 0.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/dame.jpeg`,
            name: "Notre Dame",
            city: "Paris",
            price: 0.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/defense.jpeg`,
            name: "La défense",
            city: "Paris",
            price: 0.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/eiffeil.jpeg`,
            name: "Tour Eiffel",
            city: "Paris",
            price: 15.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/luxembourg.jpeg`,
            name: "Jardin Luxembourg",
            id: "a6",
            city: "Paris",
            price: 0.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/mitterand.jpeg`,
            name: "Bibliothèque Mitterrand",
            id: "a7",
            city: "Paris",
            price: 0.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/montmartre.jpeg`,
            name: "Montmartre",
            id: "a8",
            city: "Paris",
            price: 0.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/catacombe.jpeg`,
            name: "Catacombes",
            id: "a9",
            city: "Paris",
            price: 10.0
          }
        ]
      }).save(),
      new City({
        name: "Lyon",
        image: `${process.env.BASEURL}/assets/images/lyon.jpeg`,
        activities: [
          {
            image: `${process.env.BASEURL}/assets/images/activities/lyon_opera.jpeg`,
            name: "Opéra",
            id: "l1",
            city: "Lyon",
            price: 100.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/lyon_bellecour.jpeg`,
            name: "Place Bellecour",
            id: "l2",
            city: "Lyon",
            price: 0.0
          },
          {
            image: `${process.env.BASEURL}/images/activities/lyon_basilique.jpeg`,
            name: "Basilique St-Pierre",
            id: "l3",
            city: "Lyon",
            price: 10.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/lyon_mairie.jpeg`,
            name: "Mairie",
            id: "l4",
            city: "Lyon",
            price: 0.0
          }
        ]
      }).save(),
      new City({
        name: "Nice",
        image: `${process.env.BASEURL}/assets/images/nice.jpeg`,
        activities: [
          {
            image: `${process.env.BASEURL}/images/activities/nice_orthodox.jpeg`,
            name: "Eglise Orthodoxe",
            id: "n1",
            city: "Nice",
            price: 5.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/nice_riviera.jpeg`,
            name: "Riviera",
            id: "n2",
            city: "Nice",
            price: 0.0
          },
          {
            image: `${process.env.BASEURL}/images/activities/nice_promenade.jpeg`,
            name: "Promenade des Anglais",
            id: "n3",
            city: "Nice",
            price: 0.0
          },
          {
            image: `${process.env.BASEURL}/assets/images/activities/nice_opera.jpeg`,
            name: "Opéra",
            id: "n4",
            city: "Nice",
            price: 100.0
          }
        ]
      }).save()
    ]).then(res => {
      console.log("data installed");
      mongoose.connection.close();
    });
  });
