import React, { useState } from 'react';

function SendEmailForm() {
  const [contactName, setContactName] = useState('Sander name ');
  const [contactEmail, setContactEmail] = useState('kenan@luxar.se');
  const [contactSubject, setContactSubject] = useState('I want to be in touch with you! ');
  const [contactMessage, setContactMessage] = useState('Text to send ');
    function sended () {

        console.log("Submitted");
        
    }
  const handleSubmit = () => {
    const emailBody = `Name: ${contactName}\nEmail: ${contactEmail}\nSubject: ${contactSubject}\nMessage: ${contactMessage}`;

    window.location.href = `mailto:${contactEmail}?subject=${contactSubject}&body=${emailBody}`;
    sended();
};

  return (
    <form>
    <label htmlFor="contactName">Name <span className="required">*</span></label>
      <input
        type="text"
        id="contactName"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
      />
      <label htmlFor="contactEmail">Email <span className="required">*</span></label>
      <input
        //value={contactEmail}
        placeholder='Please enter a valid email to keep in touch'
        type="email"
        id="contactEmail"
        onChange={(e) => setContactEmail(contactEmail)}
      />
      <label htmlFor="contactSubject">Subject</label>
      <input
        type="text"
        id="contactSubject"
        value={contactSubject}
        onChange={(e) => setContactSubject(e.target.value)}
      />
      <label htmlFor="contactMessage">Message <span className="required">*</span></label>
      <textarea
        id="contactMessage"
        value={contactMessage}
        onChange={(e) => setContactMessage(e.target.value)}
      />
      <button className="submit" onClick={handleSubmit}>
        Send mail to Kanan
      </button>
    </form>
  );
}

export default SendEmailForm;
