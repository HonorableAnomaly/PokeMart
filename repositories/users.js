const fs = require("fs");
const crypto = require("crypto");
const util = require("util");
const Repository = require("./repository");

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repository {
  async create(stats) {
    stats.id = this.randomId();

    const salt = crypto.randomBytes(8).toString("hex");
    const buffer = await scrypt(stats.password, salt, 64);

    const records = await this.getAll();
    const record = {
      ...stats,
      password: `${buffer.toString("hex")}.${salt}`
    };
    records.push(record);

    await this.writeAll(records);

    return record;
  }
  async comparePasswords(saved, supplied) {
    const [hashed, salt] = saved.split(".");
    const hashedSuppliedBuffer = await scrypt(supplied, salt, 64);

    return hashed === hashedSuppliedBuffer.toString("hex");
  }
}

// Empty strings in test function should be an id string from users.json
// const test = async () => {
//   const repo = new UsersRepository("users.json");
// await repo.create({ email: "test@test.com", password: "password" });
// const user = await repo.getOne("");
// await repo.delete("")
// await repo.update("", {password: "mypassword"})
// const user = await getOneBy({email: "test@test.com", password: "mypassword"})
// console.log(user);
// };

// test();

module.exports = new UsersRepository("users.json");
