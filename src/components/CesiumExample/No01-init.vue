<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
// import * as tdt_config from './config'
import { getProviderViewModels } from "./provider.js";

export default {
  name: "DfCesium",
  mounted() {

    // const Img = new Cesium.WebMapTileServiceImageryProvider({
    //   //调用影响中文服务
    //   url: tdt_config.TDT_VEC_W, //url地址
    //   layer: "img_w", //WMTS请求的层名称
    //   style: "default", //WMTS请求的样式名称
    //   format: "tiles", //MIME类型，用于从服务器检索图像
    //   tileMatrixSetID: "GoogleMapsCompatible", //  用于WMTS请求的TileMatrixSet的标识符
    //   subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"], //天地图8个服务器
    //   minimumLevel: 0, //最小层级
    //   maximumLevel: 18, //最大层级
    // });

    // eslint-disable-next-line no-undef
    // const cia = new Cesium.WebMapTileServiceImageryProvider({
    //   //调用影响中文注记服务
    //   url: tdt_config.TDT_CVA_W,
    //   layer: "cia_w",
    //   style: "default",
    //   format: "tiles",
    //   tileMatrixSetID: "GoogleMapsCompatible",
    //   subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"], //天地图8个服务器
    //   minimumLevel: 0,
    //   maximumLevel: 18,
    // });

    const [tiandiVecModel, tiandiImgModel] = getProviderViewModels();


    // var viewer = new Cesium.CesiumWidget('cesiumContainer')
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NWZiZDhmYi01M2MyLTQ2OGEtOWY2Ny1jYWY3YTQwZWMwYmYiLCJpZCI6MTE3NDU2LCJpYXQiOjE2NzYwOTYzNzd9.eSlnFruvV5Kk0xnGjFjJ3xAtYGvnKcKIEspCtinBmBY'
    // eslint-disable-next-line no-undef
    var viewer = new Cesium.Viewer("cesiumContainer", {
      imageryProviderViewModels: [tiandiVecModel, tiandiImgModel],
      animation: false,  //动画控制不显示     
      timeline: false,    //时间线不显示
      fullscreenButton: false, //全屏按钮不显示
      infoBox: false
    });
    // viewer.imageryLayers.addImageryProvider(Img); //添加到cesium图层上
    // viewer.imageryLayers.addImageryProvider(cia); //添加到cesium图层上
    viewer._cesiumWidget._creditContainer.style.display = "none";


    // eslint-disable-next-line no-console
    console.log(viewer)
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
