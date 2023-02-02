import React, { useState } from 'react';

function SendEmailForm() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleSubmit = () => {
    const emailBody = `Name: ${contactName}\nEmail: ${contactEmail}\nSubject: ${contactSubject}\nMessage: ${contactMessage}`;

    window.location.href = `mailto:${contactEmail}?subject=${contactSubject}&body=${emailBody}`;

};

  return (
    <form>
      <input
        type="text"
        id="contactName"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
      />
      <input
        type="email"
        id="contactEmail"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
      />
      <input
        type="text"
        id="contactSubject"
        value={contactSubject}
        onChange={(e) => setContactSubject(e.target.value)}
      />
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
