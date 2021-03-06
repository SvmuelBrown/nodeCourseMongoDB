const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to the database server');
  }
  console.log('Connected to MongoDB server!');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('User').insertOne({
    name: 'Jenny',
    age: 21,
    location: 'Albuquerque'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert User', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });


  client.close();
});