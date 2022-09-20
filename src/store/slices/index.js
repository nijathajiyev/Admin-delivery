import restaurantsSlice from "./restaurants/restaurantsSlice.js"
import productSlice from "./products/productSlice.js"
import loginSlice from "./login/loginSlice.js"
import offerSlice from "./offers/offerSlice.js"
import catagorySlice from "./catagorys/catagorySlice.js"
import orderSlice from "./orders/orderSlice.js"
export const reducers = {
    restaurant:restaurantsSlice,
    productSlice,
    loginSlice,
    offerSlice,
    catagorySlice,
    orderSlice
}