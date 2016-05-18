var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
// 引入
app.use(bodyParser.json());  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: false
}));

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'new'
});
conn.connect();
// 连接数据库
app.set('view engine', 'ejs');
//设置模板引擎
app.set('views', __dirname + '/views');
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.render('home.ejs');
});
app.get('/select', function (req, res) {
    var selectSQL = "select * from " + req.query.newsType + " order by newsid desc";
    //倒序查找
    conn.query(selectSQL, function (err, rows) {
        if (err) console.log(err);
        res.json(rows);
        // 以JSON输入查询结果
    });
    //查询
});
app.get('/select/once', function (req, res) {
    var selectSQL = "select * from " + req.query.newsType + " WHERE newsid=" + req.query.num;
    console.log(selectSQL);
    conn.query(selectSQL, function (err, rows) {
        if (err) console.log(err);
        res.json(rows);
        // 以JSON输入查询结果
    });
    //查询
});
//新闻页面
app.get('/admin', function (req, res) {
    res.render('admin.ejs');
    //后台页面
});
app.post('/admin/insert', function (req, res) {
    var insertSQL = 'insert into ' + req.body.newsType + ' ( title, img, content) VALUES ( "' + req.body.title + '","' + req.body.img + '","' + req.body.content + '")';
    console.log(insertSQL);
    conn.query(insertSQL, function (err1, res1) {
        if (err1) console.log(err1);
        //alert("数据插入成功");
        console.log("INSERT Return ==> ");
        console.log(res1);
    });
    //插入数据
});
app.post('/admin/delete', function (req, res) {
    var deleteSQL = 'delete from ' + req.body.newsType + ' where newsid=' + req.body.num;
    console.log(deleteSQL);
    conn.query(deleteSQL, function (err, res1) {
        if (err) console.log(err);
        console.log(res1);
    });
    //删除数据
});
app.post('/admin/update', function (req, res) {
    var updateSQL = 'update ' + req.body.newsType + ' set `title`="' + req.body.title + '",`img`="' + req.body.img + '",`content`="' + req.body.content + '"  where newsid=' + req.body.num;
    console.log(updateSQL);
    conn.query(updateSQL, function (err3, res3) {
        if (err3) console.log(err3);
        //("数据修改成功");
        console.log("UPDATE Return ==> ");
        console.log(res3);
    });
});
app.listen(3000);
//conn.end();