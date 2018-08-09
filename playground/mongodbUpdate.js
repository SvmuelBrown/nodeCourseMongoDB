const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to the database server');
  }
  console.log('Connected to MongoDB server!');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //    _id: new ObjectID("5b6cbca95772057450d895df")
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  db.collection('User').findOneAndUpdate({
    _id: new ObjectID("5b6cb766f974383181547c3c")
  }, {
    $set: {
      name: 'Sam'
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  });

  // client.close();
});