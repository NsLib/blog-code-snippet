'use strict';

module.exports = {
  // 不要更改types, 只允许出现这几种
  types: [
    {value: 'feat',         name: 'feat:        新功能 (feature)'},
    {value: 'fix',          name: 'fix:         修复bug'},
    {value: 'docs',         name: 'docs:        文档 (documentation)'},
    {value: 'style',        name: 'style:       格式 (不影响代码运行的变动)'},
  ],

  // 按照项目模块, 自行配置
  scopes: [
    {name: 'code'},
    {name: 'image'},
    {name: 'core'}
  ],

  // 可以根据匹配的类型不同, 显示不一样的scope, 动手实践下!
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']
};
