const fs = require("fs");

let nameOfDir = process.argv[2];

if (nameOfDir) {
  if (fs.existsSync(nameOfDir)) {
    console.log("This directory already exists");
  } else {
    fs.mkdir(nameOfDir, function(err) {
      if (err) console.log(err);
      else console.log("Directory created!!");
    });
  };
} else {
  console.log("Please provide a directory name...");
};
