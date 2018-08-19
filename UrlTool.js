function UrlTool() {
    var searchMessage=window.location.href;
    var getMessage=searchMessage.split('?').pop().split('#').shift();
    //searchMessage.split('?').pop() 表示获取到?后面内容
    //split('#').shift()  表示获取到#号前面的内容
    var arr=getMessage.split('&');
    var obj={};
    arr.forEach(function(ele,index) {
        obj[ele.split('=')[0]]=ele.split('=')[1];
    });
    return obj;
}