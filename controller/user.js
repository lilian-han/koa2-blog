const { exec } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = async (username, password) => {
  password = genPassword(password)
  const sql = `select username, realname from users where username='${username}' and password='${password}'`
  const rows = await exec(sql)
  return rows[0] || {}
}

module.exports = login
