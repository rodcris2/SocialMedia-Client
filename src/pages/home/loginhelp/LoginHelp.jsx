import './loginhelp.css';
import { useState } from 'react';

function LoginHelp() {
  const[termsOfUseButton, setTermsOfUseButton] = useState(false);

  const handleTermsOfUseButton = (e) => {
    e.preventDefault();
    setTermsOfUseButton(true);
  }
  
  return (
    <div className="loginhelp">

      <div className='loginhelp-login-wrapper'>

        <div className="login-wrapper-background login-wrapper-default"></div>

        <div className='nfHeader loginhelp login-header signupBasicHeader'>
          <a href='/register' className='nfLogo signupBasicHeader'>
            <p className='login-logo'>
              FMF Podcast  
            </p>
          </a>
          <a href='/login' className='loginhelp authLinks signupBasicHeader'>Sign In</a>
        </div>

        <div className='loginhelp login-body'>

          <div className='login-content'>
            <div className='password-reset-wrapper'>
              <h1 className='password-reset-header'>Forgot Email/Password</h1>
              <div>
                <p>We will send you an email with instructions on how to reset your password.</p>
                <div className='contact-input-wrapper'>
                  <label className='contact-method-input ui-label ui-input-label' placeholder='forgot_password_input'>
                    <span className='ui-label-text'></span>
                    <input type='email' className='ui-text-input error' placeholder='name@example.com'></input>
                    {/* <div className='input-message error'>Please enter a valid email.</div> */}
                  </label>
                </div>
              </div>
              <button className='btn forgot-password-button btn-blue btn-large'>Email Me</button>
              <a className='forgot-password-link' href='#'>I don't remember my email.</a>
            </div>
          </div>

          <div className='terms-of-use'>
            <p>
              <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. </span>
              <button className={!termsOfUseButton ? 'terms-of-use--link-button' : 'terms-of-use--link-button-hidden'} onClick={handleTermsOfUseButton}>Learn more.</button>
            </p>

            <div className={!termsOfUseButton ? 'terms-of-use-disclosure' : 'terms-of-use-disclosue-visible'}>
              <span className='disclosure-text'>
                The information collected by Google reCAPTCHA is subject to the Google&nbsp;
                <a className='privacy-link' href='https://policies.google.com/privacy' target='_blank'>Privacy Policy</a> and&nbsp;
                <a className='terms-link' href='https://policies.google.com/terms' target='_blank'>Terms of Service</a>,
                and is used for providing, maintaining, and improving the reCAPTCHA service and for 
                general security purposes (it is not used for personalized advertising by Google).
              </span>
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

export default LoginHelp;