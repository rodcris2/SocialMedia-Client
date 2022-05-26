import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from '../../config';
import { config } from '../../routes/auth';
import "./featured.css";

export default function Featured({type}) {
    const[content, setContent] = useState({});

    const setData = () => {
        localStorage.setItem('podcast', JSON.stringify(content));
    };

    useEffect(() => {
        axiosInstance.get('/podcast/random/' + type, config).then((response) => {
          setContent(response.data);
        }).catch((error) => {
          // console.log(error)
        })
      }, [type]);

    return (
        <div className="featured">
            <img className="podcastFeaturedImg"
                src={content?.image}
                alt=""
            />
            <div className="info">
                <span className="featuredTitle">
                    {content?.title}
                </span>
                <span className="featuredDesc">
                    {content?.description}
                </span>
                <div className="featuredButtons">
                    <Link to={{pathname:"/listen", podcast: content}} className="link">
                        <button className="featuredButton playButton" onClick={setData}>
                            <span className="featuredButton-text">Play</span>
                        </button>
                    </Link>
                    <button className="featuredButton more">
                        <span className='featuredButton-text'>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
