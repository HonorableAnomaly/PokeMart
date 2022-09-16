const express = require("express");
const bodyParser = require("body-Parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const adminProductsRouter = require("./routes/admin/products");
const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");

const app = express();

app.use(express.static("public"));
// Necessary unless we want to paste this bodyParser line on every route
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["thisisahorriblekey"]
  })
);

app.use(authRouter);
app.use(adminProductsRouter);
app.use(productsRouter);
app.use(cartsRouter);

app.listen(3333, () => {
  console.log(">>> Listening on port 3333... <<<");
});
