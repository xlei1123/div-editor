export default{

  curTime:function(){
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth()+1>=10?time.getMonth()+1:'0'+(time.getMonth()+1);
    var date = time.getDate()>=10?time.getDate():'0'+time.getDate();
    var hours = time.getHours()>=10?time.getHours():'0'+time.getHours();
    var min = time.getMinutes()>=10?time.getMinutes():'0'+time.getMinutes();
    var second = time.getSeconds()>=10?time.getSeconds():'0'+time.getSeconds();
    var day = time.getDay()==0?'日':time.getDay();
    return `${year}-${month}-${date} ${hours}:${min}:${second} 星期${day} `
  },
  getQuery:function(){
    var query = location.search.substr(location.search.indexOf('?')+1);
    var queryArr = query.split('&');
    var queryObj = {};
    for(var i = 0; i<queryArr.length; i++){
      var arr = queryArr[i].split('=')
      queryObj[arr[0]] = arr[1]
    }
    return queryObj;
  },
  browserVersion:function(){
      var u = navigator.userAgent;
      var ret = {};
      ret.webKit = u.indexOf('AppleWebKit') > -1;
      ret.uc = u.indexOf('UCBrowser') > -1;
      ret.android = u.indexOf('Android') > -1 || (u.indexOf('UCBrowser')> -1 && u.indexOf('Linux;')> -1);
      ret.iosMobile = !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
      ret.mobile = ret.iosMobile || ret.android || !!navigator.userAgent.match(/IEMobile/i)
      || !!navigator.userAgent.match(/Opera Mini/i)
      || !!navigator.userAgent.match(/BlackBerry/i);
      return ret;
  }
}