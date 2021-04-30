//import logo from './logo.svg';
import logo from './logo192.png';
import './App.css';
//import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Box from './Components/Box';
import ClassComp from './Components/ClassComp';
//import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import FuncComp from './Components/FuncComp';

function App() {
  const groups_of_goods=['хлебобулочные','вода','заморозка'];
  return (
    <div className="App">
      <Header/>
      <div className="box">
      <Box/>
      <img src={logo} alt="logo"/>
      </div>
      <FuncComp names={['Лена','Света','Оля']}/>  
      <ClassComp names_of_groups={groups_of_goods}/>
    </div>
  
    
  );
}

export default App;
