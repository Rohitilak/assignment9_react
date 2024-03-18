// import React, { useState } from 'react'

//  const Movie = () => {
//     const [data, setData] = useState([]);
//     async function getdata(){
//         let response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=aa031c18");
//         let parsedResponse = await response.json();
//         console.log(parsedResponse);    
//         setData(parsedResponse);
//     }
//   return (
//     <div>
//         <div className='container'>
//             <img src ={data.Poster} width="100px" />
//             <p>{data.Writer}</p>
//             <p>{data.Year}</p>
//             <p>{data.Title}</p>
//             <p>{data.Ratings[0].Source} {"|"} {data.Ratings[0].Value}</p>

//         </div>
//         <button onClick={getdata}>Click Me</button>
//     </div>
//   )
// }

// export default Movie;
