import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Chat from '../../components/chat';
import SingleChat from '../../components/single-chat';
import { getFilteredData } from '../../utils/get-filtered-data';

const Home = () => {

    const [data,setData] = useState([])
    const [id,setId] = useState("")
    const [input, setInput] = useState("")

    
    const fetchData = async () => {

        try {
          const response = await fetch('https://my-json-server.typicode.com/codebuds-fk/chat/chats');
          const jsonData = await response.json();
          setData(jsonData);
  
          
          localStorage.setItem('chatData', JSON.stringify(jsonData));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
        
        const storedData = localStorage.getItem('chatData');
        if(storedData) setData(JSON.parse(storedData))

        fetchData();
    },[])

    const filteredData = getFilteredData(data,input,id)

    return(
        <div>
            <Header id={id} setInput={setInput}/>
            <Chat data={filteredData} setId={setId} id={id}/>
            {id && <SingleChat data={data} id={id}/>}
        </div>
    )
}

export default Home;