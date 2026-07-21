import request from 'supertest'
import { beforeAll, afterAll, describe, it, expect } from 'vitest'
import express, { type Express } from 'express'
import { startDatabase, stopDatabase } from '../setup/database'

let app: Express = express()

beforeAll(async () => {
    await startDatabase()
    const mod = await import('../../app')
    app = mod.app
})

afterAll(async () => {
    await stopDatabase()
})

describe('GET /test-db', () => {
    it('should return all users', async () => {
        const response = await request(app).get('/test-db')

        expect(response.status).toBe(200)
        expect(response.body).toEqual([{
            firstname: 'Pierre',
            lastname: 'Braem',
            email: 'pierre.braem@test.com'
        }])
    })
})

describe('GET /', () => {
    it('should return status 200', async () => {
        const response = await request(app).get('/')

        expect(response.status).toBe(200)
    })
})