const mongoose = require('mongoose')
const User = require('./models/user')

const CONNECTION_STRING =
  'mongodb+srv://nijatdursunlu:dursunlunicat55@cluster0.vnhevzw.mongodb.net/blog-app?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_STRING)

/*
const newUser = new User({
  firstName: 'Nijat',
  lastName: 'Dursunlu',
  age: 25,
  email: 'ndursunlu@gmail.com',
  address: {
    city: 'Sheki',
    country: 'Azerbaijan',
  },
})
newUser.save()
*/

/*
User.find({})
  .exec()
  .then((result) => {
    console.log('result', result)
  })
*/

console.log('OK')
