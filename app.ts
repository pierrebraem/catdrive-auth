/* eslint-disable no-console */
import express, { type Express, type Request, type Response } from 'express'
import { db } from './db.ts'

const app: Express = express()
const port: number = Number(process.env.APP_PORT) || 3000

app.get('/', (req: Request, res: Response) => {
    const test: number = NaN
    console.log(test)
    res.send('Hello World')
})

app.get('/test-db', async (req: Request, res: Response) => {
    try{
        const result = await db.any('SELECT firstname, lastname, email FROM users;')
        res.json(result)
    }
    catch(err){
        console.error(err)
        res.status(500).json({ 'error': 'Database query failed' })
    }
})

app.listen(port, () => {
    console.log(`Auth service is running on port ${port}`)
})

export { app }