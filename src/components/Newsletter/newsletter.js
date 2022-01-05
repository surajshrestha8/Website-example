import './newsletter.css';
import { Row,Col } from 'react-bootstrap';
import { Envelope, InputCursorText } from 'react-bootstrap-icons';


const NewsLetter = () => {
    return (
        <div className="box">
        
            <div className='newsletter'>
            <h3>Newsletter - Stay tune and get the latest update</h3>
            <h6>Far far away, behind the word mountains</h6>
            </div>
            
            <div className='input-icons'>
        
            <input className='inputtext' type='text' placeholder='Enter email address'></input>
        

            </div>
           
            
        
    
        
          
        </div>
    )
}


export default NewsLetter;