const express = require("express");
const sequelize = require("./util/database");
const User = require("./models/user");
const UserLoginTime = require("./models/userlogintime");
// const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());
app.use(express.json());

const PORT = 3001;

const users = require("./routes/user");
const loginUserList = require('./routes/loginusertime');

app.get("/", (req, res) => {
  res.status(200);
  res.send(`
    <br>&emsp;&emsp; <h3 style="color:red;">Nodejs Server with Express and Sequelize Configuration running succesfully!!</h1>
    <p style="color:blue;"> Now you can modify, edit, merge up to your requirements.</p>
    <h4>Credits</h4>
    <p style="color:blue;"> Azeem Joseph (@Azeem Joseph) https://github.com/azeemjoseph </p>
             
    <h4>## License</h4>
             
    <p style="color:blue;">The MIT License (MIT)</p>`);
});

app.use(users);
app.use(loginUserList);

// app.listen(PORT, () => {
//   console.log(`Node js server is running on PORT: ${PORT}`);
// });

User.hasMany(UserLoginTime);

sequelize
  // .authenticate()
  // .sync({ force: true })                                                            // if need to create DB or new tables
  .sync()
  .then((result) => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then((user) => {
    if (!user) {
      return User.create({ userName: "Azeem Joseph", userEmail: "Azeem@gmail.com" });
    }
    return user;
  })
  .then((user) => {
    // console.log("user : ---> ", user);
    app.listen(PORT, () => {
      console.log(
        "Nodejs Server with Express and Sequelize Configuration Listening on PORT : ",
        PORT
      );
      console.log(`Open your browser on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
