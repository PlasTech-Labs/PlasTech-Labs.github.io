import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

import './styles.css';

const SendMail = (nombre, correo, asunto, mensaje ) => {
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'plastechlabs@gmail.com',
      pass: 'PlasTech2020'
    }
  });

  var mailOptions = {
    from: 'plastechlabs@gmail.com',
    to: 'plastechlabs@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Plastico</h1>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}
const Contact = (SendMail) => {
  return (
  
    <MDBContainer name="contact">
    <h2 className="h1-responsive font-weight-bold text-center my-5">
      CONTÁCTANOS
    </h2>
    <MDBRow>
      <MDBCol md="9" className="md-0 mb-5">
        <form onSubmit="SendMail">
          <MDBRow>
            <MDBCol md="6">
              <div className="md-form mb-0">
                <label>Nombre</label>
                <MDBInput
                  type="text" 
                  id="contact-name" 
                  name="nombre"/>
              </div>
            </MDBCol>
            <MDBCol md="6">
              <div className="md-form mb-0">
                <label>Email</label>
                <MDBInput
                  type="text"
                  id="contact-email"
                  name="correo"
                />
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              <div className="md-form mb-0">
                <label>Asunto</label>
                <MDBInput 
                  type="text" 
                  id="contact-subject" 
                  name="asunto" />
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              <div className="md-form mb-0">
                <label>Mensaje</label>
                <MDBInput
                  type="textarea"
                  id="contact-message"
                  name="mensaje"
                />
              </div>
            </MDBCol>
          </MDBRow>
        </form>
        <div className="text-center text-md-left sendButton">
          <MDBBtn color="success" size="md" type="submit" onSubmit="SendMail" className="sendButton">
            Enviar
          </MDBBtn>
        </div>
      </MDBCol>
      <MDBCol md="3" className="text-center">
        {/* <h4> PlasTech-Labs </h4> */}
        <br/>
        <div className="infoContactUs">
          <ul className="list-unstyled mb-0">
            <li>
              <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAB/klEQVQ4jY2Uv4oTURTGf2fyZ2EhD+DdpMlikiKF5EZREd1WkDQLNiII2+YRLGV9gSC+w8oiglgFXVC2iDOxURgLjRtDLCxlhSTOscmEyWQmm68733fOd869h3uFNbDWbotIC7gGKNBT1Veu656n1Ugab609BPaBMpCZ8/+Ab6p65Hne43mTCw2l0WgcA3dFZCul4URVX3uetx83zcQzrbVPgYdrzAAyIlI2xmyNx+O3qRNaa7eBT8DlkNvZ2aFarQLg+z6j0Sha8jWfz185PT39GxLZqBoEQctxnHIYF4tFOp0OxWIRgOFwSLvdjpqWJ5PJPeAoJJylcUWuE7mGarW6MAMolUpUKpVoSVZEbkSJuOE0GquuLBGRlT0u1SwZBkHgRWPf9xkOh4v47OwM3/dZVxNfyiXgI2BCzhhDrVZbNIgt5afjOFd7vd6vREOAZrP5TlXvxPkkqOqJ53l7Uc5JSDomdi8pmBDZbqphoVB4BnzZwPDz7u7u8zi58lIGg0FgjHGAPSCf5KSq58Bht9vtxbW0z4FGo/FBRG6myO9d171NwuewcuRFJ5ED4HuC9GM2mx0kmUHCkUOMx+PfxphARG4B4UfxB3jS7/ffpA6SJoSw1r4EWvPwheu699flZ9eJANPp9EEulzsREVXVRxflb4R6vV6q1+ulTXL/AwV9q37Xl2g6AAAAAElFTkSuQmCC"/> Guatemala, Guatemala</p>
            </li>
            <li>
              <p><img src="https://img.icons8.com/ios-filled/20/000000/important-mail.png"/> info@plastechlabs.com</p>
            </li>
            <li>
              <p><img src="https://img.icons8.com/material-rounded/20/000000/instagram-new.png"/> @plastechlabs</p>
            </li>
          </ul>
        </div>
      </MDBCol>
    </MDBRow>
      
    <div
          id="map-container"
          className="rounded z-depth-1-half map-container"
          style={{ height: "400px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9176436041416!2d-90.49143668584769!3d14.603767180915858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3a991475f6f%3A0x3ded42e1475475f0!2sUniversidad%20del%20Valle%20de%20Guatemala!5e0!3m2!1ses!2sgt!4v1597182881291!5m2!1ses!2sgt"
            title="This is a unique title"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
          />
    </div>
      </MDBContainer>
  );
}

export default Contact;