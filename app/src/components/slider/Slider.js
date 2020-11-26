import React from 'react';
import { MOCK_GET_DATA_RESPONSE } from './MockData';
import './Slider.css';

const TMP_IMAGE = 'tmp@emial.com.png'

class Slider extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         tableData: []
      };
   }

   initEngineEngineScript() {
      const script = document.createElement("script");
      script.src = `${process.env.PUBLIC_URL}/engine.js`;
      script.type = 'text/javascript';
      document.body.appendChild(script);
   }

   extractAndCheckDataCount(requestResponse) {
      return requestResponse.data.map(patient => patient.attributes);
   }

   componentDidMount() {
      this.initEngineEngineScript();
      // REST GET should be here
      this.setState({ tableData: this.extractAndCheckDataCount(MOCK_GET_DATA_RESPONSE) });
   }

   render() {
      const cards = this.state.tableData.map((patient, idx) => (
         <div className="card" id={patient.id} key={idx}>
            <div className="image-container"
               style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${TMP_IMAGE})` }}></div>
            <div>
               <p>First Name</p>
               <p className="content-value">{patient.first_name}</p>
               <p>Last Name</p>
               <p className="content-value">{patient.last_name}</p>
               <p>E-mail</p>
               <p className="content-value">{patient.email}</p>
               <p>Birth Date</p>
               <p className="content-value">{patient.birthdate}</p>
               <p>Sex</p>
               <p className="content-value">{patient.sex}</p>
            </div>
         </div>
      ));

      return (
         <div>
            <h1>Drag the cards to move them</h1>

            <div className="container">
               <div className="card-carousel">
                  {cards}
               </div>
            </div>
         </div>
      )
   }
}

export default Slider;


