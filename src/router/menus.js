/**
 * 公共下拉选择框options
 * 只 支持 path 单个名称 不能出现两个斜杆
 */
let menus=[
    {
        name: '一级菜单',
        icon:'&#xeb99;',
        subMenus: [
            {
                title: '首页',
                path: "/dashboard"
            },
            {
                title: '二级菜单',
                path: "/home"
            }
        ],
    },
    {
        name: '一级菜单',
        subMenus: [
            {
                title: '首页',
                path: "/dashboard"
            },
            {
                title: '二级菜单',
                path: "/home"
            }
        ],
    },
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
