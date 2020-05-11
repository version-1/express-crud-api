import bcrypt from 'bcrypt'

const pepper = process.env.AUTHENTICATION_PEPPER

const beforeHash = (password, salt, _pepper) => [password, salt, _pepper].join('-')
const getBeforeHash = (password, salt) => beforeHash(password, salt, pepper)
const round = 10

export const hash = (password, salt) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(getBeforeHash(password, salt), round, function (err, hash) {
      if (err) {
        return reject(err)
      }
      resolve(hash)
    })
  })
}

export const compare = (password, salt, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(getBeforeHash(password, salt), hash, function (err, res) {
      if (err) {
        return reject(err)
      }
      resolve(res)
    })
  })
}

