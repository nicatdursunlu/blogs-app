import mongoose from 'mongoose'
import crypto from 'crypto'

const SALT = '12345'

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
})

UserSchema.pre('save', (next) => {
  this.password = crypto
    .pbkdf2Sync(this.password, SALT, 10000, 64, 'sha512')
    .toString('hex')
  console.log('this', this)
  next()
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel
