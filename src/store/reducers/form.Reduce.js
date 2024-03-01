const initialValue={
    userDetails:{
        uname:'venkat',
        password:'12345'

    },
    isUserValid:false
}

const fomrReducer=function(state=initialValue,action){
    let a=action.payload
    // console.log(a.uname)
    let {uname}={...a}
    console.log('form',uname)
    // let person={
    //     age:25
    // }
    // console.log(person.age)
    // let age={...person}
    // console.log(age)
    return state
}
export default fomrReducer