export default {
  menus: [{
      name: '财务看板',
      subMenus: [{
          title: '结算指引',
          path: '/guide',
        },
        {
          title: '核心数据',
          path: '/blank',
        },
        {
          title: '待办任务',
          path: '/blank',
        },
      ],
    },
    {
      name: '算网点账',
      cssName: 'calculateSiteBook',
      subMenus: [
        {
          title: '结算对象配置-工号/客户',
          path: '/objConfig',
        },
        // {
        //   title: '结算对象配置-工号',
        //   path: '/numberManagement',
        // },
        // {
        //   title: '结算对象配置-客户',
        //   path: '/customerManagement',
        // },
        {
          title: '结算规则设置',
          path: '/settlement',
        },
        // {
        //   title: '结算规则设置旧',
        //   path: '/settlement1',
        // },
        {
          title: '发件异常单处理',
          path: '/billPreprocess',
        },
        {
          title: '发件手工单处理',
          path: '/handListProcess',
        },
        // {
        //   title: '线下电子面单账单',
        //   path: '/underLine',
        // },
        // {
        //   title: '码上寄账单',
        //   path: '/immediatelyBills',
        // },
        {
          title: '均重账单计算',
          path: '/checkInterchangeFee',
        },
        {
          title: '收中转费/客户运费',
          path: '/sendReceiveFee',
          important: true,
        },
        // {
        //   title: '原寄件账单编辑查询',
        //   path: '/sendBills',
        // },
        {
          title: '客户费用审核',
          path: '/customerBillCheckNew',
        },
          {
              title: '客户周期账单',
              path: '/customerCircleBills',
          },
        {
          title: '收包仓和固定费',
          path: '/packageBill',
        },
        {
          title: '收二级中转费',
          path: '/twoTransferFeeBillNew',
        },
        {
          title: '包中转费分摊',
          path: '/transferFeeShare',
        },
        {
          title: '收丰巢面单费',
          path: '/fengChaoBills',
        },
        {
          title: '收有偿/续重派费',
          path: '/addedWeightFeeNew',
        },
        {
          title: '收退件转账拦截费',
          path: '/returnTransferInterceptFee',
        },
        {
          title: '付发件代收到付',
          path: '/sendMailFeeOrPayFee',
        },
        {
          title: '付业务员承包区派费',
          path: '/sendPayFee',
          important: true,
        },
        {
          title: '收派件代收到付',
          path: '/collectFee',
        },
        // {
        //   title: '原派件账单编辑查询',
        //   path: '/sendFee',
        // },
        {
          title: '业务员罚款分摊',
          path: '/branchFine',
          important: true,
        },
        {
          title: '签收率考核奖罚',
          path: '/blank',
        },
        // {
        //   title:'派件管控签收率奖罚',
        //   path:'/signRateAward'
        // }
        // {
        //   title: '星联账单',
        //   path: '/starLinkBill',
        // },

        /*{
          title: '二级中转费结算',
          path: '/twoTransferFeeBill',
        },*/
      ],
    },
    {
      name: '管网点账',
      subMenus: [{
          title: '业务员预付款',
          path: '/sendAdvances',
        },
        {
          title: '预付款流水报表',
          path: '/advanceFlowStatement',
        },
        {
          title: '固定费用项维护录入',
          path: '/fixedFeeInput',
        },
        {
          title: '网点小金库（日记账）',
          path: '/wallet',
        },
        {
          title: '结算交易类型配置',
          path: '/tradeType',
        },
        {
          path: '/waybill',
          title: '面单成本',
        },
        {
          title: '应收应付账单',
          path: '/selfAccountsPayable',
        },
        {
          title: '下级包仓费固定费账单',
          path: '/subPackageBill',
        },
        {
          title: '下级网点应收应付账单',
          path: '/subNetRecPayBill',
        },
        {
          title: '上级网点应收应付账单',
          path: '/lastNetRecPayBill',
        },
        {
          path: '/lowerDot',
          title: '下级网点管理',
        },
      ],
    },
    {
      name: '对网点账',
      subMenus: [{
          title: '对应付中转费账单',
          path: '/sendFeeBill',
        },
        {
          title: '对应收派费账单',
          path: '/dispatchFeeBill',
        },
        {
          title: '对包仓和固定费',
          path: '/checkPackageBill',
        },
        {
          path: '/returnTransferInterceptFeeCheck',
          title: '对退件/转账/拦截费'
        },
        {
          path: '/addedWeightFeeCheck',
          title: '对有偿/续重派费'
        },
        {
          path: '/nextSendGoodsFeeOrPayFee',
          title: '对发件代收到付费'
        },
        {
          path: '/twoTransferFeeCheck',
          title: '对二级中转费'
        },
        {
          path: '/nextCollectFee',
          title: '对派件代收到付费'
        },
      ],
    },
    {
      name: '财务分析',
      subMenus: [{
          title: '业务员发件毛利润分析',
          path: '/salesAnalysis',
        },
        {
          title: '客户发件毛利润分析',
          path: '/customerShipment',
        },
        {
          title: '网点发件毛利润',
          path: '/profit',
        },
        {
          title: '网点派件重量段分析',
          path: '/partsWeightAnalysis',
        },
        {
          title: '网点发件区域重量段分析',
          path: '/sendWeightAnalysis',
        },
        {
          title: '有偿派费分析统计',
          path: '/distributionFee',
        },
      ],
    },
  ],
}
