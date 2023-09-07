import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><a href={education.url} title={education.url} target="_blank" rel="noreferrer"><h3 className='hover'>{education.school}</h3></a>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><a href={work.url} title={work.url} target="_blank" rel="noreferrer"><h3 className='hover' target="_blank">{work.company}</h3></a>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level, /* backgroundColor: 'rgb(104, 133, 167)' */ }}className={className}></span><em>{skills.name}</em></li>
      })
      var language = this.props.data.language.map(function(language){
        var className = 'bar-expand '+language.name.toLowerCase();
        return <li key={language.name}><span style={{width:language.level, /* backgroundColor: 'coral' */}}className={className}></span><em>{language.name}</em></li>
      })
    }

    return (
        <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Languages</span></h1>
         </div>

         <div className="nine columns main-col">

            <div className="bars">
				   <ul className="skills">
					  {language}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
}
}

export default Resume;
