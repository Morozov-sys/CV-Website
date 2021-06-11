import React,{useState} from 'react'
import '../../App.css'
import Button from '../Button'
import './SignUp.scss'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
      <div className="body">
      <div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label htmlFor="name" class="form__label">Name</label>
</div>
<div class="form__group field">
  <input type="input" class="form__field" placeholder="Email" name="email" id='email' required />
  <label htmlFor="email" class="form__label">Email</label>
</div>
<div class="form__group field">
  <textarea type="text" class="form__field" placeholder="Message" name="message" id='message' required />
  <label htmlFor="message" class="form__label">Message</label>
</div>
<Button type="submit" buttonStyle='btn--outline'>{status}</Button>
    </div>
  );
};

export default ContactForm;