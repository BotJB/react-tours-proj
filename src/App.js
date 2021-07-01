
import React,{useState,useEffect} from 'react'
import Tours from './Tours'
import './style.css'

//Url for the app
const url='https://course-api.com/react-tours-project'
function App() {
  const [isLoading,setLoading]=useState(true);
  const [tours,setTours]=useState([])
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const getTours=async()=>{
    try{
 const response = await fetch(url)
      const tours = await response.json()
    setLoading(false)
    setTours(tours)
    }
    catch(err){
      console.log(err)
    }
   
  }
  useEffect(()=>{
    getTours();
  },[])
  if(isLoading){
    return(
      <h3>Loading...</h3>
    )
  }
  return (
    
    <article>  <Tours tours={tours} removeTour={removeTour} /></article>
  );
}

export default App;
