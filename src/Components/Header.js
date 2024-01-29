import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var description2= this.props.data.description2;
      var text= this.props.data.text;
      var textTwo= this.props.data.textTwo;
      // var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home" style={{ maxHeight: '700px' }}>

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
           {/*  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Recommendations</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h2 className="responsive-headline">I'm <span style={{color: "#6885a7"}}>{name}</span></h2>
            <span style={{ fontFamily: 'Courier New' }}>{textTwo}</span> 
            <span className='letter' style={{ fontWeight: 'bold', fontFamily: 'Courier New' }}>{occupation}</span>
            <span style={{ fontFamily: 'Courier New' }}>{text}</span>
            <br/><br/>
            <span className="truncated-text" style={{ fontFamily: 'Courier New' }}>{description}</span>
            <br/><br/>
            <span className="truncated-text" style={{ fontFamily: 'Courier New' }}>{description2}</span>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
