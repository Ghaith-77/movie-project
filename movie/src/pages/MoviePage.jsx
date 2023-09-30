import Navbar from "../compontent/navbar";
import { Link } from "react-router-dom";
function MoviePage() {
  return (
    <>
      <Navbar />
      <div
        className="container mt-5 p-1"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f9f7f9",
        }}
      >
        <div className="fathimgforinfo">
          <img src="../../public/assets/img/logo.png" alt="" />
        </div>
        <div className="info col-8">
          <span className="MovieName">MovieName is : </span>
          <span className="Release Date">Release Date is : </span>
          <span className="Number of residents">Number of residents is : </span>
          <span className="Evaluation">Evaluation is : </span>
        </div>
      </div>
      <div
        className="container my-3 p-5"
        style={{ backgroundColor: "#f9f7f9" }}
      >
        <div className="titleforstory">
          <h1>The Story</h1>
        </div>
        <div className="story">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima
            reiciendis quisquam ullam dignissimos. A?
          </p>
        </div>
      </div>
      <div className="footer d-flex align-items-center justify-content-center">
        <button className="downloedbtn mx-3 mb-3">
          <Link to="/" className="link">
            Downloed It
          </Link>{" "}
        </button>
        <button className="backbtn mb-3">
          <Link to="/" className="link">
            Go To Home Page
          </Link>{" "}
        </button>
      </div>
    </>
  );
}

export default MoviePage;
