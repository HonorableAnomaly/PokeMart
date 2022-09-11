module.exports = {
  getError(errors, prop) {
    // A cheat! Usually you would use if statements
    try {
      return errors.mapped()[prop].msg;
    } catch (err) {
      return "";
    }
  }
};
