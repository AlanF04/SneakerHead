import { useState } from 'react';
import axios from 'axios';
import img1 from '../components/sneakerhead.png';

const Body = {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
 
};
const body2={
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop:'200px',
   borderStyle: 'solid',
   padding: '10px',
   borderColor: '#BDE61B',
   marginLeft: '530px',
   marginRight: '530px',
   borderRadius: '10px',
   width:'230px',
   borderWidth: '5px',
   textAlign: 'center',
   backgroundColor: '#transparent',

};
const inputstyle = {
   marginBottom : '15px',
   borderRadius : '10px',
   borderStyle : 'solid',
   background : 'transparent',
   padding : '10px',
   borderWidth : '2px',
   color :'white',
   borderColor : 'white'
}
// const buttonStyle = {
//    width : '150px',
//    backgroundColor: 'green',
//    height : '30px',
//    borderRadius : '10px',
//    border : 'none',
//    transitionDuration: '0.4s',
//    color : 'white'
// }
const BG = {
   backgroundImage: `url(${img1})`,
   height :'100vh',
   width : '100vw',
   backgroundPosition: 'center',
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat'
}
function Adm1(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple username and password check
    if (username === 'admin' && password === 'password') {
      // Redirect to the admin app running on port 4000
      window.location.href = 'https://sneakerhead-admin-phi.vercel.app/';
    } else {
      alert('Invalid credentials');
    }
  };

 return(
    <div style={BG}>
     <div className='wrapper' style={Body}>
      <div style={body2}>
      <h2 style={{fontSize:'50px',color:'cyan'}}>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{color:'white',fontSize:'30px'}}>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label style={{color:'white',fontSize:'30px'}}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </div>
 )   
}
export default Adm1;