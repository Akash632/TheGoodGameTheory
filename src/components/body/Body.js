import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import axios from 'axios';
import './Body.css';
import Search from '../search/Search';
function Body() {
    const [data,setData] = useState();
    const [search,setSearch]=useState();
    const [searched,setSearched]=useState([]);

    const getData=async ()=>{
        //api to fetch data
        let res = await axios.get('https://api.punkapi.com/v2/beers');
        setData(res.data);
        setSearched(res.data);
    }

    const searchData=async ()=>{
        //used api to search for data also
        let res = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${search?search:"undefined"}`);
        setSearched(res.data);
    
    }

    useEffect(()=>{
        //added a debounce function to reduce number of render for the api call while searching
        let timer  = setTimeout(()=>{   
            searchData();
        },800);
        return ()=>clearTimeout(timer);
    },[search]);

    useEffect(()=>{
        getData();
    },[]);

  return (
    <div className='body-main-container'>
        <Search setSearch={setSearch}/>
        <div className='body-container'>
            {searched&&searched.length>0?searched.map((value)=>(
                <Card data={value} key={value.id}/>
            )):data&&data.map((value)=>(
                <Card data={value} key={value.id}/>
            ))}
        </div>
    </div>
  );
}

export default Body;
