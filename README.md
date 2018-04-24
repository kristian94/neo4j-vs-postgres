# neo4j-vs-postgres

I did my testing in Node.

The neo4j db is indexed on ```node_id```, the postgres is indexed on ```nodes.node_id``` and ```edges.source_node_id```

The results of the tests (endorsement 1-5, source_id = 0):

#### neo4j

- neo_e1 (endorsement #1): 54.490ms
- neo_e2 (endorsement #2): 172.366ms
- neo_e3 (endorsement #3): 1394.951ms
- neo_e4 (endorsement #4): 23134.819ms
- neo_e5 (endorsement #5): 436043.645ms

![neo4j results](https://github.com/kristian94/neo4j-vs-postgres/blob/master/res/neo4j%20res.PNG)

#### postgres

- pg_e1 (endorsement #1): 17.511ms
- pg_e2 (endorsement #2): 55.066ms
- pg_e3 (endorsement #3): 642.872ms
- pg_e4 (endorsement #4): 5293.406ms
- pg_e5 (endorsement #5): 16883.756ms

![postgres results](https://github.com/kristian94/neo4j-vs-postgres/blob/master/res/postgres%20res.PNG)

### conclusion:

It was hard to really conclude anything... I found that neo4j performance depended on the package i used for querying programmatically (the one i started out with performed a bit better, but could not complete query #5 due to running out of memory). Overall the results indicate stronger performance from Postgres, but this could be due to the way i indexed. 
