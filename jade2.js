const jade = require('jade');
const fs = require('fs');

let str = jade.renderFile('./www/template2.jade', {
  pretty: true,
  name: 'honest',
  styleJson: {
    width: '400px',
    height: '200px',
    display: 'flex',
    'background-color': 'tan',
    'justify-content': 'center',
    'align-items': 'center',
    cursor: 'pointer',
    color: '#fff',
  },
  classArr: ['ui', 'dividing', 'header'],
});
fs.writeFile('./www/template2.html', str, err => {
  if (err) {
    console.log('保存失败');
  } else {
    console.log('保存成功');
  }
})
