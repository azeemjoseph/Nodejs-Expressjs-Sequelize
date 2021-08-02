const user = require("../models/user");

// https://sequelize.org/v5/manual/models-usage.html                    // for more functions
exports.getAllUsers = (req, res, next) => {
  //req = for request object res = for response object next is used to call next middeleware
  user
    .findAll()
    .then((user) => {
      console.log("user : ", user);
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

//POSTMAN is used to test the End Points localhost:3001/GetuserByName (set raw then select datatype JSON)
exports.getSpecificUserByName = (req, res, next) => {
  console.log("User name in req body : ", req.body.username);
  UserName = req.body.username;
  user
    .findOne({
      where: { userName: UserName },
      attributes: ["id", ["userName", "userNameAlias"]],                                                     // This attribute is used to set Alias like :column as column1
    })
    .then((user) => {
      // user.get('userName') will contain the name of the user as column name of table
      console.log("user.get(id) :", user.get("userNameAlias"));
      res.send(user);
    });
};
