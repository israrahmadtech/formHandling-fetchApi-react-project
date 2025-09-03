import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [error, setError] = useState("")
  const users = JSON.parse(localStorage.getItem("users")) || []
  
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      subjact: form.subject.value,
      priority: form.priority.value,
      message: form.message.value
    }
    
    setError("")
    if (!formData.firstName || !formData.lastName || !formData.subjact || !formData.priority || !formData.message) {
      setError("Please fill all fields correctly!")
      return
    }
      console.log(formData);
      users.push(formData)
      localStorage.setItem("users", JSON.stringify(users))
      form.reset()
  }

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-form">
          <form action="" onSubmit={handleSubmit} >
            <div className="input-group">
              <input type="text" placeholder="First Name" name="firstName" />
              <input type="text" placeholder="Last Name" name="lastName" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Subject" name="subject" />
              <select name="priority" id="priority">
                <option disabled style={{ color: "#bbb" }}>Priority</option>
                <option value="A" id="priority">A</option>
                <option value="B" id="priority">B</option>
                <option value="C" id="priority">C</option>
              </select>
            </div>
            <textarea name="message" id="message" rows={8} placeholder="Type your message here..."></textarea>
            {error && <p className="error">{error}</p>}
            <button style={!error ? {marginTop: "20px"} : {marginTop: "0px"}}>Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-card">
            <h3>Company Email/Phone</h3>
            <p>israrahmadtech@gmail.com <br /> +92 3358335803</p>
          </div>
          <div className="info-card">
            <h3>Company Address</h3>
            <p>Bara Khyber Agency KPK Peshawar Pakistan <br /> Speen Qabar Bachi Nihar</p>
          </div>
          <p>Opening Hours: <span>7AM - 9PM</span> Everyday</p>
        </div>
      </div>
    </section>
  )
}

export default Contact