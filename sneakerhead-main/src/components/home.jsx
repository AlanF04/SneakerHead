import { Link } from "react-router-dom";
const b1={
    background: 'linear-gradient(180deg, #FFF 57.6%, #75A9CF 100%)',
    width: '1440px',
    height: '1024px',
}
const t1={
    fontFamily: 'Impact',
    fontSize: '500px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    background:'linear-gradient(180deg, #75A9CF 0%, #003C80 100%)',
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
}
const t2={
    color: 'FFF',
    fontFamily: 'Impact',
    fontSize: '500px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    width: '1373px',
    height: '610px',
    top: '466px',
    left: '47px',
    gap: '0px',
    opacity: '0px',

}
function Hom(){
    return(
        <div style={b1}>
            <div style={t1}><p>NIKE</p>
            <div style={t2}><p2>LATEST</p2></div>
            </div>
            
        </div>    
    );
}
export default Hom;