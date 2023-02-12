import {getProviderViewModels} from './tdt'

const mapData = {
    'GAUDMAP': () => { },
    'TDTMAP': getProviderViewModels()
}

export const getImageryProviderViewModels = (type) => {
    return mapData[type]
}