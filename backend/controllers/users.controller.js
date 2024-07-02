const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('../models/user')
const userValidation = require('../validation/validation')
require('dotenv').config()

exports.signUp = (req, res) => {

  /* récupérer les données */

  const body = req.body

  /* Valider les données */

  const validationResult = userValidation(body).userValidationSignUp;
  if (validationResult.error) {
    return res.status(401).json(validationResult.error.details[0].message);
  }

  /*  hash du password */

  bcrypt.hash(body.password, 10)
    .then((hash) => {
      if(!hash) return res.status(500).json({msg : "server error"})

        delete body.password

        new user({userName : body.userName, phone: body.phone, photo: body.photo, password : hash})
          .save()
          .then((user) => {
            console.log(user)
            res.status(201).json({msg : "user created"})
          })
          .catch((error) => {
            res.status(500).json(error)
          })
    })
    .catch((error) => {
      res.status(500).json(error)
    })
}

exports.signIn = (req, res) => {
  const userName = req.body.userName
  const password = req.body.password

  /* validation des données */

  const validationUserLogIn = userValidation(req.body).userValidationLogIn
  if (validationUserLogIn.error) {
    return res.status(401).json(validationUserLogIn.error.details[0].message);
  }

  /* trouver l'user dans la base de données */

  user.findOne({userName: userName})
    .then((user) => {
      if(!user) return res.status(404).json({ msg : "user not found "})

        /* vérification du mot du password */
        bcrypt.compare(password, user.password)
        .then((match) => {
          if(!match) return res.status(500).json({ msg: "server error"})
          res.status(200).json( {
            userName : user.userName,
            id : user._id,
            token : jwt.sign( { id: user._id }, process.env.SECRET_KEY, {expiresIn : "12h"})
          })

        })
    .catch((err) => res.status(500).json(err))
  })
    .catch((err) => res.status(500).json(err))
}