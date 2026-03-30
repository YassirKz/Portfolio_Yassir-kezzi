import { Link } from 'react-router-dom';
let Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3 className="fw-bold mb-3">Yassir's Portfolio</h3>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br /><br /> Keep Rising 🚀. Connect with me over live chat!</p>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3 className="fw-bold mb-3">quick links</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i> home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i> about
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/skills" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i> skills
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/projects" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i> Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/education" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i> education
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3 className="fw-bold mb-3">contact info</h3>
            <p><i className="bi bi-telephone me-2"></i>+212 682486661</p>
            <p><i className="bi bi-envelope me-2"></i>kezziyassir005@gmail.com</p>
            <p><i className="bi bi-geo-alt me-2"></i>Rabat , Morocco - 10100</p>
            <div className="mt-3">
              <a href="https://www.linkedin.com/in/yassir-kezzi-530383283/" className="btn btn-outline-light rounded-circle me-2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/Yassir-kezzi" className="btn btn-outline-light rounded-circle me-2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              {/* <a className="btn btn-outline-light rounded-circle me-2" href="https://youtu.be/YXwURi1PgWM" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i>
              </a> */}
              <a href="mailto:kezziyassir005@gmail.com" className="btn btn-outline-light rounded-circle">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">Designed with <i className="bi bi-heart-fill text-danger"></i> by <a href="https://www.linkedin.com/in/yassir-kezzi-530383283/" className="text-primary text-decoration-none" rel="noopener noreferrer">Yassir-kezzi</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;