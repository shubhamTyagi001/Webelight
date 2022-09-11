import React, { useState } from 'react'

function Activites() {
       const[search,setSearch] = useState([])
       us
    const getDetail = async () =>{
        const data = await fetch('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc') ;
        const detailData = await data.json();
        console.log(detailData)
        
    }

  return (
    <div></div>
  )
}

export default Activites