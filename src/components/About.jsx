let About = () => {

    let calculateAge = () => {
        let birthDate = new Date(2005, 6, 15); 
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <section id="about" className="py-5 bg-white">
            <div className="container">
                <h2 className="text-center display-6 fw-bold mb-5">
                <i className="bi bi-person me-2"></i> About <span className="text-primary">Me</span>
                </h2>
                
                <div className="row align-items-center">
                <div className="col-lg-5 text-center mb-4 mb-lg-0">
                    <img src="/images/personal-img.jpg" className="img-fluid rounded shadow" style={{ maxWidth: '50%' }} alt="" />
                </div>
                <div className="col-lg-7 description">
                    <h3 className="fw-bold mb-3">I'm Yassir</h3>
                    <span className="d-block fs-5 text-primary fw-bold mb-4">Full-Stack developer</span>
                    
                    <p className="mb-4">
                    I am a Full-Stack developer based in rabat, Morocco. 
                    I am a student in Information Technology so far from Ntic Rabat 
                    (Institute specializes in external professions and new information technologies Rabat).
                    I am very passionate about improving my coding skills & developing websites.
                    I like to code things from scratch, and enjoy bringing ideas to life in the browser.  
                    </p>
                    
                    <div className="row mb-4">
                    <div className="col-md-6">
                        <p><span className="fw-bold">Email : </span> kezziyassir005@gmail.com</p>
                        <p><span className="fw-bold">Place : </span> Rabat , Morocco - 10100</p>
                    </div>
                    <div className="col-md-6">
                        <p><span className="fw-bold">Phone : </span> +212682486661</p>
                        <p><span className="fw-bold">Age: </span> {calculateAge()}</p>
                    </div>
                    </div>
                    <a href="/Pdf/CV_Yassir_Kezzi.pdf" target="blank" className="btn btn-primary btn-lg px-4">
                    <span className="fw-bold">Resume</span>
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
}

export default About;