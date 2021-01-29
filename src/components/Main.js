import PropTypes from 'prop-types'
import React from 'react'
import CV from './CV'
import scanner from '../images/scanner.png'
import react_solidity from '../images/react_solidity.png'
import pairs_bot from '../images/pairs_bot.png'
import devonwrestling from '../images/devonwrestling.png'
import cryptozap from '../images/cryptozap.png'
import j4f from '../images/j4fwebsite.jpg'
import frontend from '../images/frontend.png'

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

          <h3>JavaScript/Node</h3>

          <p>ReactJS, React Native, Node.js, Typescript, Jest</p>

          <h3>AWS Serverless</h3>

          <p>I have created and deployed commmercial applications using Serverless framework. 
            AWS services I have used in this framework include DynamoDB and Lambda.
          </p>


          <h3>Python</h3>
          <p>
            I am experienced with Pandas, Numpy, Matplotlib and Pytest.
            Most of my work in Python has been data science orientated though I do have
            some experience with Django and Flask.
          </p>

          
          <h3>Blockchain / Defi</h3>

          <p>
            I have an interest in the cryptocurrency space and have built a number of trading tools.
            I have some experience building smart contracts that I am interested in expanding.
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

          
          
          <h3>React / Node / Serverless</h3>
          <span className="image main">
            <img src={frontend} alt="" />
          </span>
          <p>
           I have experience building full stack React apps. The one above is deployed on AWS using:
           <ul>
             <li>Serverless</li>
             <li>DynamoDb</li>
             <li>Cognito</li>
             <li>Tests with Jest / React Testing Library</li>

           </ul>
            
          </p>

     

          <h3>Trading Robots</h3>
          <p>
            <a href="https://github.com/fractalswift/bitmex-pairs_bot">Here</a>{' '}
            is an example of an automated trading robot for the Bitmex exchange.
            This robot uses REST API to place orders when conditions are met.
          </p>

          <span className="image main">
            <img src={pairs_bot} alt="" />
          </span>
2

       

          <h3>Django and REST API</h3>
          <span className="image main">
            <img src={cryptozap} alt="" />
          </span>
          <p>
          CryptoZap is a Django web app
            that uses REST API to get data about liquidity from crypto
            exchanges.
          </p>

          <h3>Smart Contracts and Web3</h3>
          <span className="image main">
            <img src={react_solidity} alt="" />
          </span>
          <p>
            <a href="https://github.com/fractalswift/eth-banner-dapp">
              This one page app
            </a>{' '}
            interacts with the Ethereum testnet (Rinkeby). You can place a
            message on the blockchain if you make a transaction using Ropstein
            Ether. 
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
            on GCP:
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
            with a focus on JavaScript, Node and Serverless, but I love learning new
            skills.
          </p>

          <p>
            I love improving my skillset with new technology and working as part
            of a team, so if you're looking for someone enthusiastic and
            passionate to join your project, please don't hesitate to get in
            contact.
          </p>

          <p>matthewthomasmacklin@gmail.com</p>

          <p>
            <CV />
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
          <p>Email me at:</p>
          <p style={{ marginBottom: '30px;' }}>
            <a
              style={{ marginBottom: '30px;' }}
              href="mailto:matthewthomasmacklin@gmail.com"
            >
              matthewthomsmacklin@gmail.com
            </a>
          </p>
          <p style={{ marginBottom: '30px;' }}> Thanks!</p>

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
