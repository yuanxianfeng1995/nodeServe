var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3");
var db = new sqlite3.Database("test.db")
console.log('创建test.db成功！')
router.get("/init", function (req, res, next) {
  db.run("create table test(name varchar(15))");
  res.send({
    status: "200",
    mmassage: `成功！`,
  });
});
router.get("/add/test", function (req, res, next) {
  console.log('start', new Date().getMinutes())
  for (let index = 0; index <= 100000; index++) {
    db.run("insert into test values('hello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,worldhello,world')")
    if(index==100000){
      console.log('end', new Date().getMinutes())
      res.send({
        status: "200",
        mmassage: `成功！`,
      });
    }
  }
});
router.get("/delete/test", function (req, res, next) {
  db.run("delete from test)", function (err, data) {
    if (!err) {
      res.send({
        status: "200",
        data: JSON.stringify(data),
        mmassage: `成功！`,
      });
    } else
      res.send({
        status: "500",
        mmassage: "错误！",
      });
  })
});
router.get("/select/test", function (req, res, next) {
  db.all("select * from test", function (err, data) {
    if (!err) {
      res.send({
        status: "200",
        data: JSON.stringify(data),
        mmassage: `成功！`,
      });
    } else
      res.send({
        status: "500",
        mmassage: "插入数据时发生错误:",
      });
  });
});

module.exports = router;
