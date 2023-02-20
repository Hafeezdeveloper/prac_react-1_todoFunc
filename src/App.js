import React, { useState } from 'react'

const App = () => {
    const [indexNum,setIndexNum] = useState()
    const [txt,setTxt] = useState('')
    const [todo,setTodo] = useState([
        {
        val:'car1',
        },
        {
        val:'car2',
        },
        {
        val:'car3',
        },
])
    
    const clkBtn = () =>{
        if(indexNum > -1){
            
             todo[indexNum].val = txt
            setTodo([...todo])
            setIndexNum(-1)  
        }else{

            setTodo([...todo,{val:txt}])   
        }
        setTxt('')
    }

   const delBtn =(i)=>{

    var abz = [...todo]
    let fil = abz.filter( (itm,ind) =>{
        if(i != ind){
            return itm
        }
    })
    setTodo([...fil])
   }

   const editBtn = (i)=>{
    console.log(i)
    setTxt(todo[i].val)
    setIndexNum(i)
   }
  return (
    <div>
       <input value={txt} type="text" onChange={(e) => setTxt(e.target.value)} />
       <button onClick={clkBtn}>Add</button>
       {todo.map((x,i) =>{
        //    console.log(x)
           return(
              <div style={{display:'flex'}} key={i}>
               <img src={"data:image/jpeg;base64,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"} alt="" />
               <li>{x.val} <button onClick={() => delBtn(i)}>delete</button> <button onClick={() => editBtn(i)}>edit</button> </li>
              </div>  
           )
       })}
    </div>
  )
}

export default App
