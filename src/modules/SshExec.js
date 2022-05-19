const { Client } = require('ssh2');
const conn = new Client();
 
function ssh(){
 return conn.on('ready', () => {
    console.log('Client :: ready');
    conn.shell((err, stream) => {
      if (err) throw err;
      stream.on('close', () => {
        console.log('Stream :: close');
        conn.end();
      }).on('data', (data) => {
        console.log('OUTPUT: ' + data);
      });
      stream.end('enable\nconfig\n');
    });
  }).connect({
    host: '10.20.20.38',
    port: 22,
    username: '',
    password: ''
  })
 }

  


module.exports = ssh;