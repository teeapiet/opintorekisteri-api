const bcrypt = require("bcrypt");

bcrypt.hash("salasana123", 10)
.then(hash => {
    console.log(hash);
});