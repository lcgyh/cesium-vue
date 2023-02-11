// Dfcesium - 地图工作台调用的类方法
import { ShapeList } from '../shape/index'
import { Task } from '../task/index'
export class Dfcesium {
    constructor(age) {
        // eslint-disable-next-line constructor-super
        super(age);
        this.viewer = this.initDfcesium(age.container,age.options)
        this.task = new Task() //执行中的任务
        this.selectShape = null // 当权选中的设备
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        this.handlerCallBack = age.handlerCallBack // 事件传递给业务层的回调
        if (this.handler) {
            this.initHandler();
        }
        this.shapeList = new ShapeList()
    }


    // 初始化地图
    initDfcesium(container,options ) {
        const viewer = new Cesium.Viewer(container, options);
        // viewer的其他设置
        return viewer
    }


    // 获取当前选中的设备
    getSelectShape() {
        return this.selectShape
    }
    // 更新当前选中的设备
    clearSelectShape() {
        this.selectShape = null
    }
    // 设置选址的设备
    setSelectShape(shape) {
        this.selectShape = shape
    }

    // 初始化监听事件
    initHandler() {
        // const _this = this;
        // 鼠标左键按下事件
        this.handler.setInputAction(function (event) {
            console.log("event-LEFT_DOWN", event);

            this.handlerCallBack(event)
        }, Cesium.ScreenSpaceEventType.LEFT_DOWN);

        // 鼠标移动事件
        this.handler.setInputAction(function (event) {
            console.log("event-MOUSE_MOVE", event);

            this.handlerCallBack(event)
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

        // 鼠标松开事件
        this.handler.setInputAction(function (event) {
            console.log("event-LEFT_UP", event);

            this.handlerCallBack(event)

        }, Cesium.ScreenSpaceEventType.LEFT_UP);


    }

    // 无感定位
    setPositionViewer() {
        this.viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0),
            orientation: {
                heading: Cesium.Math.toRadians(90.0), // east, default value is 0.0 (north)
                pitch: Cesium.Math.toRadians(-90),    // default value (looking down)
                roll: 0.0                             // default value
            }
        })
    }


    // 飞行定位
    setPositionByFly() {
        this.viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)
        })
    }
}