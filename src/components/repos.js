
import React, { useEffect, useState } from 'react'

function Repos() {
    const[item,setItem] = useState([])
   useEffect(()=>{
    getRepos();
   },[])

    const getRepos = async () =>{
        const data = await fetch('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc') ;
        const detailData = await data.json();
        console.log(detailData.items)
        setItem(detailData.items)
    }


  return (
    <div>
        {item.map((value)=>{
            return (
                <div key={value.owner.id}>
                    <img src = {value.owner.avatar_url} alt = " "/>
                    <p>{value.name}</p>
                    <h4>{value.open_issues_count}</h4>
                    <p>{value.description}</p>
                    <h4>{value.stargazers_count}</h4>
                </div>
            )
        })}
        </div>
  )
}

export default Repos