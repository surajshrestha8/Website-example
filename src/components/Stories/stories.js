
import { Container,Col,Row } from 'react-bootstrap';
import { CalendarEvent, Mortarboard ,Journal,Person} from 'react-bootstrap-icons'
import './stories.css'


const Stories = () => {
    return(
        <div className='story'>
         <div>
             
            <Mortarboard color='white' style={{width:50,height:50}}></Mortarboard>
            <h3 className='description'>3000</h3>
            <h6 className='description'>Success stories</h6>
         </div>
         <div>
             
             <Person color='white' style={{width:50,height:50}}></Person>
             <h3 className='description'>320</h3>
             <h6 className='description'>Trusted Tutors</h6>
          </div>
          <div>
             
             <CalendarEvent color='white' style={{width:50,height:50}}></CalendarEvent>
             <h3 className='description'>1000</h3>
             <h6 className='description'>Schedules</h6>
          </div>
          <div>
             
             <Journal color='white' style={{width:50,height:50}}></Journal>
             <h3 className='description'>587</h3>
             <h6 className='description'>Courses</h6>
          </div>

        </div>
    
    )
}


export default Stories;