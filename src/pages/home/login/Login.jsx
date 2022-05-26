import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { userlogin } from '../../../routes/auth';
import { login } from "../../../authContext/apiCalls";
import { AuthContext } from "../../../authContext/AuthContext";
import './login.css';

function Login() {
  const[termsOfUseButton, setTermsOfUseButton] = useState(false);
  const[email, setEmail] = useState(`${localStorage.getItem('email')}`);
  const[password, setPassword] = useState("");
  const[message, setMessage] = useState("");
  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login( {email, password }, dispatch )
    userlogin( { email, password } ).then((response) => {
      if(response.status === 200){
        navigate('/')
      }
    }).catch((error) => {
      setMessage(error.response.data.message);
    })
  };

  return (
    <div className="login">

      <div className='login-wrapper hybrid-login-wrapper'>
        <div className="login-wrapper-background">
          <img className='background-img' src='https://ulisesphotography545827756.files.wordpress.com/2022/03/ran.jpg?w=1024' alt=''/>
        </div>


        <div className='nfHeader login-header signupBasicHeader'>
          <a href='/register' className='nfLogo signupBasicHeader'>
            <p className='nfLogo'>
              FMF Podcast  
            </p>
          </a>
        </div>

        
        <div className="login-body hybrid-login-form hybrid-login-form-signup">
          <div className='login-container'>

              <div className='form-main'>
                <h1>Sign In</h1>
                <form className='login-form'>  

                  <div className='nfInput nfEmailInput login-field login-input'>
                    <div className='input-placement'>
                      <div className='nfEmail'>
                        <label className='input_id'>
                          <input type="email" className='textField' placeholder='Email' defaultValue={localStorage.getItem('email')} onChange={(e) => setEmail(e.target.value)}/>
                          <label className='placeLabel'>Email</label>
                        </label>
                      </div>
                    </div>  
                  </div>

                  <div className='nfInput nfPasswordInput password-field login-input'>
                    <div className='input-placement'>
                      <div className='nfPassword'>
                        <label className='input_id'>
                          <input type="password" className='textField' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                          <label className='placeLabel'>Password</label>
                        </label>
                      </div>
                    </div>    
                  </div>

                  <button className='login-button btn btn-submit btn-small' onClick={handleLogin}>Sign In</button>
                  <div className='inputError'>
                    {message}
                  </div>
                  <div className="form-help">
                    <a href='/loginHelp' className='login-help-link'>Need help?</a>
                  </div>

                </form>
              </div>

              <div className='form-other'>
                <div className="form-signup-now">
                  New to FMF?&nbsp;
                  <a href='/register'>Sign up now</a>
                  .
                </div>
                <div className="terms-of-use">
                  <p>
                    <span>
                      This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </span>
                    &nbsp;
                    <button className={!termsOfUseButton ? "terms-of-use-link-button" : "terms-of-use-link-button-hidden"} onClick={() => setTermsOfUseButton(true)}>Learn more.</button> 
                  </p>
                  <div className={!termsOfUseButton ? 'terms-of-use-disclosure' : 'terms-of-use-disclosue-visible'}>
                    <span className='terms-of-use-text'>                       
                      The information collected by Google reCAPTCHA is subject to the 
                      Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a>
                      , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                    </span>
                  </div>
                </div>
              </div>

          </div>
        </div>

        <div className='login-footer-wrapper centered'>
          <div className="login-footer-divider"></div>
          <div className="login-site-footer">
            <p className='login-footer-top'>
              Questions? Call <a className='login-footer-top-a' href='tel:0-000-000-0000'>0-000-000-0000</a>
            </p>

            <ul className='login-footer-links structural'>

              <li className='login-footer-link-item'>
                <a className='login-footer-link' href='#'>
                  <span>FAQ</span>
                </a>
              </li>

              <li className='login-footer-link-item'>
                <a className='login-footer-link' href='#'>
                  <span>Help Center</span>
                </a>
              </li>

              <li className='login-footer-link-item'>
                <a className='login-footer-link' href='#'>
                  <span>Terms of Use</span>
                </a>
              </li>

              <li className='login-footer-link-item'>
                <a className='login-footer-link' href='#'>
                  <span>Privacy</span>
                </a>
              </li>

              <li className='login-footer-link-item'>
                <a className='login-footer-link' href='#'>
                  <span>Cookie Preferences</span>
                </a>
              </li>

              <li className='login-footer-link-item'>
                <a className='login-footer-link' href='#'>
                  <span>Corporate Information</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

    </div>
  </div>
  );
}

export default Login;