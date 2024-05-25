import React from "react";
import pizzaimg from "../assets/icon.webp";

const Blog = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/black-brick-wall-surface-texture_23-2151262412.jpg?t=st=1716615463~exp=1716619063~hmac=60b580e95d081072bf330d0fba023edbdcbe8e4ab39fa2b12510310a03292e7d&w=1060)",
        backgroundPosition: "start",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-light p-4">
        <span
          style={{
            backgroundColor: "rgb(136 114 98)",
            width: "260px",
            height: "auto",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginBlock: "25px",
            borderRight: "25px solid rgb(102 81 66)",
          }}
        >
          <img src={pizzaimg} alt="" width={"auto"} height={"auto"} />
          &nbsp;
          <h3
            style={{
              color: "white",
              fontSize: "36px",
            }}
          >
            BLOG
          </h3>
        </span>

        <div
          className="p-lg-5 "
          style={{ backgroundColor: "rgb(0 0 0 / 60%)" }}
        >
          <div className="d-flex align-items-center justify-content-center text-wrap text-center flex-col p-3">
            <div className="mt-3">
              <h1>
                NEW TASTE OF ITALIAN PIZZA IN <br />
                TASTY SLICE
              </h1>
            </div>
            <span className="my-3">
              <div className="btn btn-sm btn-danger"> NEW STORE </div>
              <div className="btn btn-sm btn-danger mx-2">PIZZA</div>
            </span>

            <div class="card my-3 text-center">
              <img
                src="https://max-themes.net/demos/steweys/upload/new-pizza2.jpg"
                alt=""
                className="w-100"
              />
              <div class="card-footer text-light bg-danger p-lg-3 d-flex justify-content-around text-wrap">
                <span>
                  <i class="fa-regular fa-calendar "></i> &nbsp; March 15, 2024
                </span>
                <span>
                  <i class="fa-regular fa-user "></i> &nbsp; Ronny
                </span>
                <span>
                  <i class="fa-regular fa-comments "></i> &nbsp; 2 Comments
                </span>
              </div>
            </div>
            <div className="my-3 text-wrap text-start px-lg-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
                luctus justo. Nulla sed iaculis ipsum. Mauris non leo posuere,
                convallis ligula sit amet, ornare sem. Curabitur suscipit erat
                sit amet erat viverra, nec cursus lacus commodo. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Etiam a luctus
                justo. Nulla sed iaculis ipsum. Mauris non leo posuere,
                convallis ligula sit amet, ornare sem. Curabitur suscipit erat
                sit amet erat viverra, nec cursus lacus commodo. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Etiam a luctus
                justo. Nulla sed iaculis ipsum. Mauris non leo posuere,
                convallis ligula sit amet, ornare sem. Curabitur suscipit erat
                sit amet erat viverra, nec cursus lacus commodo.
              </p>
            </div>
            <span className="my-3">
              <div className="btn btn-dark btn-sm p-3 rounded-0 ">
                READ MORE
              </div>
            </span>
          </div>
          <span className="d-flex align-items-center justify-content-evenly flex-row my-5">
            <hr className="border border-light opacity-25 w-25 " />
            <img
              src="https://max-themes.net/demos/steweys/images/separator.png"
              alt=""
              className="w-25"
            />
            <hr className="border border-light opacity-25 w-25" />
          </span>

          <div className="d-flex align-items-center justify-content-center text-wrap text-center flex-col p-3">
            <div className="mt-3">
              <h1>
                WE ARE OPENING NEW FRANCHISE <br /> IN PAN INDIA
              </h1>
            </div>
            <span className="my-3">
              <div className="btn btn-sm btn-danger"> NEW STORE</div>
            </span>

            <div class="card my-3 text-center">
              <img
                src="https://max-themes.net/demos/steweys/upload/new-pizza-restaurant3.jpg"
                alt=""
                className="w-100"
              />
              <div class="card-footer text-light bg-danger p-lg-3 d-flex justify-content-around">
                <span>
                  <i class="fa-regular fa-calendar "></i> &nbsp; April 5, 2024
                </span>
                <span>
                  <i class="fa-regular fa-user "></i> &nbsp; Soraj
                </span>
                <span>
                  <i class="fa-regular fa-comments "></i> &nbsp; 5 Comments
                </span>
              </div>
            </div>
            <div className="my-3 text-wrap text-start px-lg-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
                luctus justo. Nulla sed iaculis ipsum. Mauris non leo posuere,
                convallis ligula sit amet, ornare sem. Curabitur suscipit erat
                sit amet erat viverra, nec cursus lacus commodo. Integer velit
                purus, sagittis hendrerit egestas nec, venenatis a leo.
                Phasellus quis urna sit amet risus euismod volutpat. Proin lorem
                lorem, ultricies quis molestie viverra, luctus vel lacus. Etiam
                dolor diam, dapibus a malesuada quis, viverra ac elit. Integer
                mattis feugiat ex. Sed fringilla arcu et risus volutpat
                ultricies. Ut quis risus finibus, congue diam in, imperdiet
                urna. Nunc egestas dui eget nisl molestie euismod nec et sapien.
                Pellentesque venenatis pretium ligula vel tristique. Nam
                molestie porta mi nec condimentum. Duis scelerisque, lectus eu
                ullamcorper tempor, sem libero consequat tellus, et tempus est
                augue id risus. Sed vitae ligula eget enim bibendum congue.{" "}
                <br />
                <br />
                Sed vel pharetra leo. Ut tincidunt purus ac pretium malesuada.
                Suspendisse turpis felis, convallis quis suscipit ac, laoreet
                non justo. Sed molestie tellus nec nulla ultrices mollis. Etiam
                auctor, justo at pellentesque posuere, mi sem maximus massa,
                eget tincidunt magna tortor vel nisl. Suspendisse rhoncus
                commodo nunc, ultrices consequat tellus. Integer maximus risus
                sed varius elementum. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Sed quam eros,
                sollicitudin et aliquet interdum, porta et mi.
              </p>
            </div>
            <span className="my-3">
              <div className="btn btn-dark btn-sm p-3 rounded-0 ">
                READ MORE
              </div>
            </span>
          </div>
          <span className="d-flex align-items-center justify-content-evenly flex-row py-5">
            <hr className="border border-light opacity-25 w-25 " />
            <img
              src="https://max-themes.net/demos/steweys/images/separator.png"
              alt=""
              className="w-25"
            />
            <hr className="border border-light opacity-25 w-25" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
