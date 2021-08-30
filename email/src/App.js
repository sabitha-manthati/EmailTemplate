import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Compose from './components/Compose';
import Emails from './components/Emails';
import { Row, Col } from 'reactstrap'
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="row">
       <div className='col-2 m-0 p-0'>
         <Sidebar />
       </div>
       <div className="col-10 m-0 p-0">
         <Navbar />
         <div className="row">
           <div className="col-3 pe-0">
             <Compose />

           </div>
           <div className="col-9 p-0">
             <Emails />
           </div>
         </div>
       </div>
     </div>
     


    </div>







  );
}

export default App;
