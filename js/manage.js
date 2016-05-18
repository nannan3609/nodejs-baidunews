$(".right").load("form.html");
var BDN = {
    newsType: "recomment"
};

$(".left tr").each(function (index) {
    var trNode = $(this);
    trNode.click(
        function () {
            if (index == 1) {
                BDN.newsType = "recomment";
            }
            else if (index == 2) {
                BDN.newsType = "hundred";
            }
            else if (index == 3) {
                BDN.newsType = "local";
            }
            else if (index == 4) {
                BDN.newsType = "entertainment";
            }
            else if (index == 5) {
                BDN.newsType = "society";
            }
            ;
            if (index == 0) {
                $(".right").load("form.html");
            }
            else {
                $(".left  .in").removeClass("in");
                $(".left .on").removeClass("on");
                trNode.addClass("in");
                $(".left .in  span").addClass("on");
                $.ajax({
                    url: '/select',
                    data: {
                        newsType: BDN.newsType
                    },
                    dataType: 'json',
                    type: 'get',
                    success: function (data) {
                        // 把json形式以html输出
                        var newscon = $("<div calss='" + BDN.newsType + "'></div>");
                        for (var i = 0; i < data.length; i++) {
                            $(".right").empty();
                            //每次切换到新的tab时，article要清空
                            var newsbox = $("<div class='index-item'></div>");
                            if (data[i]['img']) {
                                var imgbox = $("<div class='index-list-pic'></div>");
                                $("<img>").attr("src", data[i]['img']).appendTo(imgbox);
                                imgbox.appendTo(newsbox);
                            }
                            ;
                            //如果有图片
                            $("<div class='index-list-main-title'></div>").text(data[i]['title']).appendTo(newsbox);
                            if (data[i]['content']) {
                                $("<div class='index-list-main-abs'></div>").text(data[i]['content']).appendTo(newsbox);
                            }
                            ;
                            //如果有新闻概要
                            $("<button class='btn btn-default update' data-id='" + data[i]['newsid'] + "' data-type='" + BDN.newsType + "'>修改数据</button>").appendTo(newsbox);
                            $("<button class='btn btn-danger delete'  data-id='" + data[i]['newsid'] + "' data-type='" + BDN.newsType + "'>删除数据</button>").appendTo(newsbox);
                            newsbox.appendTo(newscon);
                            newscon.appendTo($(".right"));
                            $(".update").click(function () {
                                var type = $(this).attr("data-type");
                                var num = $(this).attr("data-id");
                                $.ajax({
                                    url: '/select/once',
                                    data: {
                                        newsType: type,
                                        num: num
                                    },
                                    dataType: 'json',
                                    type: 'get',
                                    success: function (data) {
                                        var modifydiv = $("<div class='modify'></div>");
                                        var modifyform = $('<form  onsubmit="return validateForm()"></form>');
                                        var note1 = $('<div class="form-group"></div>');
                                        var label1 = $('<label for="table">新闻块类：' + type + '</label>');
                                        var kind = $(' <input type="hidden" class="form-control" id="table" name="table" placeholder="新闻块类" value=' + BDN.newsType + ' >');
                                        label1.appendTo(note1);
                                        kind.appendTo(note1);
                                        note1.appendTo(modifyform);
                                        //新闻块类
                                        var note2 = $('<div class="form-group"></div>');
                                        var label2 = $('<label for="num">新闻序号：' + data[0]['newsid'] + '</label>');
                                        var num = $(' <input type="hidden" class="form-control" id="num" name="num" placeholder="新闻序号" value=' + data[0]['newsid'] + ' >');
                                        label2.appendTo(note2);
                                        num.appendTo(note2);
                                        note2.appendTo(modifyform);
                                        //新闻序号
                                        var note3 = $('<div class="form-group"></div>');
                                        var label3 = $('<label for="title">新闻标题：</label>');
                                        var newstitle = $('<input type="text" class="form-control" id="title" name="title" placeholder="新闻标题" value=' + data[0]['title'] + '>');
                                        label3.appendTo(note3);
                                        newstitle.appendTo(note3);
                                        note3.appendTo(modifyform);
                                        //新闻标题
                                        var note4 = $('<div class="form-group"></div>');
                                        var label4 = $('<label for="img">新闻图片地址：</label>');
                                        var newsimg = $('<input type="text" class="form-control" id="img" name="img" placeholder="新闻图片" value=' + data[0]['img'] + '>');
                                        label4.appendTo(note4);
                                        newsimg.appendTo(note4);
                                        note4.appendTo(modifyform);
                                        //新闻图片
                                        var note5 = $('<div class="form-group"></div>');
                                        var label5 = $('<label for="content">新闻内容概要：</label>');
                                        var newscontent = $('<input type="text" class="form-control" id="content" name="content" placeholder="新闻内容概要" value=' + data[0]['content'] + '>');
                                        label5.appendTo(note5);
                                        newscontent.appendTo(note5);
                                        note5.appendTo(modifyform);
                                        //新闻内容概要
                                        var newsbut = $('<button type="submit" class="btn btn-default" id="newsbut">提交</button>');
                                        var cancel = $('<button type="button" class="btn btn-danger" id="cancel">取消</button>')
                                        newsbut.appendTo(modifyform);
                                        //提交按钮
                                        cancel.appendTo(modifyform);
                                        //关闭按钮
                                        modifyform.appendTo(modifydiv);
                                        modifydiv.appendTo($(".right"));

                                        $("#newsbut").click(function () {
                                            $.ajax({
                                                url: '/admin/update',
                                                data: {
                                                    newsType: BDN.newsType,
                                                    num: $("#num").val(),
                                                    title: $("#title").val(),
                                                    img: $("#img").val(),
                                                    content: $("#content").val()
                                                },
                                                dataType: 'json',
                                                type: 'post',
                                                success: function (data) {
                                                    console.log("success");
                                                },
                                                error: function (err) {
                                                    console.log(err);
                                                }
                                            });
                                        });
                                        $("#cancel").click(function () {
                                            $(".modify").remove();
                                        });
                                    },
                                    error: function (error) {
                                        console.log("wrong");
                                        console.log(error);
                                    }
                                });
                            });
                            $(".delete").click(
                                function () {
                                    var dtype = $(this).attr("data-type");
                                    var dnum = $(this).attr("data-id");
                                    $.ajax({
                                        url: '/admin/delete',
                                        data: {
                                            newsType: dtype,
                                            num: dnum
                                        },
                                        dataType: 'json',
                                        type: 'post',
                                        success: function (data) {
                                            console.log("删除成功");
                                        },
                                        error: function (error) {
                                            console.log(error);
                                        }
                                    });
                                });
                        }
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });

            }
            //载入页面
        });
});

//验证规则
function validateForm() {
    var x = $("#title").val();
    var url = $("#img").val();
    if (x == null || x == "") {
        alert("新闻标题不能为空");
        return false;
    }
    // 新闻标题不能为空
    else {
        if (url == null || url == "") {
            return true;
        }
        else {
            if (!isURL(url)) {
                alert("请输入正确的图片地址");
                return false;
            }
        }
    }
    // 图片应为http地址
}

function isURL(str) {
    var reg = /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
    var isurl = reg.test(str);//test(str)方法是js正确表达式内置的对象可以直接调用
    return isurl;
}




