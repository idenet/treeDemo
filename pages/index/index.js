// index.js
// 获取应用实例
const app = getApp()
import testTree1 from '../../samples/test-tree-n1'

import calcTree from 'relatives-tree-cjs'

Page({
  data: {},

  onLoad () {
    const tree = calcTree(testTree1, { rootId: 'aeqW' })
    console.log(tree)
  }
})
