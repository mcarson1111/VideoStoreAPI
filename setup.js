var spawn = require('child_process').spawnSync;
var Massive = require('massive');

['development', 'test'].forEach(function(env) {
  var dbName = `radio_star_${env}`;

  // Create the DB if it doesn't already exist
  var createDB = spawn('createdb', [dbName]);
  if(createDB.error) {
    console.log("Error creating database " + dbName + ":");
    console.log(createDB);
    return;
  } else {
    console.log("Successfully created database " + dbName + ".");
  }

});
