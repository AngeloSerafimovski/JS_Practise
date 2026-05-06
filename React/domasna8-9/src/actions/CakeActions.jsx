import { BUY_CAKE, RESTOCK_CAKES } from './../constants/CakeConstants';

export const buyCake = (numOfCakes) => {
    return {
        type: BUY_CAKE,
        payload: numOfCakes
    }
}

export const restockCakes = (numOfCakes) => {
    return {
        type: RESTOCK_CAKES,
        payload: numOfCakes
    }
}