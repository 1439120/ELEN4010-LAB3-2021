'use strict'

const button1 = document.getElementById('dispButton')

let EIEstud = [{ name: 'nkosana', Studid: '1439120' }, { name: 'justice', Studid: '123456' },
  { name: 'thabo', Studid: '456456' }, { name: 'france', Studid: '62655' }, { name: 'kington', Studid: '15548' }]

// Function for displaying all students
const displayStudents = function () {
  const paragraph = document.createElement('p') // Create <p> element

  let list = ''
  EIEstud.forEach((elem) => {
    list = elem.name + ' - ' + elem.Studid + ' '
    const text = document.createTextNode(list) // Create text node
    paragraph.appendChild(text) // Append the text to <p>
    // lets create a button for every student
    const stdButton = document.createElement('button')
    stdButton.innerHTML = 'edit'
    paragraph.appendChild(stdButton)
    // new line after each stduent is displayed
    const newline = document.createElement('p')
    paragraph.appendChild(newline)
    // event for editing the student
    stdButton.addEventListener('click', () => {
      // newline.removeChild(newline.lastChild)
      createTextBox(newline, elem)
    }, false)
  })

  const students = document.getElementById('studentList')
  students.replaceWith(paragraph) // Append <p> to the <div>
}

// event listener for displaying all students
button1.addEventListener('click', function () {
  displayStudents()
}, false)

// function for removing students paragraph tag
const removePara = function () {
  const students = document.getElementById('studentList')
  students.removeChild(students.firstChild)
}

// event listener for removing all students
const button2 = document.getElementById('eraseButton')

button2.addEventListener('click', function () {
  EIEstud = []
  removePara()
  document.getElementById('button2').innerHTML = ''
  document.getElementById('button2').removeChild(button2)
}, false)

// this function creates a text box when you want to edit
const createTextBox = (ParElem, elem) => {
  const NameEdit = document.createElement('label')
  NameEdit.innerHTML = ' Name of student: '
  const box = document.createElement('input')
  box.type = 'text'

  const IdEdit = document.createElement('label')
  IdEdit.innerHTML = ' Student id: '
  const newbox = document.createElement('input')
  newbox.type = 'text'

  // button to sumbit changes
  const editButton = document.createElement('button')
  editButton.innerHTML = 'submit'

  ParElem.replaceWith(NameEdit, box, IdEdit, newbox, editButton, document.createElement('p'))

  editButton.addEventListener('click', () => {
    editDetails(NameEdit.value, IdEdit.value, elem, ParElem)
    document.write(1002)
  }, false)
}

// function for editing the student details
const editDetails = (name_, id_, elem, ParElem) => {
  elem.name = name_
  elem.Studid = id_
  console.log(elem)
  while (ParElem.firstChild) {
    ParElem.removeChild(ParElem.firstChild)
  }
  displayStudents()
}
