import neo4j, { session } from 'neo4j-driver';
import dotenv from 'dotenv';
dotenv.config();

let driver = neo4j.driver(
    'neo4j://localhost:7687',
    neo4j.auth.basic('neo4j', 
        process.env.NEO4J_PASSWORD)
)

conectar();
async function conectar() {
    driver.session().run(
        'MATCH (c:Cliente{nome:$nome}) RETURN c.nome, c.email',
        {nome:'João'}
    ).then(result=> {
        console.log(result.records);
    }).catch(error =>{
        console.log(error);
    })
}