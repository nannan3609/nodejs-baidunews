
var BDN={
    newsType:"recomment"
};
$.ajax({
    url:'/select',
    data:{
        newsType:BDN.newsType
    },
    dataType:'json',
    type:'get',
    success:function(data){
        // 把json形式以html输出
        var newscon=$("<div calss='"+BDN.newsType+"'></div>");
        for(var i= 0;i< data.length;i++) {
            $("article").empty();
            //每次切换到新的tab时，article要清空
            var newsbox = $("<div class='index-item'></div>");
            if (data[i]['img']) {
                var imgbox = $("<div class='index-list-pic'></div>");
                $("<img>").attr("src", data[i]['img']).appendTo(imgbox);
                imgbox.appendTo(newsbox);
            };
            //如果有图片
            $("<div class='index-list-main-title'></div>").text(data[i]['title']).appendTo(newsbox);
            if (data[i]['content']) {
                $("<div class='index-list-main-abs'></div>").text(data[i]['content']).appendTo(newsbox);
            };
            //如果有新闻概要
            newsbox.appendTo(newscon);
            newscon.appendTo("article");
        }
    },
    error:function(error){
        console.log(error);
    }
});
//刚打开页面的时候要显示推荐的新闻，所以这里先给他传值
$(".content .nav").each(function(index){
        var navNode=$(this);
        navNode.click(
               function(){
                   if(index==0){
                       BDN.newsType="recomment";
                   }
                   else if(index==1){
                       BDN.newsType="hundred";
                   }
                   else if(index==2){
                       BDN.newsType="local";
                   }
                   else if(index==3){
                       BDN.newsType="entertainment";
                   }
                   else if(index==4) {
                       BDN.newsType="society";
                   };
               	$(".content  .in").removeClass("in");
                        navNode.addClass("in");
                        $.ajax({
                             	url:'/select',
                             	data:{
                             		newsType:BDN.newsType
                             	},
                                dataType:'json',
                             	type:'get',
                             	success:function(data){
                                    // 把json形式以html输出
                                    var newscon=$("<div calss='"+BDN.newsType+"'></div>");
                                    for(var i= 0;i< data.length;i++) {
                                        $("article").empty();
                                        //每次切换到新的tab时，article要清空
                                        var newsbox = $("<div class='index-item'></div>");
                                        if (data[i]['img']) {
                                            var imgbox = $("<div class='index-list-pic'></div>");
                                            $("<img>").attr("src", data[i]['img']).appendTo(imgbox);
                                            imgbox.appendTo(newsbox);
                                        };
                                        //如果有图片
                                        $("<div class='index-list-main-title'></div>").text(data[i]['title']).appendTo(newsbox);
                                        if (data[i]['content']) {
                                            $("<div class='index-list-main-abs'></div>").text(data[i]['content']).appendTo(newsbox);
                                        };
                                        //如果有新闻概要
                                        newsbox.appendTo(newscon);
                                        newscon.appendTo("article");
                                    }
                                },
                                error:function(error){
                                    console.log(error);
                                }
                             });
               }
    	);}
);