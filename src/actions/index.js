import * as types from '../constants/ActionTypes'
import axios from 'axios'


const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products: products
  })
  
export const getAllProducts = () => dispatch => {
    axios.get('/api/products').then((res) => {
        dispatch(receiveProducts(res.data))
    })
}

const addToBagSuccess = (productId,size) => ({
    type : types.ADD_TO_SHOPPINGBAG,
    productId,size
})


export const addToBag = (productId,size) => (dispatch,getState) => {
    const { products } = getState()
    if (products.getInventory.inventory[productId-1][size] > 0) {
        setTimeout(() => dispatch(addToBagSuccess(productId,size)),1000)
    }
}

const removeFromBag = index => ({
    type : types.REMOVE_FROM_BAG,
    index
})

export const deleteFromBag = index => dispatch => {
    dispatch(removeFromBag(index))
}


export const checkout = (data) => (dispatch,getState) => {
    const { shoppingbag , products } = getState()
    const user = localStorage.getItem('email')
    console.log(user)
    dispatch({ type : types.CHECKOUT_REQUEST })
    if(shoppingbag.addedIds.length > 0){
        dispatch({
            type : types.CHECKOUT_SUCCESS,
            shoppingbag,
            data,
            products,
            user
        })
    }
    else dispatch({ type : types.CHECKOUT_FAILURE })
  
}