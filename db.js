// db.js
import postgres from 'postgres'

const sql = postgres('postgresql://postgres:DqW4TsBJRQkhx2fXvTzK@containers-us-west-111.railway.app:7157/railway',{ /* options */ })

export default sql