import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("yahoo", "template_xhx5dsi", e.target, "user_KqZoKJsgDW9eoJcs43zPJ").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();

    // const tym = document.getElementById("thankYouMsg");
    // const tym2 = document.getElementById("thankYouMsg2");
    // const haveAQuestion = document.getElementById("haveAQuestion");
    // const checkMark = document.getElementById("checkMark");

    // tym.innerHTML = "Thank You!";
    // tym2.innerHTML = "Your submission has been sent!";
    // haveAQuestion.style.display = "none";
    // checkMark.classList = "far fa-check-square fa-5x";
  }

  return (
    <div className="content">
      <h1 className="text-center header shake-horizontal">
        Have a question? Get in touch with us!
      </h1>

      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              name="number"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Add your message here"
              name="message"
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className="btn btn-dark"
              value="Send Message"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
