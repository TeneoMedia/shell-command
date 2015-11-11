import child from 'child_process';
import bluebird from 'bluebird';
bluebird.promisifyAll(child);

export default class shellCommand {
  static run(command) {
    return child.execAsync(command);
  }
}
