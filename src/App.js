import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar.js';
// import Movie  from './components/Movie';
// import Main from './components/Main.js';
import Card from './components/Card.js';
import { useEffect, useState } from 'react';


function App() {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(4);

  async function getData(){
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=50';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0e63126efemsh33fe260b0732ab4p12d47djsnff97bf5b9423',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
 
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setDatas(result);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(()=>{
    getData();
  },[limit])

  const loadMore = ()=>{
    setLimit(limit+4);
  }


  return (
    <div className="App">
     <Navbar/>
     <div className='one-card'>
      {
        datas.map((val,index)=>{
          return (
            <Card key={index} imgurl={val.gifUrl}
            name={val.name}
          />
          )
        })
        } 
      </div>
      <button onClick={()=> loadMore} id="btn" >Load More</button>
    </div>
  );
}

export default App;


// // {
// //   data.map((val,index)=>{
// //     return (
// //       <Card key={index}
// //       img={val.img}
// //       name={val.name}
// //       des={val.des}
// //     />
// //     )
// //   })
// //   }

/*---------------------------------------------------------------------*/

