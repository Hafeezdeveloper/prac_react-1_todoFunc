import React, { useState } from 'react'
// import {} from '@mui/material'
import './App.css'
import { Box } from '@mui/system'
const App = () => {
  const [filterData,setFilterData] = useState([])
  const [txt,setTxt]= useState('')
  let [data,setData] = useState([
    {id:'1',title:'Jewelery'},
    {id:'2',title:'Mens Colthing'},
    {id:'3',title:'Women cloting'},
    {id:'4',title:'Shoes'},
    {id:'5',title:'cars'},
    {id:'1',title:'Jewelery for women'},
    {id:'2',title:'Mens Colthing 2'},
    {id:'3',title:'Women cloting 2'},
    {id:'4',title:'Shoes nike'},
    {id:'5',title:'cars mehran'},
    {id:'1',title:'Jewelery for men'},
    {id:'2',title:'Mens Colthing 3'},
    {id:'3',title:'Women cloting 4'},
    {id:'4',title:'Shoes bata'},
    {id:'5',title:'cars aulto'},
    {id:'1',title:'Jewelery chids'},
    {id:'2',title:'Mens Colthing 4'},
    {id:'3',title:'Women cloting 4'},
    {id:'4',title:'Shoes allbirds'},
    {id:'5',title:'cars suzuki'},
  ])

  const handleChng = (event) =>{
  let shrwrd = event.target.value
    let filt = data.filter( (x,i) =>{
      return x.title.toLowerCase().includes(shrwrd.toLowerCase())
    })
    if(shrwrd === ""){
      console.log("empty")
      setFilterData([])
    }else{

      setFilterData(filt)
    }
  }
  return (
    <div>
      <Box  >
        <input type="text"  onChange={handleChng} />
          {filterData.length != 0 && (
        <Box sx={{width:'300px',height:'150px',border:'2px solid gray',overflow:'hidden',}} >
            {filterData.map( (x,i) =>{
            return(
              <li key={i}>{x.title}</li>
            )
          }) }
        </Box>
          )}
      </Box>
      
      
    </div>
  )
}

export default App
