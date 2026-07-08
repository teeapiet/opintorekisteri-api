const express = require("express");

console.log("APP KÄYNNISTYY");

const db = require("./config/db");

const opintojaksoRoutes =
require("./routes/opintojaksoRoutes");

console.log("opintojaksoRoutes:", opintojaksoRoutes);

console.log(opintojaksoRoutes);

const opiskelijaRoutes =
require("./routes/opiskelijaRoutes");

const arviointiRoutes =
require("./routes/arviointiRoutes");

const loginRoutes =
require("./routes/loginRoutes");

const app = express();

app.use(express.json());

app.use(
    "/api/opintojaksot",
    opintojaksoRoutes
);

app.use(
    "/api/opiskelijat",
    opiskelijaRoutes
);

app.use(
    "/api/arvioinnit",
    arviointiRoutes
);

app.use(
    "/api/login",
    loginRoutes
);

app.get("/", (req, res) => {
    res.send("Opintorekisteri API toimii!");
});

app.listen(3000, () => {
    console.log(
        "Server käynnissä portissa 3000"
    );
});