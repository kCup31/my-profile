import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>
                                                I have over 8 years of Software Development experience. Recently, I've joined Software AG and working in customer support team. Prior to that, I was working as a Senior Software Engineer at RSA Security where I contributed to designing and developing software products in a fast-paced agile environments. I've studied MS in Computer Science from The George Washington University and did my bachelors from BMS College of Engineering. I enjoy exploring new technoliges and creating small projects in my free time. It allows me to form an opinion of my own about the different softwares, open sources, stacks with so many options that are available today. Having worked with some of the best security experts, I had  developed a huge interest in computer security. It allowed me to create two patents on the subject of security.
                                            </p>
                                            <p>
                                                Other than technical stuff, I have life long love relationship with music. Music has been always a part of life and helps me stay positive and functional. Over the period of time, I started making covers for the songs that I enjoyed watching. Thanks to my music friends who had inspired me to keep up with it and share some of my songs on youtube and facebook.
                                            </p>
                                            <p>
                                                And last but not the least, I like to eat different cusinies. Now just so I can eat to saiate my tastebuds for as long as I can in my life, I have to welcome and make exercise a part of my life.
                                            </p>
                                            <p>
                                                I hope through this online portfolio, I will be able to share my experiences in life wuth everyone.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">My expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Design & Architect</h3>
                                        <p>Experience in designing, architecting and developing end to end product for an enterprise solution.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-command2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Lead project</h3>
                                        <p>A team player who can lead a project in the right direction meeting quality with the most efficient solution</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-social-at-circular" />
                                    </span>
                                    <div className="desc">
                                        <h3>Friendly</h3>
                                        <p> One who loves to learn from others and treats everyone with restpect, equality and dignity.</p>
                                    </div>
                                </div>
                            </div>
                            {
                            }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
