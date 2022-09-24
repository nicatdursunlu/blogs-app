import express from 'express'

import Blog from '../models/blog.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const blogs = await Blog.find().populate('author').exec()
  res.status(200).send(blogs)
})

router.get('/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('author').exec()
  res.status(200).send(blog)
})

router.post('/', async (req, res) => {
  const blog = new Blog(req.body)
  await blog.save()
  res.status(201).send()
})

router.put('/:id', async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).send()
})

router.delete('/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id)
  res.status(200).send()
})

export default router
