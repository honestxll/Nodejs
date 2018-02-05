const jade = require('jade');
const fs = require('fs');
var str = jade.renderFile('./www/template.jade', {pretty: true});
fs.writeFile('./www/template.html', str, err => {
  if (err) {
    console.log('保存失败');
  } else {
     console.log('保存成功');
  }
})
