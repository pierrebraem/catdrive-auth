import { PostgreSqlContainer, StartedPostgreSqlContainer } from '@testcontainers/postgresql'
import pgPromise from 'pg-promise'
import fs from 'node:fs/promises'

let container: StartedPostgreSqlContainer | undefined = undefined
let pgp: ReturnType<typeof pgPromise> | undefined = undefined
let db = undefined

export async function startDatabase() {
    container = await new PostgreSqlContainer('postgres:18')
        .withDatabase('testdb')
        .withUsername('postgres')
        .withPassword('postgres')
        .start()

    const host = container.getHost()
    const port = container.getPort()
    const database = container.getDatabase()
    const user = container.getUsername()
    const password = container.getPassword()
    
    process.env.DB_HOST = host
    process.env.DB_PORT = String(port)
    process.env.DB_NAME = database
    process.env.DB_USERNAME = user
    process.env.DB_PASSWORD = password

    pgp = pgPromise()
    db = pgp(`postgres://${user}:${password}@${host}:${port}/${database}`)

    const sql = await fs.readFile(
        './database/init.sql',
        'utf8'
    )

    await db.query(sql)

    return db
}

export async function stopDatabase() {
    pgp?.end()
    await container?.stop()
}

export { db }