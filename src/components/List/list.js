import { Container,Col,Row } from "react-bootstrap"
import { Arrow90degDown, AwardFill, Book, PersonWorkspace } from "react-bootstrap-icons";
import './list.css';

const List = () =>{
    return(
        <div>
            <div className="listofinfo">
                <div className="imagelist">
    
               
                </div>
                <div>
                    
                

            <div style={{display:'flex',flexDirection:'column',alignItems:"flex-start"}}>
            <h6 style={{color:'green',fontWeight:"bold"}}>LEARN ANYTHING</h6>
            <h2 style={{color:'black',fontWeight:'bold',textAlign:'left'}}>Benefits about online learing expertise</h2>
            <div className="list">
                <Col xs lg="2">
                <Book className="info"></Book>
                </Col>
                <Col className="column">
                <h5>Online Courses</h5>
                <h6 style={{textAlign:'left'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h6>
                </Col>
            </div>
            <div className="list">
                <Col xs lg="2">
                <AwardFill className="info"></AwardFill>
                </Col>
                <Col className="column">
                <h5>Earn a certificates</h5>
                <h6 style={{textAlign:'left'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h6>
                </Col>
            </div>
            <div className="list">
                <Col xs lg="2">
                <PersonWorkspace className="info"></PersonWorkspace>
                </Col>
                <Col className="column">
                <h5>Learn with experts</h5>
                <h6 style={{textAlign:'left'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h6>
                </Col>
            </div>
            </div>
            </div>
           
            </div>
        </div>
    )
}



export default List;  