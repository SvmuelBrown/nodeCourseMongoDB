const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to the database server');
  }
  console.log('Connected to MongoDB server!');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // })

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // })

  db.collection('User').findOneAndDelete({ _id: new ObjectID("5b6cb76e0c4a9931829a25b6")}).then((result) => {
    console.log(result);
  });

  // db.collection('User').deleteMany({name: 'Sam'}).then((result) => {
  //   console.log(result);
  // });

  // client.close();
});