const { MongoClient, ObjectId } = require('mongodb')

const CONNECTION_STRING =
  'mongodb+srv://nijatdursunlu:dursunlunicat55@cluster0.vnhevzw.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

client.connect(async (err) => {
  if (err) {
    console.log('error: ', err)
    return
  }
  console.log('Connected to database!')

  const db = client.db('test')
  const users = db.collection('users')

  /*
  users.insertOne({
    firstName: 'Rashad',
    lastName: 'Ibrahimov',
    age: 23,
    username: 'rashadibr',
    email: 'nijat.dursunlu@gmail.com',
    address: {
      city: 'Baku',
      country: 'Azerbaijan',
    },
  })
 */

  /*
  const usersList = await users.updateOne(
    {
      _id: ObjectId('632ef41af4e224ab75c71511'),
    },
    {
      $set: {
        firstName: 'Rashad',
        lastName: 'Ibrahimov',
        age: 29,
        username: 'rashadibr',
        email: 'nijat.dursunlu@gmail.com',
        address: {
          city: 'Baku',
          country: 'Azerbaijan',
        },
      },
    }
  )
  */

  console.log('usersList', usersList)
})
