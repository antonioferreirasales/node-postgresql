// db.js
import postgres from 'postgres'
import 'dotenv/config'


const sql = postgres(process.env.DATABASE_URL,{ /* options */ })

export default sql