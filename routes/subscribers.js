const express = require('express')
const router = express.Router()

 //Get All
 router.get('/', (req, res) => {
    res.send('Welcome to Rest Api application')
 })


//Get One
  router.get('/:id', (req, res) => {
    req.params.id
    
  })

  //Create One
  router.post('/', (req, res) => {
   
    
  })

//Update One
  router.patch('/:id', (req, res) => {
    
    
  })

  //Delete One
  router.delete('/:id', (req, res) => {
   
    
  })

module.exports = router