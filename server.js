const express = require("express");
require('dotenv').config();
const sequelize = require('./persistence');

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

const users = require("./routes/user");

app.get("/", (req, res) => {
  res.status(200);
  res.send(`
    <br>&emsp;&emsp; <h3 style="color:red;">Nodejs Server with Express and Sequelize Configuration with Migration and Models running succesfully!!</h1>
    <p style="color:blue;"> Now you can modify, edit, merge up to your requirements.</p>
    <h4>Credits</h4>
    <p style="color:blue;"> Azeem Joseph (@Azeem Joseph) https://github.com/azeemjoseph </p>
             
    <h4>## License</h4>
             
    <p style="color:blue;">The MIT License (MIT)</p>`);
});


app.use(users);

sequelize.init_sequelize().then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}).catch((err) => {
  console.error(err);
  process.exit(1);
});

const gracefulShutdown = () => {
  sequelize.shutDownServer()
      .catch(() => {})
      .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon