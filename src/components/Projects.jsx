const projectsData = [
  {
    // Projet 1 : USD Converter
    image: '/images/ConverterAppImg.png',
    title: 'USD ↔ MAD converter',
    description: 'A fully responsive Conversion USD ↔ MAD platform built with html , css , bootstrap and JavaScript',
    techs: ['html', 'JavaScript', 'css', 'Bootstrap'],
    liveLink: '',
    codeLink: 'https://github.com/Yassir-kezzi/USD-MAD-converter'
  },
  {
    // Projet 2 :  Quiz Academy
    image: '/images/QuizAppImg.png', 
    title: 'quizAcademy',
    description: 'A dynamic PHP web quiz app that loads questions and answers based on the specified topic using a phpMyAdmin database.',
    techs: ['Php', 'css', 'phpMyAdmin'],
    liveLink: '#', 
    codeLink: 'https://github.com/Yassir-kezzi/quizAcademy' 
  },
];

let Projects = () => {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-5">
          <i className="bi bi-code-square me-2"></i> My <span className="text-primary">Projects</span>
        </h2>
        <div className="row g-4 d-flex justify-content-center">
          {projectsData.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card project-card h-100 border-0 shadow">
  
                <img 
                  src={project.image} 
                  className="card-img-top" 
                  alt={project.title} 
                />
                
                <div className="card-body">
                  <h3 className="card-title fw-bold">{project.title}</h3>
                  <p className="card-text">{project.description}</p> 
                  <div className="tech-used mb-3">
                    {project.techs.map((tech, i) => (
                      <span key={i} className="badge bg-primary me-1">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="card-footer bg-transparent border-0">
                  <a href={project.liveLink} className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">show executation</a>
                  <a href={project.codeLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Projects;