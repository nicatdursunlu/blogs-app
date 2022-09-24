import mongoose from 'mongoose'
import express from 'express'

import blogRoutes from './routes/blog.js'
import userRoutes from './routes/user.js'

const CONNECTION_STRING =
  'mongodb+srv://nijatdursunlu:dursunlunicat55@cluster0.vnhevzw.mongodb.net/blog-app?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING)

const app = express()
app.use(express.json())
app.use('/api/v1/blogs', blogRoutes)
app.use('/api/v1/users', userRoutes)

app.listen(8080, () => {
  console.log('Express server is running on port 8080!')
})
