import React, { useEffect, useState } from "react";
import axios from 'axios';
import CardElement from "./CardElement";
const Card = (props) => {
    const [musicData, setMusicData] = useState([]);
    let api = props.data === "home" ? " " : "music";
    useEffect(() => {
        const fetchData = async () => {
          try {
              const musicResponse = await axios.get('http://localhost:3000/'+api);
              console.log('Music response:', musicResponse.data); // 데이터가 정상적으로 수신되었는지 확인
              setMusicData(musicResponse.data.musiclists);
          } catch (error) {
              console.error('Error fetching data:', error); // 에러가 발생한 경우 콘솔에 출력
          }
      };
    
        fetchData();
    }, []);
    return (
        <div className="grid">
            {musicData && musicData.map((music) => (
            <CardElement index={music.id} music={music}/>
        ))}    
        </div>
    )
}
export default Card;