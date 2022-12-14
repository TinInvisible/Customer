
const db = require('../../db');

exports.getAll = async () => {
  const result =  await db.connection.execute('select * from productdetail');
  return result[0];
}

exports.filter = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Name like ?", [`%${name}%`]);
  return result[0];
}
exports.filter1 = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Category = ?", [name]);
  return result[0];
}
exports.filter2 = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Branding = ?", [name]);
  return result[0];
}
exports.filter3 = async () => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Price <= 50");
  return result[0];
}
exports.filter4 = async () => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Price > 50 and Price < 100");
  return result[0];
}
exports.filter5 = async () => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where Price > 100");
  return result[0];
}
exports.sort_price_asc = async () => {
  const result =  await db.connection.execute("select * from productdetail order by productdetail.Price ASC;");
  return result[0];
}
exports.sort_price_dsc = async () => {
  const result =  await db.connection.execute("select * from productdetail order by productdetail.price DESC;");
  return result[0];
}
exports.sort_name_asc = async () => {
  const result =  await db.connection.execute("select * from productdetail order  by productdetail.Name ASC;");
  return result[0];
}
exports.sort_name_dsc = async () => {
  const result =  await db.connection.execute("select * from  productdetail order by productdetail.Name DESC;");
  return result[0];
}
exports.get = async (id) => {
  const result =  await db.connection.execute("SELECT * FROM productdetail where ProductID = ?", [id]);
  return result[0][0];
}
