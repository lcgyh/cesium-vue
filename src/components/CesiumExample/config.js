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