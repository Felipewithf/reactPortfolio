import resume_pdf from '../assets/resume.pdf';

export default function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <div><a href={resume_pdf}><button>Download Resume</button></a></div>
      <div className='pt-5'>
        <h3>Design & Experience Lead <em>at </em>
 Surgical Safety Technologies</h3>
 <h4>Feb 2019 to Present</h4>
 <hr/>
      </div>
      <div className='pt-5'>
        <h3>Data Visualization & UX Designer <em>at </em>
        St. Michael’s Hospital</h3>
 <h4>Nov 2017 to Feb 2019</h4>
 <hr/>
      </div>
      <div className='pt-5'>
        <h3>Creative Designer <em>at </em>
        Pico</h3>
 <h4>Feb 2016 to Jul 2016</h4>
 <hr/>
      </div>
    </section>
  );
}
