const UserModel = require("../models/user.model");
const FamilyModel = require("../models/family.model");
const { Op } = require("sequelize");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll({
      attributes: { exclude: ["email", "password"] },
      where: { FamilyGroupId: res.locals.user.FamilyGroupId },
    });
    if (users.length === 0) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error to get users");
  }
};

const getAllUsersAdmin = async (req, res) => {
  try {
    const users = await UserModel.findAll({
      attributes: { exclude: ["email", "password"] },
    });
    if (users.length === 0) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error to get users");
  }
};
const getOneUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      attributes: { exclude: ["email", "password"] },
      where: {
        FamilyGroupId: res.locals.user.FamilyGroupId,
        id: req.params.id,
      },
    });
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send("Error", error.message);
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      attributes: { exclude: ["password"] },
      where: {
        email: res.locals.user.email,
      },
    });
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send("Error", error.message);
  }
};

const getOneUserAdmin = async (req, res) => {
  try {
    const user = await UserModel.findByPk(req.params.id, {
      attributes: { exclude: ["email", "password"] },
    });
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send("Error", error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    if (req.body.email || req.body.password || req.body.id) {
      return res.status(403).send("Error to overwrite email, password or id");
    }
    const oldUser = await UserModel.findByPk(req.params.id);
    oldUser.set(
      req.body
    )
    oldUser.save()

    const userupdated = await UserModel.findByPk(req.params.id);
console.log(userupdated);
    if (userupdated) {
      return res.status(200).json({
        message: `User id: ${userupdated.id} updated `,
      });
    } else {
      return res.status(404).send("Error to overwrite data");
    }
  } catch (error) {
    console.log(error)
    return res.status(500).send("Error retrieving data");
  }
};



const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      return res.status(200).send("User deleted");
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send("Error", error.message);
  }
};

const removeUserFamily = async (req, res) => {
  try {
    const user = await UserModel.findByPk(req.params.id);
    const family = await FamilyModel.findByPk(req.params.fmid);
    const newuserfamily = family.removeUser(user);
    res.status(200).send(`User ${user.name} removed from ${family.name}`);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error to remove user");
  }
};

const addUserFamily = async (req, res) => {
  try {
    const user = await UserModel.findByPk(req.params.id);
    const family = await FamilyModel.findByPk(req.params.fmid);
    const newuserfamily = family.addUser(user);
    res.status(200).send(`User ${user.name} added to ${family.name}`);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error to add a family");
  }
};

// localhost:3000/api/user/mod/:id/?familyGroup=res.locals.user.id INVITAS

// localhost:3000/api/user/mod/:id?id=(res.locals.user.id) SOLICITUD 

/* const updateUser = async (req, res) => {
  try {
    if (req.body.email || req.body.password || req.body.id) {
      return res.status(403).send("Error to overwrite email, password or id");
    }
    const oldUser = await UserModel.findByPk(req.params.id);
    oldUser.set(const updateUser = async (req, res) => {
  try {
    if (req.body.email || req.body.password || req.body.id) {
      return res.status(403).send("Error to overwrite email, password or id");
    }
    const oldUser = await UserModel.findByPk(req.params.id);
    oldUser.set(
      req.body
    )
    oldUser.save()
    const userupdated = await UserModel.findByPk(req.params.id);
console.log(userupdated);
    if (userupdated) {
      return res.status(200).json({
        message: `User id: ${userupdated.id} updated `,
      });
    } else {
      return res.status(404).send("Error to overwrite data");
    }
  } catch (error) {
    console.log(error)
    return res.status(500).send("Error retrieving data");
  }
};
      req.body
    )
    oldUser.save()
    const userupdated = await UserModel.findByPk(req.params.id);
console.log(userupdated);
    if (userupdated) {
      return res.status(200).json({
        message: `User id: ${userupdated.id} updated `,
      });
    } else {
      return res.status(404).send("Error to overwrite data");
    }
  } catch (error) {
    console.log(error)
    return res.status(500).send("Error retrieving data");
  }
}; */

module.exports = {
  getAllUsers,
  getAllUsersAdmin,
  getOneUser,
  getOneUserAdmin,
  updateUser,
  deleteUser,
  removeUserFamily,
  addUserFamily,
  getUserByEmail,
};
