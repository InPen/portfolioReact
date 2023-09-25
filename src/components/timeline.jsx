import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Associate Cloud Consultant <br /> <span>Slalom</span> <br /> <span>2021 - 2023</span></h2>
                        <li>Architected and provisioned infrastructure to support serverless or server-based applications, resulting in a 20% reduction in infrastructure costs.</li>
                        <li>Built and monitored CI/CD pipelines for different deployment strategies, achieving a 30% improvement in deployment speed.</li>
                        <li>Developed, tested, and debugged scalable microservices using Kubernetes, leading to a 25% increase in application performance and reliability.</li>
                        <li>Gathered technical requirements and recommended AWS Cloud solutions across multiple domains, contributing to a 40% increase in client satisfaction.</li>
                        <li>Provided mentorship and technical guidance to team members, conducted 20+ code reviews, and led 10+ knowledge transfer sessions, fostering a collaborative and productive team environment.</li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Alumni Software Engineer Fellow<br /> <span>Resilient Coders</span> <br /> <span>2020 - 2021</span></h2>
                        <p>Participated in an alumni group to refresh OOP, Full Stack JS, Typescript, React Native, and TDD skills, collaborating on 5+ projects, and providing mentorship to 10+ current cohort members.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Fullstack Software Engineer Instructor <br /> <span>General Assembly</span> <br /> <span>2017- 2019</span></h2>
                        <ul>
                          <li>Led 100+ lectures on technologies including Git, CSS/SASS, JavaScript, Express, PostgreSQL, and MongoDB, resulting in a 90% average student satisfaction rating.</li>
                          <li>Served as the primary instructor for ESL students, providing support and technical feedback on 300+ code assignments and projects.</li>
                          <li>Played a key role in launching the new campus in Rhode Island.</li>
                          <li>Collaborated in building the Python curriculum for the Boston campus.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Frontend Developer Internship <br /> <span>Resilient Labs</span> <br /> <span>March 2017 - May 2017</span></h2>
                        <ul>
                          <li>Developed efficient and testable code following best software development practices, resulting in a 20% improvement in code quality.</li>
                          <li>Created responsive HTML/CSS layouts, improving website usability and accessibility.</li>
                          <li>Gathered and refined specifications and requirements, contributing to a 15% reduction in project turnaround time.</li>
                          <li>Maintained software documentation to enhance project transparency and collaboration.</li>
                        </ul>
                      </div>
                      <div className="timeline-label">
                        <h2>Bootcamp <br /> <span>Resilient Coders</span> <br /> <span>January 2017 - March 2017</span></h2>
                        <ul>
                          <li>Successfully completed an 8-week, 300+ hours immersive training program.</li>
                          <li>Achieved proficiency in structured HTML, responsive CSS, JavaScript, jQuerry, and Git.</li>
                          <li>Freelanced and managed 3 personal clients, delivering 100% on-time and on-budget projects.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
