import React from 'react'

const ContactForm = () => {
  return (
    <section id="contact" className="contact container section">
      <h2
        className={`text-[#141824] flex justify-center font-Montserrat font-semibold text-4xl py-10`}
      >
        CONTACT
      </h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title font-semibold text-[16px]">
          Get Easy NAAC
          </h3>
          <p>We build your Empire.Through the Easy path ,We takes you to the Zenith.</p>
         
        </div>
        <form
          action="https://formspree.io/f/xrgwpkya"
          method="POST"
          className="contact_form"
        >
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Enter your name"
                required
                autoComplete="off"
                min={10}
                name="name"
              />
            </div>
            <div className="contact_form-div">
              <input
                type="number"
                className="contact_form-input"
                placeholder="Enter your phone number"
                required
                autoComplete="off"
                name="number"
              />
            </div>
          </div>

          <div className="contact_form-div">
            <input
              type="text"
              className="contact_form-input"
              placeholder="Enter your email"
              required
              autoComplete="off"
              name="email"
            />
          </div>

          <div className="contact_form-div contact_form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact_form-input"
              placeholder="Message (Your Requirements in brief)"
              required
              autoComplete="off"
              min="5"
            ></textarea>
          </div>
          <button className="bg-green-600 px-5 py-2 rounded-[10px] text-white hover:bg-green-500">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm