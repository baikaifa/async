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
  const [feweekly, toolingtips] = await Promise.all([
    getZhihuColumn("fewwekly"),
    getZhihuColumn("toolingtips")
  ]);
  console.log(`NAME:${feweekly.name}`);
  console.log(`INTEO:${feweekly.intro}`);
  console.log(`NAME:${toolingtips.name}`);
  console.log(`INTRO:${toolingtips.intro}`);
  console.timeEnd("showColumnInfo");
};
showColumnInfo();
