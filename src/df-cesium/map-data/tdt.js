export const TDU_Key = "4b6b5fb26604e8db900fa005fd09dae6"; // 天地图key

//在线天地图影像服务地址(墨卡托投影)
export const TDT_IMG_W =
    "http://{s}.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default&format=tiles&tk=" +
    TDU_Key;
//在线天地图矢量地图服务(墨卡托投影)
export const TDT_VEC_W =
    "http://{s}.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default&format=tiles&tk=" +
    TDU_Key;
//在线天地图影像中文标记服务(墨卡托投影)
export const TDT_CIA_W =
    "http://{s}.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default.jpg&tk=" +
    TDU_Key;
//在线天地图矢量中文标记服务(墨卡托投影)
export const TDT_CVA_W =
    "http://{s}.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default.jpg&tk=" +
    TDU_Key;

export function getProviderViewModels() {
    const baseUrl = 'http://t{s}.tianditu.com';
    //天地图矢量
    let tiandiVec = new Cesium.UrlTemplateImageryProvider({
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        url: baseUrl + '/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=' + TDU_Key
    });
    //天地图影像
    let tiandiImg = new Cesium.UrlTemplateImageryProvider({
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        url: baseUrl + '/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' + TDU_Key
    });
    //天地图标注
    let tiandiCva = new Cesium.UrlTemplateImageryProvider({
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        url: baseUrl + '/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=' + TDU_Key
    });

    let tiandiVecModel = new Cesium.ProviderViewModel({
        name: '天地图',
        category: '国内地图资源',
        iconUrl: Cesium.buildModuleUrl('./Images/ImageryProviders/openStreetMap.png'),
        tooltip: 'WMTS 地图服务',
        creationFunction: function () {
            return [tiandiVec, tiandiCva];
        }
    });
    let tiandiImgModel = new Cesium.ProviderViewModel({
        name: '天地图影像',
        category: '国内地图资源',
        iconUrl: Cesium.buildModuleUrl('./Images/ImageryProviders/esriWorldImagery.png'),
        tooltip: 'WMTS 影像服务',
        creationFunction: function () {
            return [tiandiImg, tiandiCva];
        }
    });

    return [tiandiVecModel, tiandiImgModel]
}



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

    // viewer.imageryLayers.addImageryProvider(Img); //添加到cesium图层上
    // viewer.imageryLayers.addImageryProvider(cia); //添加到cesium图层上