const initialValue = {
    cartArr: []
}

const cartReducer = function (state = initialValue, action) {
    // console.log(action)
    if (action.type === "ADDTOCART") {
        // console.log(action.payload)
        function getcart() {
            let res = state.cartArr.find((each) => each.title === action.payload.title)
            if (res === undefined) {
                state.cartArr.push({ ...action.payload, quantity: 1 })
            }
            else {
                res.quantity+=1
            }
            return state.cartArr
        }
        return { ...state, cartArr: [...getcart()] }
    }
    return state
}

export default cartReducer