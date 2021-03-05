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
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Alumni Software Engineer <br /> <span>Resilient Coders</span> <br /> <span>Oct. 2020 - Jan. 2021</span></h2>
                        <p>Selected to participate in a 10-week alumni bootcamp class to refresh the basics of OOP, Full Stack JS, Typescript, Redux, GraphQL, React Native, and TDD.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Instructor <br /> <span>General Assembly</span> <br /> <span>2017- 2019</span></h2>
                        <ul>
                          <li>Lead lectures on technologies such as Git, CSS/SASS, JavaScript, Express, PostgreSQL, and MongoDB.</li>
                          <li>Became the go-to instructor for support and technical feedback on code written by ESL students through homework, projects, and evaluations. </li>
                          <li>Helped launch the new campus in Rhode Island.</li>
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
                        <h2>FrontEnd Developer Intern <br /> <span>Resilient Labs</span> <br /> <span>January 2017 - May 2017</span></h2>
                        <ul>
                          <li>Created full stack applications and websites for different clients across small and medium size businesses, and consulted on SEO and social media strategy.</li>
                          <li>Applied agile methodologies like SCRUM for project management.</li>
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
