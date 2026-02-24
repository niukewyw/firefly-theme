chrome.runtime.onInstalled.addListener(() => {
  console.log('流萤主题插件已安装');
});

chrome.runtime.onStartup.addListener(() => {
  console.log('流萤主题插件已启动');
});