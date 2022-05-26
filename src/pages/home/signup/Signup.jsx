import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { register } from '../../../routes/auth';
import './signup.css';

function Signup() {
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState(`${localStorage.getItem('email')}`);
    const[message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        register( {email, password } ).then((response) => {
            if(response.status === 200){
                navigate('/login');
            }
        }).catch((error) => {
            if(error.response.status === 403 || error.response.status === 401 || error.response.status === 503){
                setMessage(error.response.data.message);
            }
        })
    }

  return (
    <div className="signup">
        <div className='basicLayout notMobile moderInApp hasLargeTypography signupSimplicity-registration simplicity'>

            <div className='signup-nfHeader noBorderHeader login-header signupBasicHeader'>
                <a href='/register' className='nfLogo signupBasicHeader'>
                    <p className='signup-logo'>
                        FMF Podcast  
                    </p>
                </a>
                <a href='/login' className='signup authLinks signupBasicHeader'>Sign In</a>
            </div>

            <div className='simpleContainer'>
                <div className='centerContainer' style={{display: 'block', transform: 'none', opacity: '1', transitionDuration: '250ms'}}>
                    <form>

                        <div className='regFormContainer'>
                            <div className=''>
                                <div className='stepHeader-container'>
                                    <div className='stepHeader'>
                                        <h1 className='stepTitle'>
                                            Create a password to start your membership
                                        </h1>
                                    </div>
                                </div>

                                <div>
                                    <div className='contextRow' data-uia='contextRowDone'>
                                        Just a few more steps and you're done!
                                    </div>

                                    <div className='contextRow' data-uia='contextRowPaperWork'>
                                        We hate paperwork, too.
                                    </div>

                                    <ul className='simpleForm structural ui-grid'>
                                        <li className='nfFormSpace'>
                                            <div className='nfInput nfInputOversize'>
                                                <div className='nfInputPlacement'>
                                                    <label className='input_id'>
                                                        <input className='nfTextField' type='email' placeholder='Email' defaultValue={localStorage.getItem('email')} onChange={(e) => setEmail(e.target.value)}/>
                                                        <label className='placeLabel'>
                                                            Email
                                                        </label>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='nfFormSpace'>
                                            <div className='nfInput nfInputOversize'>
                                                <div className='nfInputPlacement'>
                                                    <label className='input_id'>
                                                        <input className='nfTextField' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                                                        <label className='placeLabel'>
                                                            Add a password
                                                        </label>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='submitBtnContainer'>
                                <button className='nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize' type='submit' onClick={handleSignUp}>
                                    Submit
                                </button>
                                <div className='inputError'>
                                    {message}
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <div className='signup-footer-wrapper centered' style={{transitionDuration: '250ms', opacity: '1'}}>
                <div className="signup-footer-divider"></div>
                <div className="signup-site-footer">
                    <p className='signup-footer-top'>
                    Questions? Call <a className='signup-footer-top-a' href='tel:0-000-000-0000'>0-000-000-0000</a>
                    </p>
                    <ul className='signup-footer-links structural'>
                        <li className='signup-footer-link-item'>
                            <a className='signup-footer-link' href='#'>
                                <span>FAQ</span>
                            </a>
                        </li>

                        <li className='signup-footer-link-item'>
                            <a className='signup-footer-link' href='#'>
                                <span>Help Center</span>
                            </a>
                        </li>

                        <li className='signup-footer-link-item'>
                            <a className='signup-footer-link' href='#'>
                                <span>Terms of Use</span>
                            </a>
                        </li>

                        <li className='signup-footer-link-item'>
                            <a className='signup-footer-link' href='#'>
                                <span>Privacy</span>
                            </a>
                        </li>

                        <li className='signup-footer-link-item'>
                            <a className='signup-footer-link' href='#'>
                                <span>Cookie Preferences</span>
                            </a>
                        </li>

                        <li className='signup-footer-link-item'>
                            <a className='signup-footer-link' href='#'>
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

export default Signup;