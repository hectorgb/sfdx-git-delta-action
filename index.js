const core = require('@actions/core')
const exec = require('child_process').exec
const fs = require('fs')

try {
  installSFDX()
} catch (error) {
  core.setFailed(error.message)
}

function installSFDX(){
  var install = 'npm install sfdx-git-delta@latest -g'
  exec(install, function(error, stdout, stderr){
    if(error) throw(stderr)
    core.debug(stdout)
  })
}