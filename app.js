const express = require("express");
const bodyParser = require("body-Parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");

const app = express();

// Necessary unless we want to paste this bodyParser line on every route
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["thisisahorriblekey"]
  })
);

app.use(authRouter);

app.listen(3333, () => {
  console.log(">>> Listening on port 3333... <<<");
});
