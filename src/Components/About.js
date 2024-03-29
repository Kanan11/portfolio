import React, { Component } from 'react';
// import { Blob } from 'react-blob'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      // var bio = this.props.data.bio;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      // var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var resumeDownload_sw = this.props.data.resumedownload_sw;
    }

    return (
      <section id="about">
         <div className="row about_media">
            <div className="three columns">
               {/* <Blob
               className="profile-pic"
               size="30vh"
               style={{
                  border: "3px solid orange",
                  top: '15%',
                  right: '35%',
                  zIndex: 0,
                  backgroundColor: '#eaeff5',
                  color: 'grey',
                  height: '380px',
                  opacity: 47.05,
                  fontSize: '3vh'
               }}
            >
                     </Blob> */}
                     <div className="profile-pic">
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                           <img
                              className="img"
                              src={profilepic}
                              alt="Kanan Garaisayev"
                              style={{marginBottom: '1rem', borderRadius: '55px', maxWidth: '210px'}}
                              />
                           <span>{name}</span>
                        </div>
                     </div>
            </div>
            <div className="nine columns main-col">
               {/* <h2>About Me</h2>

               <p>{bio}</p> */}
               <div className="row">
                  {/* <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{street}<br />
                              {city} {state}, {zip}
                     </span><br />
                        <span>{phone}</span><br />
                        <a href={`mailto:${email}`}>{email}</a>
                     </p>
                  </div> */}
               </div>
                  <div className="columns download">
                     <p style={{ display: 'flex', flexDirection: 'column'}}>
                        <a href={resumeDownload} className="button" rel="noreferrer" target="_blank"><i className="fa fa-download"></i>Download Resume in English</a>
                        <a href={resumeDownload_sw} className="button" rel="noreferrer" target="_blank"><i className="fa fa-download"></i>Download Resume in Swedish</a>
                     </p>
                  </div>
            </div>
         </div>
      </section>
    );
  }
}

export default About;
