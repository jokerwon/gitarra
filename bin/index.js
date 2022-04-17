#! /usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');
const packageInfo = require('../package.json');

const VERSION = packageInfo.version;

// 监听 --help 指令
program.on('--help', () => {
  console.log(`
        ${figlet.textSync('gitarra', {
          font: 'Ghost',
          width: 80,
          whitespaceBreak: true,
        })}
    `);
  // 新增说明信息
  console.log(
    `\r\nRun ${chalk.cyan(
      'gt <command> --help'
    )} for detailed usage of given command\r\n`
  );
});

program.version(`v${VERSION}`).usage('<command> [option]');

// 解析用户执行命令传入参数
program.parse(process.argv);
