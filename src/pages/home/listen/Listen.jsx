import { Link } from "react-router-dom"
import "./listen.css"

export default function Listen() {
  let data = localStorage.getItem('podcast');
  const podcast = JSON.parse(data);
  
  return (
    <div className="listen">
      <Link to="/">
        <button className="back">Home</button>
      </Link>
        <audio 
            className="audio"  
            controls 
            src={podcast?.fullAudio}
        />
    </div>
  )
}