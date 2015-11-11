# shell-command

Run shell commands synchronously

`shellCommand.run(command, [arguments], [options])`

```js
var shellCommand = require('shell-command');

// returns promise with stdout and stderr on exit code of 0
shellCommand.run('ls', ['-la','.']);

// ['stdout', 'stderr']

// failed promise
shellCommand.run('badcommand');

```
