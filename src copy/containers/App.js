import React,{useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';




function App(){
    const [robo,setRobo]=useState([])
    const [searchfield,setSearchfield]=useState('')

    useEffect(()=> {fetch('https://jsonplaceholder.typicode.com/users/')
         .then(response=>response.json())
        .then(users=>{setRobo(users)});

    },[])


    
    const onSearchChange=(event)=>{
        setSearchfield(event.target.value)
        
    }
    
 
       

    const filteredRobots= robo.filter(robo=>{
            return robo.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return(
            <div className='tc '>
    
            <h1 className=' pa2 grow '>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList robo={filteredRobots}/>
            </Scroll>
          
            </div> 
        );

    
}





 
    

export default App;