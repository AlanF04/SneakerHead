import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faBars,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './dropdown';

const d={
    borderRadius: '20px',
    border: '1px solid #000',
    background: '#75A9CF',
    backdropFilter: 'blur(20px)',
    display:'flex',
    justifyContent: 'space-between',
    fontSize: '30px',
    color:'black',
    padding: '10px',
    position:'fixed',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '1000',
}
const  bs={
    width:'30px'
}
function Nav(){
    return(
        <div style={d}>
            <Dropdown />
            
            <hi><Link to ='/'>👟SneakerHead</Link></hi>
            
            <Link to ='/cart'>
            <FontAwesomeIcon icon={faCartShopping} />
            </Link>
        </div>
    );
}

export default Nav