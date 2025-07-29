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
        'MERGE (p:Cliente{nome: $nome, email:$email})',
        {nome:'João', email:'joao@gmail.com'}
    ).then(result=> {
        console.log(result.summary)
    }).catch(error =>{
        console.log(error);
    })
}