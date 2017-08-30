
const path = require("path");
const fs = require('fs-extra');
const chalk = require('chalk');
const { spawn } = require('child_process');

const pullRebase = ['pull', '--rebase', 'origin', 'master'];
const addPackage = ['add', 'package.json'];
const addPackageLock = ['add', 'package-lock.json'];
const ammendCommit = ['commit', '--amend', '--no-edit'];

var _runGITCommand = function(args, commandTye){
    var promise = new Promise((resolve, reject) =>{
        console.log(chalk.green(`*************** trying to run ${commandTye}  *******************`))    

        let command = spawn('git', args);
        let stdOutData = "", stderrData="";

        command.stdout.on('data', (data) => stdOutData += data )
        command.stderr.on('data', (data) => stderrData += data );
        command.on('close', (code) => code!=0 ? reject(stderrData) : resolve(stdOutData));
    })

    return promise;
}
var updatePackage = () => {
    const packageJSONFile = require('./package.json');
    const packageLockFile = require('./package-lock.json');

    let currentVersion = packageJSONFile.version;
    let updatedVersion = packageJSONFile.version.replace(/\d+$/, (x)=>+x+1);
    packageLockFile.version = packageJSONFile.version = updatedVersion;

    
    fs.writeFileSync(path.join(__dirname, 'package.json'), JSON.stringify(packageJSONFile,  null, 2))
    fs.writeFileSync(path.join(__dirname, 'package-lock.json'), JSON.stringify(packageLockFile,  null, 2))
    console.log(chalk.cyan(`\n Version in package.json is updated to ${chalk.green(updatedVersion)} from ${chalk.red(currentVersion)} \n`))
}


_runGITCommand(pullRebase, "pull")
    .then((data)=> console.log(chalk.cyan(data.toString())))
    .then(updatePackage)
    .then(()=>_runGITCommand(addPackage, "add package file"))
    .then((data)=> console.log(chalk.cyan(data.toString())))
    .then(()=>_runGITCommand(addPackageLock, "add lock file"))
    .then((data)=> console.log(chalk.cyan(data.toString())))
    .then(()=>_runGITCommand(ammendCommit, "ammend exisiting commit"))
    .then((data)=> console.log(chalk.cyan(data.toString())))
    .catch((err)=> console.log(chalk.red(err)))
