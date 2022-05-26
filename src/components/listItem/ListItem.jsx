import { Link } from "react-router-dom";
import { axiosInstance } from '../../config';
import { useState, useEffect } from "react";
import { config } from '../../routes/auth';
import "./listItem.css"

export default function ListItem({ index, item }) {
  const[isClicked, setIsClicked] = useState(false);
  const[podcast, setPodcast] = useState({});

  const setData = () => {
    localStorage.setItem('podcast', JSON.stringify(podcast));
  };

  useEffect(() => {
    axiosInstance.get('/podcast/find/' + item, config).then((response) => {
      // console.log(response.data)
      setPodcast(response.data);
    }).catch((error) => {
      // console.log(error)
    })
  }, [item]);

  return (
    <button 
      className={!isClicked ? "listItem" : "listItem listItemClicked"}
      style={{left: isClicked && 30 + index * 410}}
      onClick={()=>setIsClicked(true)} 
      onMouseLeave={()=>setIsClicked(false)}
    >
      <img 
        src={podcast?.image}
        alt="" 
      />
      {isClicked && (
        <>
          <audio autoPlay src={podcast?.audioPreview}/>
          <div className="itemInfo">
            <div className="icons">
              <Link to={{pathname:"/listen", podcast: podcast}}>
                <button className="listItemButton playButton" onClick={setData}>
                  <span className="listItemButton-text">Play</span>
                </button>
              </Link>
            </div>
            <div className="itemInfoTop">
              <span>{podcast?.duration}</span>
            </div>
            <div className="desc">{podcast?.title}</div>
            <div className="desc">{podcast?.description}</div>
          </div>
        </>
      )}
    </button>
  )
}
