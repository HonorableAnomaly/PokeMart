const fs = require("fs");
const crypto = require("crypto");

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Creating a repository requires a filename");
    }

    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
    }
  }
  async getAll() {
    return JSON.parse(await fs.promises.readFile(this.filename, { encoding: "utf8" }));
  }
  async create(stats) {
    stats.id = this.randomId();

    const records = await this.getAll();
    records.push(stats);

    await this.writeAll(records);
  }
  async writeAll(records) {
    await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
  }
  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }
  async getOne(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }
  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => record.id !== id);
    await this.writeAll(filteredRecords);
  }
  async update(id, stats) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);

    if (!record) {
      throw new Error(`Record ${id} not found`);
    }

    Object.assign(record, stats);
    await this.writeAll(records);
  }
  async getOneBy(filters) {
    const records = await this.getAll();
    for (let record of records) {
      let found = true;

      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }
      if (found) {
        return record;
      }
    }
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
