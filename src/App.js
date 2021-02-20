import React, {useEffect,useState} from 'react';
import './App.css';
import {Grid,Typography} from '@material-ui/core';
import Navbar from './components/Navbar'
import MyCard from './components/MyCard';
import {getMatches} from './api/Api'

function App() {

    const [matches, setMatches] = useState([]);
    
  useEffect(() => {
    getMatches()
      .then((data)=> {
        setMatches(data.matches)
        console.log(data.matches);
      })
      .catch((error) => alert('could not load data'));
  }, []);

  
  return (
    <div className="App">
      <Navbar />
      
      <Typography variant='h3'style={{marginTop:20}}> Cric Score on finger tips </Typography>

     <Grid container>
       <Grid sm='3'></Grid>
       <Grid sm='6'>
       {matches.map((match)=>(
         <>
         {
         (match.type==='Twenty20' ? <MyCard key={match.unique_id } match={match} /> : '' )
         }
         

         </>

        ))}
       </Grid>
     </Grid>
     
    </div>
  );
}

export default App;
