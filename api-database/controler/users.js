const usersModel = require('../model/users')

const getAllUsers = async (req, res, next) => {
    try {
      let data = await usersModel.getAllUsers();
      res.json({
        message: "get all user success from database",
        data: data,
      })
    } catch (error) {
      res.status(500).json({
        message: 'server error',
        serverMessage: error,
      })
    }
  }

  const createNewUser = async (req, res, next) => {
    const { body } = req;
    try {
      await usersModel.createNewUser(body);
      res.json({
        message: "create user success",
        data: body
      })
    } catch (error) {
      res.status(500).json({
        message: 'server error',
        serverMessage: error,
      })
    }
  }

  const updateUser = async (req, res, next) => {
    const {id} = req.params;
    console.log(id);
    const {body} = req;
    try {
      await usersModel.updateUser(body, id);
      res.json({
        message: "update user success",
        data: {
          id: id,
          ...body,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: 'server error',
        serverMessage: error,
      })
    }
  }

  const deleteUser = async (req, res, next) => {
    const {id} = req.params;
    try {
      await usersModel.deleteUser(id);
      res.json({
        message: "delete user success",
        data: null
      });
    } catch (error) {
      res.status(500).json({
        message: 'server error',
        serverMessage: error,
      })
    }
  }

  module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
  }