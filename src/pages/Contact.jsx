import React from "react";
import pizzaimg from "../assets/icon.webp";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1301945/pexels-photo-1301945.jpeg?auto=compress&cs=tinysrgb&w=600)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container p-4">
        <span
          style={{
            backgroundColor: "rgb(254 170 170)",
            width: "280px",
            height: "auto",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginBlock: "25px",
            borderRight: "23px solid rgb(250 110 110)",
          }}
        >
          <img src={pizzaimg} alt="" width={"auto"} height={"auto"} />
          &nbsp;
          <h3
            style={{
              color: "white",
              fontSize: "34px",
            }}
          >
            CONTACT
          </h3>
        </span>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.6249240114307!2d75.90388267542525!3d30.89715197450544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9cd61ca529b5%3A0x76120156d0000000!2sTasty%20Slices!5e0!3m2!1sen!2sin!4v1716016756381!5m2!1sen!2sin"
          width="100%"
          height="480"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div
          className="p-4 text-center"
          style={{ background: "rgb(254 230 230/80%)" }}
        >
          <div className="d-flex align-items-center justify-content-center flex-wrap pb-3">
            <span
              className=" btn btn-danger border rounded-pill transition"
              style={{
                width: "270px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginBlock: "25px",
              }}
            >
              <i className="fa-solid fa-phone-flip fa-xl"></i>
              <h3
                className="font"
                style={{
                  fontSize: "28px",
                  marginLeft: "12px",
                }}
              >
                Order Now <br />
                716-950-3621
              </h3>
            </span>
          </div>

          <div className="d-flex align-items-start justify-content-around text-center flex-wrap">
            <div>
              <h4 className="mb-4">ADDRESS</h4>
              <h6 className="my-3">
                <i class="fa-solid fa-location-dot"></i>
                &nbsp; Vijay Nagar Indore, MP{" "}
              </h6>
              <p>
                <i class="fa-solid fa-globe"></i>
                &nbsp; www.yourdomain.com
                <br />
                <i class="fa-solid fa-at"></i>
                &nbsp; info@yourdomain.com
              </p>
            </div>
            <div>
              <h4 className="mb-4">OPENING HOURS</h4>
              <h6 className="my-3">
                <i class="fa-solid fa-calendar-days"></i>
                &nbsp; Monday – Friday <br />
                <strong className="text-secondary">8am – 11pm</strong>
              </h6>
              <h6 className="my-3">
                <i class="fa-solid fa-calendar-day"></i>
                &nbsp; Saturday <br />
                <strong className="text-secondary">8am – 1am</strong>
              </h6>
              <h6 className="my-3 text-danger">
                <i class="fa-solid fa-calendar-xmark"></i>
                &nbsp;Sunday (Closed)
              </h6>
            </div>
            <div>
              <h4 className="mb-4">CONTACT FORM</h4>
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control rounded-0 bg-secondary text-light"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control rounded-0 bg-secondary text-light my-2"
                />
                <textarea
                  name="text"
                  id="text"
                  cols="30"
                  rows="8"
                  placeholder="Message"
                  className="form-control rounded-0 bg-secondary text-light my-2"
                ></textarea>
                <button className="btn btn-danger w-100">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
