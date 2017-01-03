/*
* @Author: Marte
* @Date:   2016-12-14 20:02:48
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-15 22:20:49
*/
var shoplist={
    classID:0,
    myScroll:null,
    page:0,
    canRaloda:false,
    $classList:$(".classList"),
    $prolist:$(".pro-list"),
    $downtext:$(".down-text"),
    //初始化
    init:function(){
        //创建一个iscroll
        this.myScroll = new IScroll(".wrap",{
            scrollbars:true,
            fadeScrollbars:true,
            shrinkScrollbars:"scale",
            bounce:true,
            probeType:2,
            click:true
        });
        this.getClass();
        this.addData();
        this.bindEvent();
    },
    //获取分类
    getClass:function(){
        var _this=this;
        $.get("http://datainfo.duapp.com/shopdata/getclass.php",function(data){
            console.log(data[0]);
            var str="";
            for(var i=0;i<data.length;i++){
                str+='<li class="classItem iconfont" data-id='+data[i].classID+'>'+data[i].icon+'<i></i></li>'
            }
             _this.$classList.html(str);
             _this.$classList.children("li").eq(0).addClass("check");
        },"json")
    },
    //添加数据
    addData:function(canRaloda){
        var _this=this;
        $("#loading").show();
        var url="http://datainfo.duapp.com/shopdata/getGoods.php";
        $.ajax({
            "url":url,
            "data":{
                pageCode:this.page++,
                linenumber:8,
                classID:this.classID
            },
            dataType:"jsonp",
            success:function(data){
                console.log(data[0])
                var str="";
                for(var i=0;i<data.length;i++){
                    str+='<li class="pro-item"><a href="datail.html?goodsId='+data[i].goodsID+'" class="pic"><img src='+data[i].goodsListImg+'></a><p class="pro-name">'+data[i].goodsName+'</p><p class="price"><em>￥'+data[i].price+'</em> <del>￥888</del></p></li>'
                }
                if(canRaloda){
                    _this.$prolist.html(str);
                    
                }else{
                    _this.$prolist.append(str);
                }
                //当添加完数据以后，内容的高度就改变了，需要更新滚动条
                _this.myScroll.refresh()//更新滚动条
                console.log("加载完成");
                $("#loading").fadeOut();
            }
        })
    },
    //给页面元素绑定事件
    bindEvent:function () {
        var _this=this;
        //下拉刷新
        this.myScroll.on("scroll",function(){
            console.log(this.y);
            if(this.y>50){
                console.log("刷新");
                _this.$downtext.html("松开刷新！")
                _this.page=0;
                _this.canRaloda=true;
            }
        })
        //拉到底部刷新
        this.myScroll.on("scrollEnd",function () {
            //当滚动结束的时候判断是否到，底部
            if(this.y-this.maxScrollY<50){
                console.log("加载更多");
               _this.addData()
            }
            if( _this.canRaloda){
                 _this.addData(true);
                 _this.canRaloda=false;
                 _this.$downtext.html("下拉刷新");
            }
        });
        //类别点击事件
        this.$classList.on("click",".classItem",function(e){
            $(".classItem.check").removeClass("check");
            $(this).addClass("check");
            _this.page=0;
            _this.classID=$(this).data("id");
            _this.canRaloda=true;
            _this.addData(true);
        })
    }
}
//页面初始化
shoplist.init();
