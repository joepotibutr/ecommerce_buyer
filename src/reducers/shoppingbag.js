import { ADD_TO_SHOPPINGBAG } from '../constants/ActionTypes'

const initialState = {
    id : []
}

const addToBagById = (state = initialState.id , action) => {
    switch(action.type){
        case ADD_TO_SHOPPINGBAG :
            console.log("ADD TO BAG BY ID !!")
            return [...state,action.id]
        default : 
            return state
    }
}

export const getBagProductsById = state => state.addToBagById

const shoppingbag = (state = initialState,action) => {
    switch(action.type){
        default : 
            return {
                addToBagById : addToBagById(state.addToBagById,action)
            }
    }
}

export default shoppingbag