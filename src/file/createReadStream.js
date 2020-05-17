const fs = require('fs');


const indexfile = fs.createReadStream( './index.js');


indexfile.pipe(process.stdout)