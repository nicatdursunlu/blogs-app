import express from 'express'

import User from '../models/user.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const users = await User.find()
  res.status(200).send(users)
})

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  res.status(200).send(blog)
})

router.post('/', async (req, res) => {
  const user = new User(req.body)
  await user.save()
  res.status(201).send()
})

router.put('/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).send()
})

router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.status(200).send()
})

export default router
