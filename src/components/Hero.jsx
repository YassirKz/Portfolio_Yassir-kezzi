import { Link } from 'react-router-dom';
let Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center min-vh-100 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <h1 className="display-6 fw-bold mb-3">
              Hi There,<br /> I'm Yassir <span className="text-primary">Kezzi</span>
            </h1>
            <p className="fs-3 mb-4">
              I'm a <span className="text-primary fw-bold">Full-Stack developer</span>
            </p>
            <Link to="/about" className="btn btn-primary btn-lg px-4 py-3 mb-5">
              <span className="fw-bold me-2">About Me</span>
              <i className="bi bi-arrow-down-circle"></i>
            </Link>
            <div className="social-icons mt-5">
              <a className="btn btn-dark rounded-circle me-2" href="https://www.linkedin.com/in/yassir-kezzi-530383283/" target="_blank" >
                <i className="bi bi-linkedin"></i>
              </a>
              <a className="btn btn-dark rounded-circle me-2" href="https://github.com/Yassir-kezzi" target="_blank" >
                <i className="bi bi-github"></i>
              </a>
              {/* <a className="btn btn-dark rounded-circle" href="https://youtu.be/YXwURi1PgWM" target="_blank" > */}
                {/* <i className="bi bi-youtube"></i> */}
              {/* </a> */}
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 text-center mb-5 mb-lg-0">
            <img src="/images/OFF-img.png" className="img-fluid rounded-circle shadow" alt="Yassir's image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;