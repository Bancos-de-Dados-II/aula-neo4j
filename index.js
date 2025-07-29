import neo4j from 'neo4j-driver'
import dotenv from 'dotenv';
dotenv.config();

let driver = neo4j.driver(
    'neo4j://localhost:7687',
    neo4j.auth.basic('neo4j', 
        process.env.NEO4J_PASSWORD)
)

conectar();
async function conectar() {
    let session = driver.session();
    console.log('Conectado');
    session.close();
}