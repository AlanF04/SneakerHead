import { useState } from 'react';
import axios from 'axios';
import img1 from '../components/sneakerhead.png';
import { Link,useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

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
function Log(){
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [isForgotPasswordHovered, setIsForgotPasswordHovered] = useState(false);
    const [isLoginLinkHovered, setIsLoginLinkHovered] = useState(false);
 
   const buttonStyle = {
     width: '150px',
     backgroundColor: isButtonHovered ? '#BDE61B' : 'rgb(198, 220, 235)',
     color: isButtonHovered ? 'white' : 'black',
     height: '30px',
     borderRadius: '10px',
     border: 'none',
     transitionDuration: '0.4s',
   };

   const linkStyle = {
      color: isLoginLinkHovered ? 'white' : '#BDE61B',
      textDecoration: 'none',
      cursor: 'pointer',
    };

    const linkStyle2 = {
      color: isForgotPasswordHovered ? 'white' : '#BDE61B',
      textDecoration: 'none',
      cursor: 'pointer',
    };
    
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();
    const {login} = useUser();
  
    function usrNme(e)
      {
        setUsername(e.target.value);
      }
      function psWr(e){
        setPassword(e.target.value);
      }
  
      async function handleLogins() {
        try {
          const response = await axios.post('https://sn-backend-gq6u.onrender.com/login', {
            username,
            password
          });
      
          if (response.data.success) {
            login(response.data.usr.username, response.data.usr.email);
            navigate('/');
          } else {
            alert(response.data.message); // Display the error message
          }
        } catch (error) {
          console.error('Error during login:', error);
          alert('An error occurred during login. Please try again.');
        }
      }
      
 return(
    <div style={BG}>
     <div className='wrapper' style={Body}>
      <div style={body2}>
        <h1 style={{color : 'white',padding :'10px'}}>Login</h1>
        <div className='inputBox' style={{marginBottom : '15px'}}>
         <input type='text' placeholder='username' onChange={usrNme} style={inputstyle}/><br />
         <input type='password' placeholder='password' onChange={psWr} style={inputstyle}/><br/>
         <a
              href='#'
              style={linkStyle2}
              onMouseEnter={() => setIsForgotPasswordHovered(true)}
              onMouseLeave={() => setIsForgotPasswordHovered(false)}
            >Forgot password?</a>
        </div>
        <div style={{marginBottom : '15px'}}>
        <button
              style={buttonStyle}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              onClick={handleLogins}
            >
              Login
       </button>
        </div>
        <div style={{marginBottom : '15px'}}>
         <p style={{color : 'white'}}>Don't have an account? <a
                href='./register'
                style={linkStyle}
                onMouseEnter={() => setIsLoginLinkHovered(true)}
                onMouseLeave={() => setIsLoginLinkHovered(false)}
                
              >
               Register
               </a></p>
        </div>
        </div>
    </div>
    </div>
 )   
}
export default Log