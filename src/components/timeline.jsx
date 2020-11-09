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
                <h2 className="colorlib-heading animate-box">Achievments</h2>
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
                        <h2>Patent -  Determining criticality of identified enterprise assets using network session information <span>Filed Jan 29, 2019 | us 20200244682A1</span></h2>
                        <p>Methods, apparatus, and processor-readable storage media for identifying and determining the criticality of enterprise assets using network traffic information are provided herein. An example computer-implemented method includes capturing network session information from an enterprise network; identifying multiple assets within the enterprise network by processing the captured network session information; determining, for each of the identified assets, one or more predefined features of the asset based at least in part on the processing of the captured network session information; determining, for each of the identified assets, a level of criticality associated with the asset based at least in part on the one or more determined features of the asset; and outputting the level of criticality and an identifier of the asset associated therewith to a security-related system, wherein the level of criticality and the asset identifier are used by the security-related system to take at least one automated action.</p>
                        <p>
                          More Detail:
                          https://patents.google.com/patent/US20200244682A1/en
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Patent - Detection and remediation of potentially malicious files <span>Issued Jan 26, 2018 | us 10,009,370</span></h2>
                        <p> A method which detects zero day exploit by decoding the file byte by byte to identify one or more code streams, processing each of these identified code streams to determine the presence of respective set of indicators of compromise, then determining whether the file is malicious based on the presence of one or more of the indicators of compromise in the code streams, and modifying access by a given client device to the file responsive to determining that the file is malicious.
                        </p>
                        <p>
                          To read more:
                          https://patentscope.wipo.int/search/en/detail.jsf?docId=US221793321&tab=NATIONALBIBLIO
                        </p>
                        <p>
                          To watch video:
                          https://community.rsa.com/videos/31033
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>RSA’s Global Innovation Competition - RED Challenge Winner <span>Sept 2018</span></h2>
                        <p>
                          More than 250 contestants took part from all around the world. The competition had two rounds. In the first round 3 teams were selected from AME, EMEA and APJ region. We got the first place in the final round.
                        </p>
                        <p>
                          Video :
                          https://www.youtube.com/watch?v=YCrxYylMZTs&feature=youtu.be
                        </p>
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
