const ejs = require('ejs');
const fs = require('fs');

ejs.renderFile('./www/ejsTemp1.ejs', {
  data: {
    name: '张三',
    age: 21,
  }
}, (err, data) => {
  if (err) {
    console.log('编译失败', err);
  } else {
    console.log('成功');
    fs.writeFile('./www/ejsTemp1.html', data, err => null == err || console.log('写入文件失败', err))
  }
})
