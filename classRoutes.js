const path = require('path')
const express = require('express')
const router = express.Router()
const classList = [] // our class list array

// RESTful
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})
router.get('/api/list', function (req, res) {
  res.json(classList) // Respond with JSON
})
router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id]) // Notice the wildcard in the URL?
  // Try browsing to /get/0 once you've added some entries
})

/** **************************************************** */
router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})
router.post('/api/create', function (req, res) {
  console.log('Creating the following student:', req.body.student)
  classList.push(req.body.student)
  res.redirect(req.baseUrl + '/api/list')
})

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})
router.post('/api/delete', function (req, res) {
  console.log('deleting a student entry')
  classList.splice(req.body.id, 1)
  res.redirect(req.baseUrl + '/api/list')
})

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})
router.post('/api/edit', function (req, res) {
  console.log('editing a student entry')
  classList[req.body.id] = req.body.student
  res.redirect(req.baseUrl + '/api/list')
})
/** ******************************* */

module.exports = router
