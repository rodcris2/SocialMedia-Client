import ListItem from "../listItem/ListItem"
import {useRef} from "react";
import "./list.css"

export default function List({list}) {
    // const [slideNumber, setSlideNumber] = useState(0);
    // const [clickLimit, setCliickLimit] = useState(window.innerWidth / 430);

    const listRef = useRef();

    const handleClick = (direction) =>{
        let distance = listRef.current.getBoundingClientRect().x
        if(direction === "left"){
            // setSlideNumber(slideNumber - 1);
            // slideNumber > 0
            listRef.current.style.transform = `translateX(${410 + distance}px)`
        }
        if(direction === "right"){
            // setSlideNumber(slideNumber + 1);
            // slideNumber < 12 - clickLimit
            listRef.current.style.transform = `translateX(${-410 + distance}px)`
        }
    };

    return (
        <div className="list">
            <span className="listTitle">{list?.title}</span>
            <div className="listWrapper">
                <button 
                    className="sliderArrow left" 
                    onClick={()=>handleClick("left")} 
                    // style={{display: slideNumber === 0 && "none"}}
                >
                    <span>B A C K</span>
                </button>
                <div className="listContainer" ref={listRef}>
                    {list?.content.map((item,  i) => (
                        <ListItem key={i} index={i} item={item}/>
                    ))}
                </div>
                <button 
                    className="sliderArrow right" 
                    onClick={()=>handleClick("right")}
                    // style={{display: slideNumber === 6 && "none"}}
                >
                    <span>N E X T</span>
                </button>
            </div>
        </div>
    );
}
