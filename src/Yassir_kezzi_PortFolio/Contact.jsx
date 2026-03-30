let Contact = () => {
  return (
    <section id="contact" className="py-5 bg-primary bg-gradient">
      <div className="container">
        <h2 className="text-center display-6 fw-bold text-white mb-5">
          <i className="bi bi-headset me-2"></i> Get in <span className="text-dark">Touch</span>
        </h2>
        
        <div className="card shadow-lg">
          <div className="row g-0">
            <div className="col-lg-6 d-none d-lg-block">
              <img src="/images/contact1.png" className="img-fluid h-100 rounded-start" alt="Contact" />
            </div>
            <div className="col-lg-6">
              <div className="card-body p-5">
                <form>
                  <div className="mb-3 position-relative">
                    <i className="bi bi-person position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                    <input type="text" className="form-control ps-5" placeholder="Name" required />
                  </div>
                  <div className="mb-3 position-relative">
                    <i className="bi bi-envelope position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                    <input type="email" className="form-control ps-5" placeholder="Email" required />
                  </div>
                  <div className="mb-3 position-relative">
                    <i className="bi bi-telephone position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                    <input type="tel" className="form-control ps-5" placeholder="Phone" />
                  </div>
                  <div className="mb-4 position-relative">
                    <i className="bi bi-chat-dots position-absolute start-0 translate-middle-y ms-3" style={{ top: '20%' }}></i>
                    <textarea className="form-control ps-5" rows="4" placeholder="Message" required></textarea>
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary btn-lg px-4">
                      <span className="fw-bold me-2">Submit</span>
                      <i className="bi bi-send"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;