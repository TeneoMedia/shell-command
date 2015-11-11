// var test = require('tape');
// var shellCommand = require('../src/index.js');
//
// test('running invalid command returns false', function (t) {
//     var run = shellCommand.run('lsa;lksdf;alksdfjas;lkdldfks;');
//     t.equal(run, false);
//     t.end();
// });
//
// test('running valid command returns stdout', function (t) {
//     var run = shellCommand.run('ls');
//     t.equal(typeof run, 'string');
//     t.end();
// });

import test from 'blue-tape';
import shellCommand from '../src/index';

test('running invalid command throws error with output', async (t) => {
  t.plan(1);

  try {
    let run = await shellCommand.run('lsa;lksdf;alksdfjas;lkdldfks;');
    t.comment(run);
  } catch (err) {
    t.ok(err.message.includes('Command failed: /bin/sh -c lsa;lksdf;alksdfjas;lkdldfks;'));
  }

});

test('running valid command returns stdout', async (t) => {
  t.plan(1);

  let run = await shellCommand.run('ls');
  t.ok(run[0].includes('README.md'));

});
