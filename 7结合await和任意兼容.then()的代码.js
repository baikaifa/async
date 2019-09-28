//包装number为Promise对象
// async function main() {
//   const number = await Promise.resolve(890);
//   console.log(number);
// }
// main();

const bluebird = require("bluebird");

async function main() {
  console.log("waitting...");
  await bluebird.delay(2000);
  console.log("done");
  const number = await Promise.resolve(890);
}
main();
//yarn add bluebird
