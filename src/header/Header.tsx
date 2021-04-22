import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="css-1pjuho0">
      <div className="css-wn6kgn">
        <header className="css-rqujmn">
          <span className="css-1wok5v">
            <div id="edition-root">
              <div className="css-326j3q">
                <div className="css-n19ytf">
                  <button
                    className="css-1a0j9n9"
                    aria-expanded="false"
                    data-link-name="nav2 : topbar : edition-picker: toggle"
                    data-cy="dropdown-button"
                  >
                    UK edition
                  </button>
                  <div className="css-1hyfx7x">
                    <ul className="css-1qipi63" data-cy="dropdown-options">
                      <li>
                        <a
                          href="/preference/edition/uk"
                          className="css-1b4wkbq"
                          data-link-name="nav2 : topbar : edition-picker: UK"
                        >
                          UK edition
                        </a>
                      </li>
                      <li>
                        <a
                          href="/preference/edition/us"
                          className="css-1wh4ax9"
                          data-link-name="nav2 : topbar : edition-picker: US"
                        >
                          US edition
                        </a>
                      </li>
                      <li>
                        <a
                          href="/preference/edition/au"
                          className="css-1wh4ax9"
                          data-link-name="nav2 : topbar : edition-picker: AU"
                        >
                          Australian edition
                        </a>
                      </li>
                      <li>
                        <a
                          href="/preference/edition/int"
                          className="css-1wh4ax9"
                          data-link-name="nav2 : topbar : edition-picker: INT"
                        >
                          International edition
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </span>
          <a className="css-12eg3v6" href="/" data-link-name="nav2 : logo">
            <span className="css-92oqeo">The Guardian - Back to home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 297 95"
              className="css-t7dp8u"
            >
              <path
                fill="#121212"
                d="M66.8 50.7l5-2.6V8.4H68l-9.3 12.4h-1L58.2 7h40.5l.6 13.8h-1.1L89 8.4h-3.9V48l5 2.7V52H66.9v-1.3zm37-1.8V5L100 3.5v-.9L114.2.1h1.5v20.8l.3-.4a19 19 0 0 1 12.2-4.5c6.2 0 9 3.5 9 10v23l3.3 1.7V52H122v-1.3l3.4-1.8V26c0-3.6-1.6-5-4.6-5a7.8 7.8 0 0 0-4.9 1.6V49l3.3 1.8V52h-18.5v-1.2zm48.4-13.4c.4 7.2 3.6 12.8 11.4 12.8 3.7 0 6.3-1.7 8.8-3v1.5a17.4 17.4 0 0 1-13.6 6.2c-12 0-18-6.6-18-18.1 0-11.3 6.6-18.3 17.4-18.3 10.2 0 15.5 5 15.5 18.4v.4zm-.2-1.7l10.5-.7c0-9-1.5-15-4.6-15-3.3 0-5.9 7-5.9 15.6M0 69.6c0-19.1 12.7-26 26.8-26 6 0 11.6 1 14.8 2.3l.3 13.4h-1.4l-8.3-13a12.2 12.2 0 0 0-5.2-.8c-7.5 0-11.3 8.7-11.2 22.9.1 17 3 24.7 10 24.7a10.7 10.7 0 0 0 4.1-.7V74.2l-4.5-2.6V70h22v1.7l-4.5 2.5v18A49.2 49.2 0 0 1 26.2 95C10.2 95 0 87.5 0 69.6m47.1-9v-1L62 57l1.6.1v29c0 3.6 1.7 4.6 4.5 4.6a6 6 0 0 0 4.8-2.2v-26l-4-1.8v-1.2L83.6 57l1.4.2v33.3l4 1.6v1.1L74.4 95l-1.4-.1v-4.4h-.4A16.4 16.4 0 0 1 61.5 95C54.4 95 51 90.8 51 84.5v-22zm94.5-3.7l1.2.1v10.8h.4c1.6-7.9 5-10.8 9.3-10.8a4.7 4.7 0 0 1 1.8.3v11a12.6 12.6 0 0 0-3-.3 18.6 18.6 0 0 0-8 1.6v21.2l3.4 1.9V94h-19.3v-1.3l3.5-1.9v-29l-4-1.2v-1z M178.7 57.8V46.5l-4-1.5v-.9l15-2.7 1.3.2v48.8l4.2 1.5V93l-14.8 2-1.1-.1v-4h-.4a13.1 13.1 0 0 1-9.8 4.1c-8 0-13.9-6.1-13.9-18.7 0-13.2 6.9-19.7 17.2-19.7a14.7 14.7 0 0 1 6.3 1.2m0 31.2V60a5.5 5.5 0 0 0-4-1.3c-4 .1-6.5 6.2-6.5 16.9 0 9.6 1.8 15 7 14.8a5.2 5.2 0 0 0 3.5-1.3M211.5 57h1.3v34l3.4 1.8V94H197v-1.3l3.4-1.9V62.4l-4-1.7v-1.1zm1.4-9.2a6.4 6.4 0 0 1-6.6 6.3 6.3 6.3 0 1 1 0-12.6 6.5 6.5 0 0 1 6.6 6.3m46.3 43.1V62l-4-1.4v-1.4l14.7-2.8 1.5.2v4.3h.4a19.4 19.4 0 0 1 12.5-4.7c6.4 0 9.3 3 9.3 9.8v24.8l3.4 1.9V94h-19.2v-1.3l3.5-1.9v-24c0-3.8-1.6-5.3-4.7-5.3a8 8 0 0 0-5 1.7v27.6l3.3 1.9V94h-19.1v-1.3zm-21.3-18V68c0-7.3-1.5-9.6-6-9.6a11.8 11.8 0 0 0-1.6 0l-8 11h-1.1v-10a43.3 43.3 0 0 1 13.5-2.4c9.8 0 15.5 2.7 15.5 11v23.5l3.5 1v.9a15 15 0 0 1-7.2 1.6c-4.9 0-7.2-1.6-8.3-4.2h-.3c-2 2.8-5 4.3-9.6 4.3-5.8 0-9.8-3.6-9.8-9.9 0-6 3.8-9.4 11.5-10.8zm0 16.2V74.5l-2.4.2c-3.9.3-5.2 2.7-5.2 8.2 0 5.9 1.9 7.4 4.6 7.4a3.6 3.6 0 0 0 3-1.3M109.7 72.7V68c0-7.3-1.6-9.7-6.1-9.7a11.8 11.8 0 0 0-1.5.2L94 69.2h-1v-10a43.3 43.3 0 0 1 13.4-2.3c9.8 0 15.5 2.7 15.5 11v23.5l3.5 1v.9a15 15 0 0 1-7.2 1.6c-4.9 0-7.2-1.6-8.3-4.2h-.3c-2 2.8-5 4.3-9.5 4.3-5.9 0-9.8-3.6-9.8-9.9 0-6 3.7-9.4 11.4-10.8zm0 16.3V74.5l-2.5.2c-3.8.3-5.2 2.7-5.2 8.2 0 5.9 2 7.4 4.6 7.4a3.6 3.6 0 0 0 3-1.3"
              ></path>
            </svg>
          </a>
          <div id="reader-revenue-links-header">
            <div className="css-1yfvmzu">
              <div style={{"display": "flex", "flexDirection": "column"}}>
                <span className="css-1bne320-Hide">
                  <div className="css-1p35o95">
                    <span>Support the Guardian</span>
                  </div>
                  <div className="css-z58xh3">
                    <div>Available for everyone, funded by readers</div>
                  </div>
                </span>
                <div style={{"display": "flex", "flexDirection": "row"}}>
                <span className="css-1d89sgr-Hide">
                  <a
                    href="https://support.theguardian.com/subscribe?REFPVID=knsu7s06gveb0rgdhz2p&amp;INTCMP=RemoteRrHeaderLinksTest__UK_remote&amp;acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentId%22%3A%22RemoteRrHeaderLinksTest__UK_remote%22%2C%22componentType%22%3A%22ACQUISITIONS_HEADER%22%2C%22campaignCode%22%3A%22RemoteRrHeaderLinksTest__UK_remote%22%2C%22abTest%22%3A%7B%22name%22%3A%22RemoteRrHeaderLinksTest__UK%22%2C%22variant%22%3A%22remote%22%7D%2C%22referrerPageviewId%22%3A%22knsu7s06gveb0rgdhz2p%22%2C%22referrerUrl%22%3A%22https%3A%2F%2Fwww.theguardian.com%2Fenvironment%2F2021%2Fapr%2F22%2Fpoorer-nations-raise-concerns-over-climate-aid-ahead-of-white-house-summit%22%2C%22isRemote%22%3Atrue%7D"
                    className="css-1suefd1-button-fontSpacingVerticalOffset-defaultSize-iconDefault-iconRight-iconNudgeAnimation"
                  >
                    Subscribe<div className="src-button-space"></div>
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 15.95h19.125l-7.5 8.975.975.975 10.425-10.45v-1L16.6 4l-.975.975 7.5 8.975H4v2z"
                      ></path>
                    </svg>
                  </a>
                </span>
                <span className="css-127hufc-Hide">
                  <a
                    href="https://support.theguardian.com/subscribe?REFPVID=knsu7s06gveb0rgdhz2p&amp;INTCMP=RemoteRrHeaderLinksTest__UK_remote&amp;acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentId%22%3A%22RemoteRrHeaderLinksTest__UK_remote%22%2C%22componentType%22%3A%22ACQUISITIONS_HEADER%22%2C%22campaignCode%22%3A%22RemoteRrHeaderLinksTest__UK_remote%22%2C%22abTest%22%3A%7B%22name%22%3A%22RemoteRrHeaderLinksTest__UK%22%2C%22variant%22%3A%22remote%22%7D%2C%22referrerPageviewId%22%3A%22knsu7s06gveb0rgdhz2p%22%2C%22referrerUrl%22%3A%22https%3A%2F%2Fwww.theguardian.com%2Fenvironment%2F2021%2Fapr%2F22%2Fpoorer-nations-raise-concerns-over-climate-aid-ahead-of-white-house-summit%22%2C%22isRemote%22%3Atrue%7D"
                    className="css-1x4xiz8-button-fontSpacingVerticalOffset-defaultSize"
                  >
                    Subscribe
                  </a>
                </span>
                <span className="css-1bne320-Hide">
                  <a
                    href="https://support.theguardian.com/contribute?REFPVID=knsu7s06gveb0rgdhz2p&amp;INTCMP=RemoteRrHeaderLinksTest__UK_remote&amp;acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentId%22%3A%22RemoteRrHeaderLinksTest__UK_remote%22%2C%22componentType%22%3A%22ACQUISITIONS_HEADER%22%2C%22campaignCode%22%3A%22RemoteRrHeaderLinksTest__UK_remote%22%2C%22abTest%22%3A%7B%22name%22%3A%22RemoteRrHeaderLinksTest__UK%22%2C%22variant%22%3A%22remote%22%7D%2C%22referrerPageviewId%22%3A%22knsu7s06gveb0rgdhz2p%22%2C%22referrerUrl%22%3A%22https%3A%2F%2Fwww.theguardian.com%2Fenvironment%2F2021%2Fapr%2F22%2Fpoorer-nations-raise-concerns-over-climate-aid-ahead-of-white-house-summit%22%2C%22isRemote%22%3Atrue%7D"
                    className="css-1suefd1-button-fontSpacingVerticalOffset-defaultSize-iconDefault-iconRight-iconNudgeAnimation"
                  >
                    Contribute<div className="src-button-space"></div>
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 15.95h19.125l-7.5 8.975.975.975 10.425-10.45v-1L16.6 4l-.975.975 7.5 8.975H4v2z"
                      ></path>
                    </svg>
                  </a>
                </span>
                </div>
              </div>
            </div>
          </div>
          <div id="links-root">
            <div data-print-layout="hide" className="css-cc5btv">
              <div className="css-1o9q826"></div>
              <a
                href="https://jobs.theguardian.com/?INTCMP=jobs_uk_web_newheader"
                className="css-wnvds1"
                data-link-name="nav2 : job-cta"
              >
                Search jobs
              </a>
              <div className="css-96v916"></div>
              <a
                className="css-md0w21"
                href="https://profile.theguardian.com/signin?INTCMP=DOTCOM_NEWHEADER_SIGNIN&amp;ABCMP=ab-sign-in&amp;componentEventParams=componentType%3Didentityauthentication%26componentId%3Dguardian_signin_header"
                data-link-name="nav2 : topbar : signin"
              >
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path d="M7 0C3.1 0 0 3.1 0 7c0 2 .9 3.9 2.4 5.2C3.6 13.4 5.3 14 7 14c1.7 0 3.4-.6 4.7-1.8C13.2 10.9 14 9 14 7c0-3.9-3.1-7-7-7zm0 1.8c1.3 0 2.1.8 2.1 2.1S8 6.3 7 6.3c-.8 0-2-1.1-2-2.4 0-1.4.7-2.1 2-2.1zm0 11.6c-1.7 0-3.3-.7-4.5-1.8l.8-3.2.5-.5c1-.4 2.1-.5 3.1-.5 1.1 0 2.1.2 3.1.5l.5.5.9 3.2c-1.1 1.2-2.7 1.8-4.4 1.8z"></path>
                </svg>{" "}
                Sign in
              </a>
              <a
                href="https://www.google.co.uk/advanced_search?q=site:www.theguardian.com"
                className="css-euw9ym"
                data-link-name="nav2 : search"
              >
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M6.5 1.6c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9m0-1.6c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5zm6.6 11.5l4.9 4.9-1.6 1.6-4.9-4.9v-.8l.8-.8h.8z"></path>
                </svg>
                Search
              </a>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export { Header }
