const express = require("express");
const bodyParser = require("body-Parser");
const usersRepo = require("./repositories/users");

const app = express();

// Necessary unless we want to paste this bodyParser line on every route
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <div>
    <form method="POST">
        <input name="email" placeholder="email"/>
        <input name="password" placeholder="password"/>
        <input name="password confirmation" placeholder="password confirmation"/>
        <button>Sign Up!</button>
    </form>
  </div>
  `);
});

// Middleware to parse form data (add 'bodyParser' before 'req,res')
// const bodyParser = (req, res, next) => {
//   if (req.method === "POST") {
//     req.on("data", (data) => {
//       const parsed = data.toString("utf8").split("&");
//       const formData = {};
//       for (let pair of parsed) {
//         const [key, value] = pair.split("=");
//         formData[key] = value;
//       }
//       req.body = formData;
//       next();
//     });
//   } else {
//     next();
//   }
// };

app.post("/", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) {
    return res.send("Email already in use");
  }
  if (password !== passwordConfirmation) {
    return res.send("Passwords must match");
  }
  console.log(req.body);
  res.send("Account created!");
});

app.listen(3333, () => {
  console.log(">>> Listening on port 3333...");
});
