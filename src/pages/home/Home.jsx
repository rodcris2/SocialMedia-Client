import { useEffect, useState } from 'react';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/list/List';
import { config } from '../../routes/auth';
import { axiosInstance } from '../../config';
import './home.css';

const Home = ({type}) => {
  const[lists, setLists] = useState([]);
  type = 'podcast';

  useEffect(() => {
      axiosInstance.get('/lists/' + type, config).then((response) => {
        console.log(response.data)
        setLists(response.data);
      }).catch((error) => {
        // console.log(error)
      })
  }, [type]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type}/>
      {lists.map((list, i) => (
        <List key={i} list={list}/>
      ))}
    </div>
  )
}

export default Home;