import pgPromise from 'pg-promise'

const user = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const name = process.env.DB_NAME

const pgp = pgPromise()
const db = pgp(`postgres://${user}:${password}@${host}:${port}/${name}`)

export { db }