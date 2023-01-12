'use strict';

const fs = require('fs/promises');
const fg = require('fast-glob'); //快速获取文件目录下的文件路径
const path = require('path');


const defaultConfig = {
  pattern: 'src/**/*.{js,vue}', // fast-glob的写法
  prefix: false
};


/**
 * @param {Object} params  命令行传递的参数
 */


exports.reName = async (params) => {
  let config = {};
  if (params.config) {
    config = require(path.resolve(params.config));
  }

  const {pattern, prefix} = {...defaultConfig, ...config};
  const filePaths = await fg(pattern);
  
  (filePaths || []).forEach(async oldPath => {

    let dir = '';
    let otherDir = oldPath;
    const tpos = oldPath.lastIndexOf('/');

    if (tpos> -1) {
      dir = oldPath.substring(0, tpos + 1);
      otherDir = oldPath.substring(tpos + 1);
    }

    const pos = otherDir.lastIndexOf('.');
    const extendName = otherDir.substring(pos);
    const fileName = otherDir.substring(0, pos);

    const newFileName = prefix ? params.name ? `${params.name}${fileName}`
      : `${fileName}` : params.name ? `${fileName}${params.name}` : `${fileName}`;
    
    fs.rename(oldPath, dir + newFileName + extendName);
  });
};
