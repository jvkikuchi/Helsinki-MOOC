/*
 **
  Thins if file is only used to teste the DB, and isn't used on the application
 **
*/

const mongoose = require("mongoose");

if(process.argv. length < 3) {
  console.log("Please provide as an argumento: node mongo.js <password>")
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://kikuchi:${password}@cluster0.ogm7l.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: process.argv[3],
  date: new Date(),
  important: true,
})

// note.save().then(result => {
//   console.log('note, saved!')
//   mongoose.connection.close()
// })



Note.find({}).then(result => {
  result.forEach(note =>{
    console.log(note)
  })
  mongoose.connection.close()
})