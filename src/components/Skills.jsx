

const skillsData = [
    { name: 'HTML5', img: '/images/html.jpg' },
    { name: 'CSS3', img: '/images/CSS.png' },
    { name: 'BOOTSTRAP5', img: '/images/bootstrap-logo.png' },
    { name: 'JAVASCRIPT', img: '/images/javascript-logo.png' },
    { name: 'React', img: '/images/react-logo.png' },
    { name: 'Php', img: '/images/php-logo.png' },
    { name: 'MySQL', img: '/images/MySQL.png' },
    { name: 'PYTHON', img: '/images/python.png' },
    { name: 'Git', img: '/images/git.png' },
    { name: 'Github', img: '/images/github.png' },


    
];

let Skills = () => {
  return (
    <section id="skills" className="py-5 bg-primary bg-gradient">
      <div className="container">
        <h2 className="text-center display-6 fw-bold text-white mb-5">
          <i className="bi bi-code-slash me-2"></i> Skills &<span className="text-dark"> Abilities</span>
        </h2>

        <div className="row justify-content-center g-4">
          {skillsData.map((skill) => (
            <div className="col-md-3 col-6" key={skill.name}>
              <div className="card border-0 shadow skill-card h-100">
                <div className="card-body text-center p-4">
                  <img src={skill.img} className="img-fluid mb-3" style={{ height: '100px' }} alt={skill.name} />
                  <h5 className="fw-bold">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;