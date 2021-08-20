
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/about/about","pages/video/video","pages/live/live","pages/record/video","pages/record/read","pages/video/detail","pages/video/play","pages/live/tvshow","pages/video/webview","pages/video/filter","pages/logs/logs","pages/book/book","pages/book/list","pages/book/detail","pages/book/direct","pages/book/read","pages/comic/comic","pages/comic/list","pages/comic/detail","pages/comic/direct","pages/comic/read","pages/jxapi/jxapi","pages/video/source","uni_modules/uni-upgrade-center-app/pages/upgrade-popup","uni_modules/uni-news-with-ad/pages/news","uni_modules/uni-news-with-ad/pages/news-detail","uni_modules/uni-news-with-ad/pages/news-detail-video","pages/donate/donate","pages/relax/relax","pages/video/tools","pages/record/record","pages/video/search","pages/ticket/ticket"],"window":{"pageOrientation":"auto","navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom","background":"#efeff4","bounce":"none"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","fontSize":"12px","list":[{"pagePath":"pages/video/video","iconPath":"static/icons/video.png","selectedIconPath":"static/icons/video_act.png","text":"影视"},{"pagePath":"pages/live/live","iconPath":"static/icons/live.png","selectedIconPath":"static/icons/live_act.png","text":"电视"},{"pagePath":"pages/book/book","iconPath":"static/icons/book.png","selectedIconPath":"static/icons/book_act.png","text":"书籍"},{"pagePath":"pages/comic/comic","iconPath":"static/icons/comic.png","selectedIconPath":"static/icons/comic_act.png","text":"漫画"},{"pagePath":"pages/about/about","iconPath":"static/icons/mine.png","selectedIconPath":"static/icons/mine_act.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"看看","compilerVersion":"3.2.2","entryPagePath":"pages/about/about","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/about/about","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/video/video","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true}},{"path":"/pages/live/live","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"电视"}},{"path":"/pages/record/video","meta":{},"window":{"navigationBarTitleText":"收藏"}},{"path":"/pages/record/read","meta":{},"window":{"navigationBarTitleText":"收藏"}},{"path":"/pages/video/detail","meta":{},"window":{"navigationBarTitleText":"详情","enablePullDownRefresh":true,"navigationStyle":"default","titleNView":{"buttons":[{"type":"favorite"}]}}},{"path":"/pages/video/play","meta":{},"window":{"navigationBarTitleText":"播放","navigationStyle":"default"}},{"path":"/pages/live/tvshow","meta":{},"window":{"navigationBarTitleText":"直播","navigationStyle":"default"}},{"path":"/pages/video/webview","meta":{},"window":{"navigationBarTitleText":"云播","navigationStyle":"default","navigationBarTextStyle":"white","transparentTitle":"auto","pageOrientation":"landscape"}},{"path":"/pages/video/filter","meta":{},"window":{"navigationBarTitleText":"自定义过滤词","navigationStyle":"default"}},{"path":"/pages/logs/logs","meta":{},"window":{"navigationBarTitleText":"用户手册","navigationStyle":"default"}},{"path":"/pages/book/book","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"书籍"}},{"path":"/pages/book/list","meta":{},"window":{}},{"path":"/pages/book/detail","meta":{},"window":{}},{"path":"/pages/book/direct","meta":{},"window":{"navigationBarTitleText":"书籍目录"}},{"path":"/pages/book/read","meta":{},"window":{"navigationBarTitleText":"书籍阅读","popGesture":"none"}},{"path":"/pages/comic/comic","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"漫画","enablePullDownRefresh":false}},{"path":"/pages/comic/list","meta":{},"window":{"navigationBarTitleText":"漫画","enablePullDownRefresh":false}},{"path":"/pages/comic/detail","meta":{},"window":{"navigationBarTitleText":"漫画","enablePullDownRefresh":false}},{"path":"/pages/comic/direct","meta":{},"window":{"navigationBarTitleText":"漫画","enablePullDownRefresh":false}},{"path":"/pages/comic/read","meta":{},"window":{"navigationBarTitleText":"漫画","enablePullDownRefresh":false,"popGesture":"none"}},{"path":"/pages/jxapi/jxapi","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/video/source","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"管理自建视频源","enablePullDownRefresh":false}},{"path":"/uni_modules/uni-upgrade-center-app/pages/upgrade-popup","meta":{},"window":{"disableScroll":true,"backgroundColorTop":"transparent","background":"transparent","titleNView":false,"scrollIndicator":false,"popGesture":"none","animationType":"fade-in","animationDuration":200}},{"path":"/uni_modules/uni-news-with-ad/pages/news","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"新闻中心"}},{"path":"/uni_modules/uni-news-with-ad/pages/news-detail","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"新闻详情"}},{"path":"/uni_modules/uni-news-with-ad/pages/news-detail-video","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"新闻详情"}},{"path":"/pages/donate/donate","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"打赏支持"}},{"path":"/pages/relax/relax","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"放松一下","enablePullDownRefresh":false}},{"path":"/pages/video/tools","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"视频工具","enablePullDownRefresh":false}},{"path":"/pages/record/record","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"记录收藏","enablePullDownRefresh":false}},{"path":"/pages/video/search","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/ticket/ticket","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"看看小卖部","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
