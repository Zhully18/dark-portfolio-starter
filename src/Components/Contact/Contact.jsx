import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <div className="contact-form" id="contact">
            <h2>Contact Me</h2>
            <p>Please fill thsi form to book my services</p>
            <form action="#">
                <div>
                    <label htmlFor="firstName"> Full Name</label>
                    <div className="names">
                        <input type="text" name="firstName" id="firstName" placeholder='First Name' required/>
                        <input type="text" name="lastName" id="lastName" placeholder='Last Name' />
                    </div>
                </div>
                <div>
                    <label htmlFor="email">Enail *</label>
                    <input type="email" name="email" id="email" placeholder='example@example.com' required />
                </div>
                <div>
                    <label htmlFor="message"> Message *</label>
                    <textarea name="message" id="message" reuired></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact