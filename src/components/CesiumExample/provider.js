export function getProviderViewModels() {
    const tiandiKey = "4b6b5fb26604e8db900fa005fd09dae6";       //天地图key，官网申请
    const baseUrl = 'http://t{s}.tianditu.com';
    //天地图矢量
    let tiandiVec = new Cesium.UrlTemplateImageryProvider({
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        url: baseUrl + '/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=' + tiandiKey
    });
    //天地图影像
    let tiandiImg = new Cesium.UrlTemplateImageryProvider({
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        url: baseUrl + '/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' + tiandiKey
    });
    //天地图标注
    let tiandiCva = new Cesium.UrlTemplateImageryProvider({
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        url: baseUrl + '/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=' + tiandiKey
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
