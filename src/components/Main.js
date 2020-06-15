import PropTypes from 'prop-types'
import React from 'react'
import scanner from '../images/scanner.png'
import react_solidity from '../images/react_solidity.png'
import pairs_bot from '../images/pairs_bot.png'
import cv from '../images/CVMatthewMacklin.pdf'
import devonwrestling from '../images/devonwrestling.png'
import cryptozap from '../images/cryptozap.png'
import j4f from '../images/j4fwebsite.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        role="button"
        aria-label="close the article"
        tabIndex={0}
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
        onKeyDown={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>

          <h3>Python</h3>
          <p>
            I am experienced with Pandas, Numpy, Pytest, OOP, sklearn, and have
            worked with Django and Flask.
          </p>

          <h3>JavaScript</h3>

          <p>ReactJS, React Native, Express, Node.js, JSON.</p>

          <h3>Others</h3>

          <p>
            Git, HTML/CSS, Postgres, MongoDB, REST API, JSON, Docker, XGboost,
            Smart Contracts (Solidity).
          </p>

          <h3>Non-technical</h3>

          <p>
            I have over 10 years working in creative industries including dance
            and am very happy working on my own or as part of a team. I believe
            building good quality relationships with team members and
            stakeholders makes any project more efficient and fun.{' '}
          </p>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pairs_bot} alt="" />
          </span>

          <h3>Trading Robots</h3>
          <p>
            <a href="https://github.com/fractalswift/bitmex-pairs_bot">Here</a>{' '}
            is an example of an automated trading robot for the Bitmex exchange.
            This robot uses REST API to place orders when conditions are met.
          </p>

          <h3>React / React Native</h3>
          <span className="image main">
            <img src={devonwrestling} alt="" />
          </span>
          <p>
            <a href="https://fractalswift.github.io/devon-wrestling-react/">
              This timer{' '}
            </a>
            is specially designed for the Devon Wrestling rule set. The rule set
            is currently in beta - the app will be updated as the rules are
            tested. You can see the React Native version{' '}
            <a href="https://github.com/fractalswift/devon-wrestling-react-native">
              here
            </a>{' '}
            or in the play store{' '}
            <a href="https://play.google.com/store/apps/details?id=com.devonwrestling.devonwrestling">
              {' '}
              here
            </a>{' '}
            .
          </p>

          <h3>Django and REST API</h3>
          <span className="image main">
            <img src={cryptozap} alt="" />
          </span>
          <p>
            <a href="http://178.128.167.44/">CryptoZap</a> is a Django web app
            that uses REST API to get data about liquidity from crypto
            exchanges.
          </p>

          <h3>Smart Contracts and Web3</h3>
          <span className="image main">
            <img src={react_solidity} alt="" />
          </span>
          <p>
            <a href="https://github.com/fractalswift/bannerApp">
              This one page app
            </a>{' '}
            interacts with the Ethereum testnet (Ropstein). You can place a
            message on the blockchain if you make a transaction using Ropstein
            Ether. You can interact with it here:
            <a href="https://ethbannerdemo.herokuapp.com/"> Eth Banner Demo</a>
          </p>
          <h3>Data Science</h3>
          <span className="image main">
            <img src={scanner} alt="" />
          </span>
          <p>
            <a href="https://github.com/fractalswift/backtesting-stategies-using-pandas">
              Here
            </a>{' '}
            are some examples of data analysis using Pandas. More detailed
            examples available upon request.
          </p>

          <h3>Gatsby</h3>

          <span className="image main">
            <img src={j4f} alt="" />
          </span>

          <p>
            I use Gatbsy for static websites and PWAs. The following website has
            Gatsby frontend with Wordpress Rest API as a headless CMS, deployed
            on Google Cloud:
          </p>
          <p>
            <a href="https://www.just4funkproductions.com">
              Just 4 Funk Website
            </a>
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>

          <p>Hi there! </p>

          <p>
            Thanks for dropping by. I'm most experienced in working on projects
            with a focus on Python and JavaScript, but I love learning new
            skills and am open to learning whatever it takes to get the job
            done.
          </p>

          <p>
            I love improving my skillset with new technology and working as part
            of a team, so if you're looking for someone enthusiastic and
            passionate to join your project, please don't hesitate to get in
            contact.
          </p>

          <p>matthewthomasmacklin@gmail.com</p>

          <p>
            <a href={cv}>Click here for my CV</a>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                aria-label="enter name"
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                aria-label="enter email"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                aria-label="enter your message"
              ></textarea>
            </div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className="special"
                  aria-label="send message button"
                />
              </li>
              <li>
                <input
                  type="reset"
                  value="Reset"
                  aria-label="reset form button"
                />
              </li>
            </ul>
          </form>

          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
