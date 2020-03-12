//这里面封装我们的常用代码的jS代码
var kits = {};


// 多少到多少之间的随机数字
kits.randonInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};



// 十位数字的时间戳
kits.timestamp = function () {
  return Date.parse(new Date()) / 1000;
}

// 去重
kits.quchong = function (arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr
}