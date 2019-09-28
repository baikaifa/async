const fetch = require("node-fetch");

const getZhihuColumn = async id => {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json();
};

class APIClient {
  async getZhihuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await fetch(url);
    return await response.json();
  }
}
(async () => {
  const client = new APIClient();
  const column = await client.getZhihuColumn("feweekly");
  console.log(`NAME:${column.name}`);
  console.log(`INTEO:${column.intro}`);
})();
