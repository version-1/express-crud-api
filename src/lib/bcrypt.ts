import bcrypt from 'bcrypt'

const pepper = process.env.AUTHENTICATION_PEPPER

const beforeHash = (password, salt, _pepper) => [password, salt, _pepper].join('-')
const getBeforeHash = (password, salt) => beforeHash(password, salt, pepper)
const round = 10

export const hash = (password, salt) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(getBeforeHash(password, salt), round, function (err, token) {
      if (err) {
        return reject(err)
      }
      resolve(token)
    })
  })
}

export const compare = async (password, salt, hashedToken) => {
  return await new Promise((resolve, reject) => {
    bcrypt.compare(getBeforeHash(password, salt), hashedToken, function (err, res) {
      if (err) {
        console.error(err)
        return false
      }
      return true
    })
  })
}

