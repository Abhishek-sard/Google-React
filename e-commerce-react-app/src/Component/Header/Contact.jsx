import "../Stylesheet/contact.css";
function Contact() {
  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <p class="contact-description">
        Have any questions or feedback? We would love to hear from you! <br />
        Please fill out the form below or reach out to us directly.
      </p>
      <div className="contact-container">
        <div class="contact-info">
          <h3>Our Information</h3>
          <p>
            <strong>Address:</strong> 123 Book Haven Lane, sunsari, Nepal
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@bookhaven.com">info@bookhaven.com</a>
          </p>
          <p>
            <strong>Phone:</strong> +977-9811342113
          </p>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
