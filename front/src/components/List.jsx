import React, { useState,useEffect } from "react"
import axios from 'axios';
import ListElement from "./ListElement";
const List = (props) => {
    const [listData,setListData] = useState([]);
    let api = props.data === "home" ? " " : "playlist";
    useEffect(() => {
        const fetchData = async () => {
          try {
              const listResponse = await axios.get('http://localhost:3000/'+api);
              setListData(listResponse.data.playlists);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
    
        fetchData();
    }, []);
    return (
        <div className="list-wrap">
            {listData && listData.map((list) => (
            <ListElement list={list}/>
        ))}    
        </div>
    )
}
export default List;