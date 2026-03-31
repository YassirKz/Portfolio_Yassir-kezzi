import { motion } from 'framer-motion';

const About = () => {
  const calculateAge = () => {
    const birthDate = new Date(2005, 6, 15);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const infoItems = [
    { icon: <i className="bi bi-envelope text-primary"></i>, label: 'Email', value: 'kezziyassir005@gmail.com' },
    { icon: <i className="bi bi-telephone text-primary"></i>, label: 'Phone', value: '+212 682 486 661' },
    { icon: <i className="bi bi-geo-alt text-primary"></i>, label: 'Location', value: 'Rabat, Morocco' },
    { icon: <i className="bi bi-calendar-event text-primary"></i>, label: 'Age', value: calculateAge() },
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <img
              src="/images/personal-img.jpg"
              alt="Yassir"
              className="relative w-64 h-80 object-cover rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            Hello, I'm <span className="text-primary">Yassir Kezzi</span>
          </h3>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            I am a Full-Stack developer based in Rabat, Morocco. Currently a student at NTIC Rabat, 
            I am passionate about building modern, scalable web applications from scratch. 
            I love the challenge of turning complex problems into simple, beautiful digital solutions.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {infoItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{item.label}</p>
                  <p className="text-slate-200">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="/Pdf/CV_Yassir_Kezzi.pdf" target="_blank" className="btn-premium btn-premium-primary">
              Download Resume <i className="bi bi-box-arrow-up-right ms-2"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;