const Mock = require('mockjs');
const Random = Mock.Random;
Random.extend({
    applicationDepartment: ['公安', '消防', '政务'],
    applicationVersion: ['1.0', '1.1', '2.0'],
    applicationName: ['城中村大排查', '门牌核查', '防疫普及'],
    itemType: ['1', '2', '3'],
    mainDepartment: ['公安', '消防', '政务'],
});


let gridItemsData = Mock.mock({
    'data|11-15': [
        {
            id: '@id',
            applicationDepartment: '@applicationDepartment',
            applicationVersion: '@applicationVersion',
            applicationName: '@applicationName',
            itemType: '@itemType',
            mainDepartment: '@mainDepartment',
            createTime: Random.datetime('yyyy-MM-dd'),
        },
    ],
});

let database = gridItemsData.data;

export default {
    'POST /api/gridItems'(req, res) {
        const { query } = req;
        let { pageSize, page, ...other } = query;
        pageSize = pageSize || 10;
        page = page || 1;

        let newData = database;
        for (let key in other) {
            if ({}.hasOwnProperty.call(other, key)) {
                newData = newData.filter((item) => {
                    if ({}.hasOwnProperty.call(item, key)) {
                        // if (key === 'address') {
                        //     return other[key].every(iitem => item[key].indexOf(iitem) > -1)
                        // } else if (key === 'createTime') {
                        //     const start = new Date(other[key][0]).getTime()
                        //     const end = new Date(other[key][1]).getTime()
                        //     const now = new Date(item[key]).getTime()
            
                        //     if (start && end) {
                        //     return now >= start && now <= end
                        //     }
                        //     return true
                        // }
                        return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1;
                    }
                    return true;
                });
            }
        }
        res.status(200).json({
            data: newData,
            // data: newData.slice((page - 1)*pageSize, page*pageSize),
            // total: newData.length,
        });
    }
}