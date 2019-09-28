//串行结构
// const fetch = require("node-fetch");
// async function getZhihuColumn(id) {
//   const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
//   const response = await fetch(url);
//   return await response.json();
// }
// const showColumnInfo = async () => {
//   const feweekly = await getZhihuColumn("feweekly");
//   const toolingtips = await getZhihuColumn("toolingtips");
//   console.log(`NAME:${feweekly.name}`);
//   console.log(`INTEO:${feweekly.intro}`);
//   console.log(`NAME:${toolingtips.name}`);
//   console.log(`INTRO:${toolingtips.intro}`);
// };
// showColumnInfo();

//并行操作
// const fetch = require("node-fetch");

// const sleep = (timeout = 2000) =>
//   new Promise(resolve => {
//     setTimeout(resolve, timeout);
//   });

// async function getZhihuColumn(id) {
//   await sleep(2000);
//   const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
//   const response = await fetch(url);
//   return await response.json();
// }
// const showColumnInfo = async () => {
//   console.time("showColumnInfo");
//   const feweeklyPromise = getZhihuColumn("feweekly");
//   const toolingtipsPromise =  getZhihuColumn("toolingtips");
//   const feweekly = await feweeklyPromise;
//   const toolingtips = await toolingtipsPromise;
//   console.log(`NAME:${feweekly.name}`);
//   console.log(`INTEO:${feweekly.intro}`);

//   console.log(`NAME:${toolingtips.name}`);
//   console.log(`INTRO:${toolingtips.intro}`);
//   console.timeEnd("showColumnInfo");
// };
// showColumnInfo();

//串行操作
const fetch = require("node-fetch");

const sleep = (timeout = 2000) =>
  new Promise(resolve => {
    setTimeout(resolve, timeout);
  });

async function getZhihuColumn(id) {
  await sleep(2000);
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json();
}
const showColumnInfo = async () => {
  console.time("showColumnInfo");
  const feweekly =await getZhihuColumn("feweekly");
  const toolingtips = await getZhihuColumn("toolingtips");
  console.log(`NAME:${feweekly.name}`);
  console.log(`INTEO:${feweekly.intro}`);

  console.log(`NAME:${toolingtips.name}`);
  console.log(`INTRO:${toolingtips.intro}`);
  console.timeEnd("showColumnInfo");
};
showColumnInfo();