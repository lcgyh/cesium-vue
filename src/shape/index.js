export class ShapeList {
    constructor() {
        // eslint-disable-next-line constructor-super
        this.shapeList = this.initShapeList()

    }


    // 初始化地图
    initShapeList() {

    }

    // 新增shape
    createShape(type) {
        console.log('type-', type)
        switch (type) {
            case 'STATIC_LINE':
                x = "今天是星期日";
                break;
            case 'STATIC_POINT':
                x = "今天是星期一";
                break;
            case 'STATIC_POLYGON':
                x = "今天是星期二";
                break;
            case 'STATIC_circular':
                x = 'STATIC_circular';
                break;
            case 'STATIC_billboard':
                x = "今天是星期四";
                break;
            case 'STATIC_rectangle':
                x = "今天是星期五";
                break;
            case 'ACTIVE_rectangle':
                x = "今天是星期六";
                break;
            case 'ACTIVE_LINE':
                x = "今天是星期六";
                break;
            case 'ACTIVE_circular':
                x = "今天是星期六";
                break;
            case 'ACTIVE_polygon':
                x = "今天是星期六";
                break;

            default:
                x = "期待周末";

        }


    }
    // 删除shape
    removeShape() {

    }
    // 更新shape
    updateShape() {

    }

    // 查询shape
    getShape() {

    }
}