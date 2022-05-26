import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { verify } from '../../../routes/auth';
import './register.css';

function Register() {
  const[isPressed1, setisPressed1] = useState(false);
  const[isPressed2, setisPressed2] = useState(false);
  const[isPressed3, setisPressed3] = useState(false);
  const[isPressed4, setisPressed4] = useState(false);
  const[isPressed5, setisPressed5] = useState(false);
  const[isPressed6, setisPressed6] = useState(false);
  const[isPressed7, setisPressed7] = useState(false);
  const[email, setEmail] = useState(`${localStorage.getItem('email')}`);
  const[bottomMessage, setBottomMessage] = useState("");
  const[message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    verify( {email} ).then((response) => {
      if(response.status === 200){
        localStorage.setItem('email', email);
        navigate('/login');
      }
    }).catch((error) => {
      if(error.response.status === 403){
        console.log(error.response);
        localStorage.setItem('email', email);
        navigate('/signup')
      } else if(error.response.status === 401){
        setMessage(error.response.data.message)
      }
    })
  };


  const handleSignUpButtonBottom = (e) => {
    e.preventDefault();
    verify( {email} ).then((response) => {
      if(response.status === 200){
        localStorage.setItem('email', email);
        navigate('/login');
      }
    }).catch((error) => {
      if(error.response.status === 403){
        console.log(error.response);
        localStorage.setItem('email', email);
        navigate('/signup')
      } else if(error.response.status === 401){
        setBottomMessage(error.response.data.message)
      }
    })
  };

  return (
    <div className="register">

      {/* Top Header */}

      <div className="header-wrap">
        <div className="header">
          <span className='header-logo'>
            <p className='logo'>
              FMF Podcast  
            </p>
            <div className="sign-in-button">
              <a href='/login' className='sign-in-blue-button'>Sign In</a>   
            </div>
          </span>
        </div>
      </div>

      {/* Register Container */}

      <div className="register-containers">
        <div className='containers register-signup-container'>
          <div className="register-top-background">
            <div className='register-top-image'>
              <img className='register-img' src='https://pro2-bar-s3-cdn-cf2.myportfolio.com/835253951cfacdcbc62e7b0663b37a5d/da50570c-b6c0-47bc-9cce-31d040479a44_rw_1920.jpg?h=08623ee947bbe60fc31cdae81cb89e29'/>
            </div>
          </div>

          <div className="register-top-text">
            <h1 className='register-text-title'>Unlimited clips, podcasts and vlogs.</h1>
            <h2 className='register-text-subtitle'>Watch anywhere. Hate anytime.</h2>

            <form className='form-email-form'>
              <h3 className='email-form-title'>Ready to watch? Enter your email to create your account.</h3>
              <div className="email-form">

                <ul className='simpleForm'>
                  <li className='field-email'>
                    <div className='input-email'>
                      <div className='input-placement'>
                        <label className='input_email' placeholder='email'>
                          <input type="email" className='textField' placeholder='Email address' defaultValue={localStorage.getItem('email')}  onChange={(e) => setEmail(e.target.value)}/>
                          <label className='placeLabel'>Email address</label>
                        </label>
                      </div>
                      <div className='inputError'>{message}</div>
                    </div>
                  </li>
                </ul>

                <div className='email-form-button-container'>
                  <button className='blue-button' onClick={handleSignUp}>
                    <span className='button-text'>Get Started</span>                    
                  </button>
                </div>

              </div>
            </form>
            <h3 className='below-email-form'></h3>
          </div>

          <div className="center-pixel">
          </div>

        </div>

        {/* Watch on TV */}

        <div className='containers register-watchOnTV-container'>
          <div className="register-container">
            <div className='register-container-text'>
              <h1 className='register-text-title'>Enjoy on your TV.</h1>
              <h2 className='register-text-subtitle'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </div>

            <div className="register-container-img-container">
              <div className="register-container-img-animation">
                <img className='register-container-img' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt=''/>
                <div className='register-container-animation'>
                  <img src='https://cdn.myportfolio.com/835253951cfacdcbc62e7b0663b37a5d/abab8936-bfcb-4a42-aa49-a4ab25db03d2_rw_1920.jpg?h=2fd3dfd638671f872f1deb065ddfe878' alt=''></img>
                </div>
              </div>
            </div>

            <div className="center-pixel" style={{position: "absolute"}}>  
            </div>

          </div>
        </div>

        {/* Download and watch */}

        <div className='containers register-downloadAndWatch-container'>
          <div className="register-container">
            <div className='register-container-text'>
              <h1 className='register-text-title'>Download your shows to watch offline.</h1>
              <h2 className='register-text-subtitle'>Save your favorites easily and always have something to watch.</h2>
            </div>

            <div className="register-container-img-container">
              <div className="register-container-img-animation">
                <img className='register-container-img' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt=''/>
                <div className='register-container-animation'>
                  <img src='https://cdn.myportfolio.com/835253951cfacdcbc62e7b0663b37a5d/abab8936-bfcb-4a42-aa49-a4ab25db03d2_rw_1920.jpg?h=2fd3dfd638671f872f1deb065ddfe878' alt=''></img>
                </div>
              </div>
            </div>

            <div className="center-pixel" style={{position: "absolute"}}>  
            </div>

          </div>
        </div>

        {/* Watch Every where */}

        <div className='containers register-WatchEverywhere-container'>
          <div className="register-container">
            <div className='register-container-text'>
              <h1 className='register-text-title'>Watch everywhere.</h1>
              <h2 className='register-text-subtitle'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
            </div>

            <div className="register-container-img-container">
              <div className="register-container-img-animation">
                <img className='register-container-img' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt=''/>
                <div className='register-container-animation'>
                  <img src='https://cdn.myportfolio.com/835253951cfacdcbc62e7b0663b37a5d/abab8936-bfcb-4a42-aa49-a4ab25db03d2_rw_1920.jpg?h=2fd3dfd638671f872f1deb065ddfe878' alt=''></img>
                </div>
              </div>
            </div>

            <div className="center-pixel" style={{position: "absolute"}}>  
            </div>

          </div>
        </div>
        
        {/* FAQ */}

        <div className='containers register-faq-container'>
          <div className='register-faq-container-text'>

            <h1 className='register-text-title'>Frequently Asked Questions</h1>

            <ul className='faq-list'>
              <li className='faq-list-item'>
                <button className='faq-question-button' onClick={isPressed1? () => setisPressed1(false) : () => setisPressed1(true)}>
                  What is FMF?
                </button>
                <div className={!isPressed1 ? 'faq-answer closed' : 'faq-answer open'}>
                  <span>
                    FMF is an award winning streaming service that offers some deep dive podcasts which you would not hear on your traditional platform such as Spotify and Apple Podcast.  You can listen and watch to all the podcasts you want, whenever you want-all for the cost of your support for the cause of FMF!
                  </span>
                </div>
              </li>

              <li className='faq-list-item'>
                <button className='faq-question-button' onClick={isPressed2? () => setisPressed2(false) : () => setisPressed2(true)}>
                  How much does FMF cost?
                </button>
                <div className={!isPressed2 ? 'faq-answer closed' : 'faq-answer open'}>
                  <span>
                    Did I not make myself clear earlier....its free...zip...nada...sign up now!
                  </span>
                </div>
              </li>

              <li className='faq-list-item'>
                <button className='faq-question-button' onClick={isPressed3? () => setisPressed3(false) : () => setisPressed3(true)}>
                  Where can I hear?
                </button>
                <div className={!isPressed3 ? 'faq-answer closed' : 'faq-answer open'}>
                  <span>
                  Umm... I guess anywhere you really want...in the bathroom, in the shower, on a train, at a wedding.
                  </span>
                </div>
              </li>

              {/* <li className='faq-list-item'>
                <button className='faq-question-button' onClick={isPressed4? () => setisPressed4(false) : () => setisPressed4(true)}>
                  Where can I watch?
                </button>
                <div className={!isPressed4 ? 'faq-answer closed' : 'faq-answer open'}>
                  <span>
                    Umm... I guess anywhere you really want...in the bathroom, in the shower, on a train, at a wedding.
                  </span>
                </div>
              </li> */}

              <li className='faq-list-item'>
                <button className='faq-question-button' onClick={isPressed5? () => setisPressed5(false) : () => setisPressed1(true)}>
                  How do I cancel?
                </button>
                <div className={!isPressed5 ? 'faq-answer closed' : 'faq-answer open'}>
                  <span>
                    Now why would you want to do that....
                  </span>
                </div>
              </li>

              <li className='faq-list-item'>
                <button className='faq-question-button' onClick={isPressed6? () => setisPressed6(false) : () => setisPressed6(true)}>
                  What can I hear on FMF?
                </button>
                <div className={!isPressed6 ? 'faq-answer closed' : 'faq-answer open'}>
                  <span>
                    All my podcasts episodes, clips, and anything else that will come along.
                  </span>
                </div>
              </li>

              <li className='faq-list-item'>
                <button className='faq-question-button' onClick={isPressed7? () => setisPressed7(false) : () => setisPressed7(true)}>
                  Is FMF good for kids?
                </button>
                <div className={!isPressed7 ? 'faq-answer closed' : 'faq-answer open'}>
                  <span>
                    No, definitely not.
                  </span>
                </div>
              </li>
            </ul>

            <form className='form-email-form'>
              <h3 className='email-form-title'>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="email-form">

                <ul className='simpleForm'>
                  <li className='field-email'>
                    <div className='input-email'>
                      <div className='input-placement'>
                        <label className='input_email' placeholder='email'>
                          <input type="email" className='textField' placeholder='Email address' defaultValue={localStorage.getItem('email')}  onChange={(e) => setEmail(e.target.value)}/>
                          <label className='placeLabel' >Email address</label>
                        </label>
                      </div>
                      <div className='inputError'>{bottomMessage}</div>
                    </div>
                  </li>
                </ul>

                <div className='email-form-button-container'>
                  <button className='blue-button'  onClick={handleSignUpButtonBottom}>
                    <span className='button-text'>Get Started</span>                    
                  </button>
                </div>

              </div>
            </form>
          </div>

          <div className="center-pixel" style={{position: "absolute"}}></div>

        </div>

        {/* Footer */}

        <div className='containers register-footer-container register-container-no-border'>
          <div className="register-footer-wrapper centered dark">
            <div className='footer-divider'>
            </div>
            <div className='site-footer'>
              <p className='footer-top'>
                Questions? Call&nbsp;
                <a className='footer-top-a' href='tel:0-000-000-000'>0-000-000-000</a>
              </p>
              <ul className='footer-links structural'>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>FAQ</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Help Center</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Account</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Media Center</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Investor Relations</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Jobs</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Redeem Gift Cards</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Buy Gift Cards</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Ways to Watch</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Terms of Use</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Privacy</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Cookie Preferences</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Corporate Information</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Contact Us</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Speed Test</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Legal Notices</span>
                  </a>
                </li>
                <li className='footer-link-item'>
                  <a className='footer-link' href='#'>
                    <span>Only on FMF</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="center-pixel" style={{position: "absolute"}}></div>
        </div>

      </div>
    </div>
  );
}

export default Register;