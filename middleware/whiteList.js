const ipfilter = require('express-ipfilter').IpFilter;

const ips = process.env.WHITELISTED_IPS.split(',');

const whiteList = ipfilter(ips, { mode: 'allow' });
module.exports = whiteList;
