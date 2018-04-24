/**
 * Created by Kristian Nielsen on 24-04-2018.
 */
const { Pool, Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Neo4J_ex',
    password: 'password',
    port: 5432,
})

client.connect()

// postgres endorsement 1
console.time('pg_e1');
client.query('SELECT node_id, name FROM nodes WHERE node_id IN (SELECT target_node_id FROM edges WHERE source_node_id = 0);', (err, res) => {
    // console.log(err, res);
    // client.end();
    console.timeEnd('pg_e1');
});

// postgres endorsement 2
console.time('pg_e2');
client.query('SELECT node_id, name FROM nodes WHERE node_id IN (SELECT target_node_id FROM edges WHERE source_node_id in (SELECT target_node_id FROM edges WHERE source_node_id = 0));', (err, res) => {
    // console.log(err, res);
    // client.end();
    console.timeEnd('pg_e2');
});

// postgres endorsement 3
console.time('pg_e3');
client.query('SELECT node_id, name FROM nodes WHERE node_id IN (SELECT target_node_id FROM edges WHERE source_node_id in (SELECT target_node_id FROM edges WHERE source_node_id in (SELECT target_node_id FROM edges WHERE source_node_id = 0)));', (err, res) => {
    // console.log(err, res);
    // client.end();
    console.timeEnd('pg_e3');
});

// postgres endorsement 4
console.time('pg_e4');
client.query('SELECT node_id, name FROM nodes WHERE node_id IN (SELECT target_node_id FROM edges WHERE source_node_id in (SELECT target_node_id FROM edges WHERE source_node_id in (SELECT target_node_id FROM edges WHERE source_node_id in (SELECT target_node_id FROM edges WHERE source_node_id = 0))));', (err, res) => {
    // console.log(err, res);
    // client.end();
    console.timeEnd('pg_e4');
});

// postgres endorsement 5

console.time('pg_e5');
client.query('SELECT node_id, name FROM nodes WHERE node_id IN (SELECT target_node_id FROM edges WHERE source_node_id in (SELECT target_node_id FROM edges WHERE source_node_id in (SELECT target_node_id FROM edges WHERE source_node_id in (SELECT target_node_id FROM edges WHERE source_node_id in (SELECT target_node_id FROM edges WHERE source_node_id = 0)))));', (err, res) => {
    // console.log(err, res);
    client.end();
    console.timeEnd('pg_e5');
});
