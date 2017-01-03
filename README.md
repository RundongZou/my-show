由于我这里有点问题 所以  我将common.css放在了app目录下
/src/conponents/common1.js  组件
使用  import {Header,Content,Footer} from "./../components/common1"   来引用三个组件
Header 可选属性   
    1、hasback={true|false}  是否有返回按钮(选填，默认 true)
    2、title="首页"  定义title   (选填，默认 title=首页)
    3、hasRightBtn={”搜索“}  定义右边按钮  (选填，默认空)
Footer 可选属性
    1、hasFooter={true|false} 是否有底部  （选填，默认false）
    2、data=[]  底部内容  5个。   （选填，默认 [{"name":index,"val":"首页"},{"name":classs,"val":"分类"},{"name":carList,"val":"购物车"},{"name":my,"val":"我的"},{"name":more,"val":"更多"}]["首页","分类","购物车","我的","更多"]）
Content 可选属性
    1、hasFooter={true|false} 是否有底部  （选填,默认false）
    2、hasSubHeader={true|false} 是否有辅助菜单  （选填,默认false）
Content 可以写成
<Content>
    {children}
</Content>
修改的时候修改对应的main 里面的js和css里面的css