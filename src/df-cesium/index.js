// Dfcesium - 地图工作台调用的类方法
import { ShapeList } from '../shape/index'
import { Task } from '../task/index'
import {getImageryProviderViewModels} from './map-data/index'
export class Dfcesium {
    constructor(age) {
        const mapType = age.mapType
        const options = age.options
        if (mapType !== 'PRIVATEMAP') {
            options.imageryProviderViewModels = getImageryProviderViewModels(mapType)
        } 
        // eslint-disable-next-line constructor-super
        this.viewer = this.initDfcesium(age.container, options)
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
        viewer._cesiumWidget._creditContainer.style.display = "none";
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
        const _this = this;
        // 鼠标左键按下事件
        this.handler.setInputAction(function (event) {
            // console.log("event-LEFT_DOWN", event);

            _this.handlerCallBack('LEFT_DOWN',{e:event})
        }, Cesium.ScreenSpaceEventType.LEFT_DOWN);

        // 鼠标移动事件
        this.handler.setInputAction(function (event) {
            // console.log("event-MOUSE_MOVE", event);

            _this.handlerCallBack('MOUSE_MOVE',{e:event})
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

        // 鼠标松开事件
        this.handler.setInputAction(function (event) {
            // console.log("event-LEFT_UP", event);

            _this.handlerCallBack('LEFT_UP',{e:event})

        }, Cesium.ScreenSpaceEventType.LEFT_UP);


    }

    // 无感定位
    setPositionViewer(local) {
        this.viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(local.longitude, local.latitude, local.height),
            orientation: {
                heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north)
                pitch: Cesium.Math.toRadians(-90),    // default value (looking down)
                roll: 0.0                             // default value
            }
        })
    }


    // 飞行定位
    setPositionByFly(local) {
        this.viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(local.longitude, local.latitude, local.height)
        })
    }
}