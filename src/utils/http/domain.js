/**
 * 接口域名的管理
 * @param {String} baseServer [api服务器]
 * @param {String} otherServer [其他服务器]
 */
const domainLsit = [
  // 测试服
  {
    baseServer: "/api", //开发服务 0
    otherServer: "http://x.x.x.x/section", //开发服务器 1
  },
  // 正式服
  {
    baseServer: "/api", //开发服务 0
    otherServer: "http://x.x.x.x/section", //开发服务器 1
  },
];

// vue
const ServerNumber = import.meta.env.VITE_APP_SERVER_ID
  ? import.meta.env.VITE_APP_SERVER_ID
  : 0;

// 地址对象
export const baseUrl = domainLsit[ServerNumber];
console.log('🌳-----baseUrl-----', baseUrl);

// api接口
export const apiServer = baseUrl;

export default baseUrl;
