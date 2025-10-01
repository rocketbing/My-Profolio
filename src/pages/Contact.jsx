import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' })
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    const namePattern = /^[A-Za-z'-]{1,}$/
    if (!emailPattern.test(form.email) || !namePattern.test(form.firstName) || !namePattern.test(form.lastName)) {
      alert('Please enter a valid email address')
      return
    }
  }
  return (
    <section>
      <div className="container text-center pt-5">
        <h1 className="contactContent">CONTACT</h1>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 d-flex">
            <div className="me-2">📍</div>
            <div>
              <h6>MY HOME ADDRESS</h6>
              <p>80 Kings College Road, Thornhill, Ontario</p>
            </div>
          </div>
          <hr className="d-lg-none d-block" />
          <div className="col-lg-3 d-flex">
            <div className="me-2">📞</div>
            <div>
              <h6>CALL ME</h6>
              <p><a href="tel:+16478320588">+1 (647) 832-0588</a></p>
            </div>
          </div>
          <hr className="d-lg-none d-block" />
          <div className="col-lg-3 d-flex">
            <div className="me-2">✉️</div>
            <div>
              <h6>EMAIL ME</h6>
              <p><a href="mailto:torontobing@hotmail.com">torontobing@hotmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5 text-center">
        <h3>SEND A MESSAGE</h3>
        <h4>Leave your contact information, I will get in touch with you ASAP!!</h4>
        <form onSubmit={onSubmit} id="contactForm">
          <div className="row mb-3 mt-3 justify-content-center">
            <div className="col-md-3 mb-2">
              <input type="text" className="form-control" placeholder="First name" name="firstName" required value={form.firstName} onChange={onChange} />
            </div>
            <div className="col-md-3 mb-2">
              <input type="text" className="form-control" placeholder="Last name" name="lastName" required value={form.lastName} onChange={onChange} />
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Email address" name="email" required value={form.email} onChange={onChange} />
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Subject" name="subject" value={form.subject} onChange={onChange} />
            </div>
          </div>
          <div className="row mb-4 justify-content-center">
            <div className="col-md-6">
              <textarea className="form-control" name="message" rows="3" placeholder="Your message." value={form.message} onChange={onChange}></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-dark mb-5">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  )
}


