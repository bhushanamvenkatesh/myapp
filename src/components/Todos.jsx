// import React from 'react'
// import EachTodo from './EachTodo'
// import uuid from 'react-uuid'
// function Todos() {
//     let [todosList,setTodoList]=React.useState([])
//     let arr=[12,55]

//     function addNewTodo(){
//         let obj={
//             title:document.getElementById('s').value,
//             status:false,
//             id:uuid()
//         }
//         setTodoList(a=>([...a,obj]))
//     }
//     let Delete=React.useCallback((i)=>{
//         setTodoList((prevList)=>{
//             return prevList.filter((each)=>each.id!==i)
//         })
        
// },[])

// let memArr=React.useMemo(()=>arr,[])
        
    
//   return (
//     <div className='my-box'>
//         <input type="text" name="" id="s" /> 
//         <button onClick={()=>addNewTodo()}>Add</button>
//         <ul className='list'>
//         {
//             todosList.map((each,i)=>{
//                 return <EachTodo key={i} each={each} Delete={Delete} memArr={memArr} />
//             })
//         }
//         </ul>
        
//     </div>
//   )
// }

// export default Todos