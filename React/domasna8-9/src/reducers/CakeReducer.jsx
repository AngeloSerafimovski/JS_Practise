import { BUY_CAKE, RESTOCK_CAKES } from './../constants/CakeConstants';

const initialState = {
    cakes: 10,
    error: ""
}

const CakeReducer = (state = initialState, action) => {

    switch (action.type) {

        case BUY_CAKE:
            if (action.payload > state.cakes) {
                return {
                    ...state,
                    error: `Not enough cakes, only ${state.cakes} cakes left`
                }
            }

            return {
                ...state,
                cakes: state.cakes - action.payload,
                error: ""
            }

        case RESTOCK_CAKES:
            return {
                ...state,
                cakes: state.cakes + action.payload,
                error: ""
            }

        default:
            return state;
    }
}

export default CakeReducer;