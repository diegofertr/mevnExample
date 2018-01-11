const express = require('express')
const router = express.Router()

const User = require('../models/User')

/**
 * Get user by Id
 */
 router.get('/user/:id', (req, res, next) => {
   User.findById(req.params.id, (err, user) => {
     if (err) {
       throw err
     } else {
       res.json(user)
     }
   })
 })

/**
 * Get all user
 */
 router.get('/user', (req, res) => {
   User.find((err, users) => {
     if (err) {
       throw err
     } else {
       res.json(users)
     }
   })
 })

/**
 * create user
 */
 router.post('/', (req, res) => {
   const user = new User(req.body)
   user.save()
    .then(user => {
      res.status(200).json({user: `Usuario ${req.body.email} registrado correctamente`})
    })
    .catch(err => {
      res.status(400).json({user: 'Error al registrar al usuario'})
    })
 })

 module.exports = router
