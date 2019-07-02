//这里面封装我们的常用代码的jS代码
var kits = {};

kits.randonInt = function(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};
