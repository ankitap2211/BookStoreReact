import axios from 'axios'

const headerConfig = {
    headers: { 'x-access-token': localStorage.getItem('token') }
    //headerConfig is for authenticate user
}
export const getBookList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book', headerConfig)

    return response
}
export const addCartItem = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`, id,
        headerConfig)

    return response
}

export const addWishlist = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`, id,
        headerConfig)

    return response
}

export const addQuantity = (id) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id.cartItem_id}`
    ,id,
        headerConfig)

    return response
}

export const getCartItems = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', headerConfig)

    return response
}

export const removeItemsFromCart = (id) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id.cartItem_id}`
    ,headerConfig)

    return response
}

export const detailsCustomer = (detailsObj) =>{

    let result = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`, detailsObj,headerConfig)

    return result
    console.log("register processing")
}

export const getWishlistItems = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items', headerConfig)

    return response
}

export const addOrder = (obj) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`, obj,
        headerConfig)

    return response
}
export const removeFromWishlist = (id) => {
    let response = 
    axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${id.product_id}`
    ,headerConfig)

    return response
}