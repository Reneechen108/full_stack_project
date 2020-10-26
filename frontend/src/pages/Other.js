import React, { Component } from 'react'

export default class Other extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, InputGroup, FormControl, Container, Row, Col, Card} from 'react-bootstrap';
// import { AiOutlineSearch } from 'react-icons/ai';
// import img12 from "../images/room-12.jpeg";
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class Other extends Component {
//   render() {
//     return (
//         <>
//         <header className ="Header">
//             <div className = "left-link-panel">
//                 <Link to="/buy" className = "header-link header-link-text">Buy</Link>
//                 <Link to="/rent" className = "header-link header-link-text">Rent</Link>
//                 <Link to="/sell" className = "header-link header-link-text">Sell</Link>
//                 <Link to="/home_loans" className = "header-link header-link-text">Home Loans</Link>
//                 <Link to="/agent_finder" className = "header-link header-link-text">Agent finder</Link>
//             </div>

//             <Link to= "/" className = "header-link" ><h1 className = "logo-text">Zillow</h1></Link>

//             <div className = "right-link-panel">
//                 <Link to="/manage_rentals" className = "header-link header-link-text">Manage Rantals</Link>
//                 <Link to="/advertise" className = "header-link header-link-text">Advertise</Link>
//                 <Link to="/help" className = "header-link header-link-text">Help</Link>
//                 <Link to="/sign_in" className = "header-link header-link-text">Sign in</Link>
//                 <Link to="/sign_in" className = "header-link header-link-text">Sign up</Link>
//             </div>
//         </header>
//         <div className="HomeList-grid-container">
//             <Container>
//                 <Row>
//                     <Col className="w-25">
//                     <InputGroup className="mb-3">
//                         <FormControl
//                         placeholder="Search for home"
//                         aria-label="Search for home"
//                         aria-describedby="basic-addon2"
//                         />
//                         <InputGroup.Append>
//                         <Button variant="outline-secondary"><AiOutlineSearch /></Button>
//                         </InputGroup.Append>
//                     </InputGroup>
//                     </Col>
//                     <Col md="auto">
//                         <Button className="mb-3" href="#">For Sale</Button>{' '}
//                         <Button className="mb-3" href="#">Price</Button>{' '}
//                         <Button className="mb-3" href="#">Beds & Baths</Button>{' '}
//                         <Button className="mb-3" href="#">Hometype</Button>
//                     </Col>
//                 </Row>
//             </Container>
//             <Container>
//                 <Row>
//                     <Col>
//                         <Map google={this.props.google} zoom={14} style={mapStyles}>
//                             <Marker onClick={this.onMarkerClick}
//                                     name={'Current location'} />

//                             <InfoWindow onClose={this.onInfoWindowClose}>
                    
//                             </InfoWindow>
//                         </Map>
//                     </Col>
//                     <Col>
//                         <Card style={{ width: '30rem' }}>
//                             <Card.Img variant="top" src={img12} />
//                             <Card.Body>
//                                 <Card.Title>$25,000,000</Card.Title>
//                                 <p>4 bd | 6.5 ba| 10,725 Square Feet</p>
//                                 <Card.Text>
//                                 190 Sea Cliff Ave, San Francisco, CA 94121
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>        
//         </div>
//         </>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAqIaWLvlgmCmVVsE0aSXFuU2XZ-N0YXbI'
// })(Other);