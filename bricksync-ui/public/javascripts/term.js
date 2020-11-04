
const term = new Terminal();
const fitAddon = new FitAddon.FitAddon();
// const axios = new axios.default();

term.loadAddon(fitAddon);
term.open(document.getElementById('terminal'));
fitAddon.fit();

var socket = io();
socket.on('tailline', function(data){
  // console.log(data);
  term.write(data + '\r\n')
});

function blmaster(val) {
  console.log("blmaster " + val);
  axios.post('/blmaster', {
      val: val
    })
}
