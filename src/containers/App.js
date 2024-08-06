import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
      super()
      this.state = {
        robo: [],
        searchfield: ''
      }
    }
  
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({ robo: users})});
    }
  
    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }
  
    render() {
      const { robo, searchfield } = this.state;
      const filteredRobots = robo.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return !robo.length ?
        <h1>Loading</h1> :
        (
          <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList robo={filteredRobots} />
            </Scroll>
          </div>
        );
    }
  }
  
  export default App;


// function App(){
//     const [robo,setRobo]=useState([])
//     const [searchfield,setSearchfield]=useState('')

//     useEffect(()=> {fetch('https://jsonplaceholder.typicode.com/users/')
//          .then(response=>response.json())
//         .then(users=>{setRobo(users)});

//     },[])


    
//     const onSearchChange=(event)=>{
//         setSearchfield(event.target.value)
        
//     }
    
 
       

//     const filteredRobots= robo.filter(robo=>{
//             return robo.name.toLowerCase().includes(searchfield.toLowerCase())
//     })
//     return(
//             <div className='tc '>
    
//             <h1 className=' pa2 grow '>RoboFriends</h1>
//             <SearchBox searchChange={this.onSearchChange}/>
//             <Scroll>
//               <CardList robo={filteredRobots}/>
//             </Scroll>
          
//             </div> 
//         );

    
// }





 
    

// export default App;