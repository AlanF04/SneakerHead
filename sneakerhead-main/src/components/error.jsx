import { Link } from "react-router-dom";
import myImage2 from '../components/p8.png'
const middle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderStyle: 'solid',
    // padding: '10px',
    // borderColor: 'black',
     marginLeft: '130px',
     marginRight: '530px',
     height:'1500px',
    // borderRadius: '10px',
    // borderWidth: '1px',
    //textAlign: 'center',
    /*font-style: oblique;*/
    //marginBottom: '10px'
    
    
}
const b99={
    top: '26.1px',
    left: '860px',
    width: '994px',
    height: '1012px',
    position: 'absolute',
    flexShrink: '0',
}
const b10={
    position:'center',
    borderRadius: '10px',
    justifyContent: 'space-between',
    fontSize: '30px',
    color:'black',
    padding: '10px',
    height:'80px',
    width:'250px',
  }

function Err(){
    return (
        <div style={middle}>
            { <h1 style={{fontstyle:"oblique"}}><p style={{fontSize:'60px',marginTop:'350px'}}>404 <br/> SOMETHING WENT<br/>WRONG !</p></h1> }
            <div style={b99}>
            <img src={myImage2}/>
            </div>
            <Link to='/'><button style={b10}>home</button></Link>
        </div>
    )
}

export default Err;