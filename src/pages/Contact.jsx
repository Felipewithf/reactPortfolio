
import { useState } from 'react';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

const handleChange = (event) => {
  
  setErrorMessage('');
  const { target } = event;
  const inputType = target.name;
  const inputValue = target.value;


  switch (inputType) {
    case 'name':
      setName(inputValue);
      break;
      case 'email':
        setEmail(inputValue);
      break;
      case 'message':
        setMessage(inputValue);
      break;
    default:
      break;
  }
}

const handleSubmit = (event) => {
  event.preventDefault();

  if (!message || !name || !email) {
    setErrorMessage('Please fill all the fields');
    return;
  }
  // clear out the input after a successful registration.
  setName('');
  setMessage('');
  setEmail('');

  setSuccessMessage('Message Delivered!');

  setTimeout(()=>{
    setSuccessMessage('');
}, 2000)

  
};

  return (
    <section>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group py-3">
    <label htmlFor="InputName">Name</label>
    <input type="text" className="form-control" id="InputName" name="name" onChange={handleChange} value={name} placeholder=""/>
  </div>
  <div className="form-group py-3">
    <label htmlFor="InputEmail">Email address</label>
    <input type="email" className="form-control" id="InputEmail" name="email" onChange={handleChange} value={email} aria-describedby="emailHelp" placeholder=""/>
    <small id="emailHelp" className="form-text text-muted">Will never share your email with anyone else.</small>
  </div>
  <div className="form-group py-3">
  <label htmlFor="message">Message</label>
    <textarea className="form-control" id="message" name="message" onChange={handleChange} value={message} rows="5"></textarea>
  </div>

  {errorMessage && (
        <div>
          <p className="alert alert-danger">{errorMessage}</p>
        </div>
      )}
 
  {successMessage && (
        <div>
          <p className="alert alert-success">{successMessage}</p>
        </div>
      )}

  <button type="submit" className="btn btn-primary mt-5">Submit</button>
</form>



    </section>
  );
}
