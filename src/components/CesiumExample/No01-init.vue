<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
// import * as tdt_config from './config'
import { Dfcesium } from '../../df-cesium/index'

export default {
  name: "DfCesium",
  mounted() {

    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NWZiZDhmYi01M2MyLTQ2OGEtOWY2Ny1jYWY3YTQwZWMwYmYiLCJpZCI6MTE3NDU2LCJpYXQiOjE2NzYwOTYzNzd9.eSlnFruvV5Kk0xnGjFjJ3xAtYGvnKcKIEspCtinBmBY'
    // eslint-disable-next-line no-undef
    // 如过是私有地图这里需要传入私有的imageryProvider,imageryProvider为null
    const dfcesium = new Dfcesium({
      container: 'cesiumContainer',
      mapType: 'TDTMAP', // GAUDMAP 高德 TDTMAP // 天地图 // PRIVATEMAP // 私有地图数据
      options: {
        // imageryProviderViewModels: [tiandiVecModel, tiandiImgModel],
        // imageryProvider:null,
        animation: false,  //动画控制不显示     
        timeline: false,    //时间线不显示
        fullscreenButton: false, //全屏按钮不显示
        infoBox: false
      },
      handlerCallBack: this.mapHandlerCallBack
    })

    dfcesium.setPositionViewer({
      longitude: 120.55538,
      latitude: 31.87532,
      height: 50000,
    })
  },
  methods: {
    // 地图事件业务层回调，参数： type, params
    mapHandlerCallBack() {
      // console.log('type', type)
      // console.log('params', params)
    },

    // 地图上新增绘制shape
    createShape(type) {
      console.log('type', type)
    }
  }
};
</script> 
<style scoped>
.map-box {
  width: 100%;
  height: 100%;
}

#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
