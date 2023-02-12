import { getIdGenerator } from '../utils/id-generator'
export class ShapeBase {
    constructor(arg) {
        this.viewer = arg.viewer;
        this.Cesium = arg.Cesium;
        this.callback = arg.callback;
        this.shapeName = arg.shapeName; // 设备名称
        this.shapeIcon = arg.shapeIcon; // 设备图标 
        this.shapeShow = arg.shapeShow; // 设备是否展示 
        this.shapeAttribute = arg.shapeAttribute // 设备属性
        this.shapeState = arg.shapeState || 0 // 1 高亮 0 不高亮
        this.isDeformation = arg.isDeformation || false // 设备是否可以变形
        this.shapeId = getIdGenerator() // 唯一值
        this.shapeWidth = arg.shapeWidth || 5
        this.shapeHeight = arg.shapeHeight || 5
        this.shapeColor = arg.shapeColor || '#000'
        this.shapeScale = arg.shapeScale || 1 // 缩放
        this.shapeTransform = arg.shapeTransform || {} // 旋转信息
        this.shapeOpaMenu = arg.shapeOpaMenu // 设备操作菜单
        this.key = arg.key
        this.fill = arg.fill || false
        this.fillTransparency = arg.fillTransparency || 1
        this.isDash = arg.isDash || false
        this.outline = arg.outline || false
        this.outlineColor = arg.outlineColor || '#000'
        this.shapePosition = arg.shapePosition || {
            longitude: 0,
            latitude: 0,
            height: 0
        } // 位置信息
        this.shapeType = arg.shapeType || '1'  // 设备类型  1 选区设备 3 裁剪设备  2 传递其他为其他设备

    }

    // 删除shape
	shapeDeleteDraw(id) {
		this.viewer.entities.removeById(id || this.id)
	}

    updateShapeOpaMenu(menu) {
        this.shapeOpaMenu = menu
    }

}
