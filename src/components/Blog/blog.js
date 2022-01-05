
import { Row } from 'react-bootstrap';
import { Person ,Calendar3, ChatFill} from 'react-bootstrap-icons';

import './blog.css'


const BlogCard = ()=>{
    return (
        <div className='cardss'>
        <div className='blogcard'>
            <div className='imagecard'>

            </div>
            <div className='information' >
                <div className='details'>  <Person></Person>
            <h6>ADMIN</h6></div>
          <div className='details'> <Calendar3></Calendar3>
            <h6>Jan 18,2021</h6></div>
           <div className='details'> <ChatFill></ChatFill>
            <h6>3 Comments</h6></div>
           
            </div>
            <h2 style={{textAlign:'left'}}>Build your dream software and engineering career</h2>
            <br/>
            <br/>
            <p style={{textAlign:'left'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            
            
            

        </div>
        <div className='blogcard'>
            <div className='imagecard'>

            </div>
            <div className='information' >
                <div className='details'>  <Person></Person>
            <h6>ADMIN</h6></div>
          <div className='details'> <Calendar3></Calendar3>
            <h6>Jan 18,2021</h6></div>
           <div className='details'> <ChatFill></ChatFill>
            <h6>3 Comments</h6></div>
           
            </div>
            <h2 style={{textAlign:'left'}}>Build your dream software and engineering career</h2>
            <br/>
            <br/>
            <p style={{textAlign:'left'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            
            
            

        </div>
        <div className='blogcard'>
            <div className='imagecard'>

            </div>
            <div className='information' >
                <div className='details'>  <Person></Person>
            <h6>ADMIN</h6></div>
          <div className='details'> <Calendar3></Calendar3>
            <h6>Jan 18,2021</h6></div>
           <div className='details'> <ChatFill></ChatFill>
            <h6>3 Comments</h6></div>
           
            </div>
            <h2 style={{textAlign:'left'}}>Build your dream software and engineering career</h2>
            <br/>
            <br/>
            <p style={{textAlign:'left'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            
            
            

        </div>
        </div>
    )
}


export default BlogCard;