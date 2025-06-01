import { useState } from 'react';
import axios from 'axios';
import img1 from '../components/sneakerhead.png';
import { useNavigate } from 'react-router-dom';
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
function Reg(){
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
    {/*
    const navigate =useNavigate();
    const[username,setOne]=useState(0);
    const[email,setTwo]=useState(0);
    const[password,setThree]=useState(0);
    const[repassword,setFour]=useState(0);
    const[signUp,setPrint]=useState(0);
    const[error2,setError]=useState(false);
    const {login} = useUser();

       function name1(e){
           setOne(e.target.value);
       }
       function email1(e){
           setTwo(e.target.value);
       }
       function password1(e){
           setThree(e.target.value);
       }
       function repassword1(e){
            setFour(e.target.value);
       }
       function print(){
        if(password==repassword){
            setPrint({username,email,password,repassword});
            setError(false);
            const response=axios.post('https://sn-backend-gq6u.onrender.com/register',{
               username,
               password,
               email,
           })
           login(response.data.usr.username,response.data.usr.password,response.data.usr.email);
           navigate('/login')

        }
        else{
            setError(true);
        }
       }
       const navigate = useNavigate();
       const [username, setOne] = useState('');
       const [email, setTwo] = useState('');
       const [password, setThree] = useState('');
       const [repassword, setFour] = useState('');
       const [error, setError] = useState(null);
      function setUsername(e){
         setOne(e.target.value);
     }
     function setEmail(e){
         setTwo(e.target.value);
     }
     function setPassword(e){
         setThree(e.target.value);
     }
     function setRepassword(e){
          setFour(e.target.value);
     }
   
       const handleRegister = async () => {
           if (password == repassword) {
               setError('Passwords do not match');
               return;
           }
           const response = await axios.post('https://sn-backend-gq6u.onrender.com/register', {
            username,
            password,
            email,
        });
           try{
               const response = await axios.post('https://sn-backend-gq6u.onrender.com/register', {
                   username,
                   password,
                   email,
               });
               
               if (response.data) {
                   navigate('/login'); // Redirect to login page on successful registration
               }
           } catch (err) {
               console.error('Registration failed:', err);
               setError('Registration failed. Please try again.');
           }
               */}
               const[username,setUsername] = useState('');
               const[email,setEmail] = useState('');
               const[password,setPassword] = useState('');
               const[rePass,setRepass] = useState('');
               const navigate = useNavigate();

               function handleLogin()
               {
                if(password===rePass){
                
                  console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
                
                 axios.post('https://sn-backend-gq6u.onrender.com/users',{
                   email,
                   username,
                   password
                 });
                 navigate('/login');
                }
               }
             
               function eml(e)
               {
                 setEmail(e.target.value);
               }
               function usrNme(e)
               {
                 setUsername(e.target.value);
               }
               function psWr(e)
               {
                 setPassword(e.target.value);
               }
               function rPs(e)
  {
    setRepass(e.target.value);
  }

 return(
    <div style={BG}>
     <div className='wrapper' style={Body}>
      <div style={body2}>
        <h1 style={{color : 'white',padding :'10px'}}>Register</h1>
        <div className='inputBox' style={{marginBottom : '15px'}}>
         <input type='text' placeholder='username' style={inputstyle} onChange={usrNme}/><br />
         <input type='email' placeholder='email' style={inputstyle} onChange={eml}/><br />
         <input type='password' placeholder='password' style={inputstyle} onChange={psWr}/><br/>
         <input type='password' placeholder='re-enter password' style={inputstyle} onChange={rPs}/><br/> 
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
              onClick={handleLogin}
            >
              Register
       </button>
        </div>
        <div style={{marginBottom : '15px'}}>
         <p style={{color : 'white'}}>Already have an account, <a
                href='./Login'
                style={linkStyle}
                onMouseEnter={() => setIsLoginLinkHovered(true)}
                onMouseLeave={() => setIsLoginLinkHovered(false)}
                
              >
               Login
               </a></p>
        </div>
        </div>
    </div>
    </div>
 )   
}
export default Reg