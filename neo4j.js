/**
 * Created by Kristian Nielsen on 24-04-2018.
 */
const cypher = require('cypher-stream')('bolt://localhost', 'neo4j', 'password');

console.time('neo_e1');
cypher('MATCH (:Person {node_id: 0})-[]->(p) RETURN (p.node_id)')
    .on('data', function (result){

    })
    .on('end', function() {
        console.timeEnd('neo_e1');
    });

console.time('neo_e2');
cypher('MATCH (:Person {node_id: 0})-[]->()-[]->(p) RETURN (p.node_id)')
    .on('data', function (result){

    })
    .on('end', function() {
        console.timeEnd('neo_e2');
    });

console.time('neo_e3');
cypher('MATCH (:Person {node_id: 0})-[]->()-[]->()-[]->(p) RETURN (p.node_id)')
    .on('data', function (result){

    })
    .on('end', function() {
        console.timeEnd('neo_e3');
    });

console.time('neo_e4');
cypher('MATCH (:Person {node_id: 0})-[]->()-[]->()-[]->()-[]->(p) RETURN (p.node_id)')
    .on('data', function (result){

    })
    .on('end', function() {
        console.timeEnd('neo_e4');
    });

console.time('neo_e5');
cypher('MATCH (:Person {node_id: 0})-[]->()-[]->()-[]->()-[]->()-[]->(p) RETURN (p.node_id)')
    .on('data', function (result){

    })
    .on('end', function() {
        console.timeEnd('neo_e5');
    });