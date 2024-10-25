import bcrypt from "bcrypt";

const salt = await bcrypt.genSalt(10);
const hashedPass = await bcrypt.hash("abcd1234", salt);
console.log(hashedPass);
