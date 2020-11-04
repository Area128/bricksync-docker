const { exec } = require("child_process");
var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
  if (req.body.val === 'on' || req.body.val === 'off') {
    exec("screen -S bricksync -p 0 -X stuff 'blmaster "+req.body.val+"^M'", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
    });
  }
})

module.exports = router;
