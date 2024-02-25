import {Location} from './types'
export const locationTranslator = (location: Location) => {
    if (location === Location.Capital) {
        return 'Москва'
    } else if (location === Location.Region) {
        return 'Из Москвы'
    }
    }