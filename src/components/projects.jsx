import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Tetris</a></h3>
											{/*<span>Website</span>*/}
											<p className="icon">
												{/*<span><a href="#"><i className="icon-share3" /></a></span>*/}
												<span><a href="https://inpen.github.io/Tetris/" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /></a></span>
												{/*<span><a href="#"><i className="icon-heart" /> 49</a></span>*/}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Drum Kit</a></h3>
											{/*<span>Animation</span>*/}
											<p className="icon">
												{/*<span><a href="#"><i className="icon-share3" /></a></span>*/}
												<span><a href="https://inpen.github.io/drumKit/" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /></a></span>
												{/*<span><a href="#"><i className="icon-heart" /> 49</a></span>*/}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Phone Book App</a></h3>
											{/*<span>Illustration</span>*/}
											<p className="icon">
												{/*<span><a href="#"><i className="icon-share3" /></a></span>*/}
												<span><a href="https://phonebook-backend-2020.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /></a></span>
												{/*<span><a href="#"><i className="icon-heart" /> 49</a></span>*/}
											</p>
										</div>
									</div>
								</div>
							</div>



						</div>
					</div>
        </section>
      </div>
    )
  }
}
