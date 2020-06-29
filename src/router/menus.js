/**
 * 公共下拉选择框options
 * 只 支持 path 单个名称 不能出现两个斜杆
 */
let menus=[
    {
        name: '签收管控',
        subMenus: [
            {
                title: '业务员未签收预警',
                path: "/noSignWarnSalesman",
                platform:"kpi"
            },
            {
                title: '实时24点签收率',
                path: "/dispSignRate",
                platform:"kpi"
            },
            {
                title: '业务员一二派数据',
                path: "/salesmanCheckBill",
                platform:"kpi"
            },
            {
                title: '考核组签收率',
                path: "/groupSignRateSalesman",
                platform:"kpi"
            },
            {
                title: '第三方签收查询',
                path: "/thirdSignSearch",
                platform:"kpi"
            },
            {
                title: '业务员签收时间段',
                path: "/salesSign",
                platform:"kpi"
            },
            {
                title: '业务员一二派设置',
                path: "/checkSetting",
                platform:"kpi"
            },
            {
                title: '设置修改记录查询',
                path: "/querySettingRecord",
                platform:"kpi"
            },
            {
                title: '下级网点未签收预警',
                path: "/noSignWarnNet",
                platform:"kpi",
                subSite:1  //是否根据当前网点有下级网点来控制显示
            },
            {
                title: '下级网点24小时签收率',
                path: "/networkDaysSignRate",
                platform:"kpi",
                subSite:1
            },
            {
                title: '下级网点一二派数据',
                path: "/networkCheckBill",
                platform:"kpi",
                subSite:1
            },
            {
                title: '下级网点签收时间段',
                path: "/subNodeSign",
                platform:"kpi",
                subSite:1
            },
            {
                title: '下级网点一二派设置',
                path: "/networkCheckSetting",
                platform:"kpi",
                subSite:1
            },
        ],
    },
    {
        name: '进出港跟单',
        subMenus: [
            {
                title: ' 进港签收查询',
                path: '/documentaryMonitor',
                platform:"query"
            },
            {
                title: ' 出港签收查询',
                path: '/departure',
                platform:"query"
            },
            {
                title: ' 星联实时派签查询',
                path: '/starLeague',
                platform:"query"
            },
            //新页面
            {
                title: ' 星联实时揽收查询',
                path: '/starCollect',
                platform:"query"
            },
            {
                title: ' 快件运单状态查询',
                path: '/waybillStatus',
                platform:"query"
            },
            {
                title: ' 收寄件网点大货费',
                path: '/bulkCost',
                platform:"query"
            }
        ]
    },
    {
        name: '客服工作跟踪',
        subMenus: [
            {
                title: ' 客服工作跟踪',
                path: '/customerService',
                platform:"query"
            }
        ]
    }
]

function addKey(arr, parentIdx) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let keyStr;
        if (!!parentIdx) {
            keyStr = parentIdx + "-" + (i + 1);
        } else {
            keyStr = i + 1;
        }
//          console.log("keyStr===>"+keyStr);
        arr[i].key = keyStr;
        if (!!arr[i].subMenus) {
            addKey(arr[i].subMenus, keyStr)
        }
    }
}

addKey(menus, "");

export default menus
