const express = require("express")
const passport = require('passport')
const router =  express.Router()
const usersController = require('../controllers/users.controller')

router.post('/signup', usersController.signUp)
router.post('/signin', usersController.signIn)

router.use(passport.authenticate("jwt", { session: false}))

router.get('/', (req, res) => {
  res.send('protected route')
})

router.get('/userinfos', usersController.index)

router.put('/userinfos/edit/:id', usersController.upload.single('photo'), usersController.update)

module.exports = router
