import bcrypt from 'bcrypt'

const pepper = process.env.AUTHENTICATION_PEPPER!

const beforeHash = (password: string, salt: string, _pepper: string) => [password, salt, _pepper!].join('-')
const getBeforeHash = (password: string, salt: string) => beforeHash(password, salt, pepper)
const round = 10

export const hash = (password: string, salt: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(getBeforeHash(password, salt), round, function (err: Error, token: string) {
      if (err) {
        return reject(err)
      }
      resolve(token)
    })
  })
}

export const compare = async (password: string, salt: string, hashedToken: string) => {
  return await new Promise((resolve, reject) => {
    bcrypt.compare(getBeforeHash(password, salt), hashedToken, function (err: Error, res: any) {
      if (err) {
        console.error(err)
        return false
      }
      return true
    })
  })
}

