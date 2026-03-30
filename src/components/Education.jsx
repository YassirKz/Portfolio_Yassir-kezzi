const educationData = [
  {
    title: 'Web und app Development',
    institution: 'Institute of New Technologies Information and Communication | NTIC',
    years: '2024-to date | Pursuing',
    img: '/images/Ntic rabat.jpg',
  },
  {
    title: 'Rheinland Privatschule-Rheinland Institut',
    institution: 'Institute for German Courses | RP_deutschland',
    years: '2023-2024 | Completed',
    img: '/images/RP.jpg',
  },
  {
    title: 'High school diploma of physics sciences',
    institution: 'Charif el Idrissi High School | CEIHS',
    years: '2020-2023 | Completed',
    img: '/images/Charif el idrissi.jpg',
  },
];

let Education = () => {
  return (
    <section id="education" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-4">
          <i className="bi bi-mortarboard me-2"></i> My <span className="text-primary">Education</span>
        </h2>
        <p className="text-center fs-5 mb-5">Education is not the learning of facts, but the training of the mind to think.</p>
        
        <div className="row justify-content-center"> 
          <div className="col-12 col-lg-8" style={{ width: '500px' }}>
            {educationData.map((edu, index) => (
              <div className="card mb-4 shadow-sm education-card" key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={edu.img} className="img-fluid rounded-start h-100 w-100 object-fit-cover" alt={edu.institution} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-3 p-md-4">
                      <h3 className="card-title fw-bold text-primary h5 h4-md">{edu.title}</h3>
                      <p className="card-text mb-2">{edu.institution}</p>
                      <h4 className="text-success h6 h5-md">{edu.years}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;