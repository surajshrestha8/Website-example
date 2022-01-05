import {Clock,Telephone} from'react-bootstrap-icons';
import {Row,Col} from'react-bootstrap';
import './info.css';



const Infos = ()=>{
    return(
        <div className='mainbox'>
        <div className='boxitems'>
            
            <Clock color='white' style={{height:50,width:50}}></Clock>
            <div style={{marginLeft:'5px'}}>
            <h6 style={{color:'white'}}>Monday-Friday</h6>
        <h6 style={{marginTop:'5px', color:'white'}}>8:00 AM - 8:00 PM</h6>


            </div>
    
        </div>
        <div className='boxitems'>
            
            <Telephone color='white' style={{height:50,width:50}}></Telephone>
            <div style={{marginLeft:'5px'}}>
            <h6 style={{color:'white'}}>Call Us</h6>
        <h6 style={{marginTop:'5px', color:'white'}}>+61441169</h6>


            </div>
    
        </div>
        </div>
    )
}

export default Infos;