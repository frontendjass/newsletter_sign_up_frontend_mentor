import React, { useState } from "react";

function SignUp() {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        
        setIsSubscribed(true);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    return (
        <div className="wrapper">
            <section id='sign-up'>
                {!isSubscribed ? (
                    <>
                        <img src="/assets/images/illustration-sign-up-mobile.svg" alt="hero"/>
                        <h1 className="dark-slate-gray">Stay Updated!</h1>
                        <p  className="dark-slate-gray">Join 60,000+ product managers receiving monthly updates on:</p>
                        <ul>
                            <li  className="dark-slate-gray">Product discovery and building what matters</li>
                            <li  className="dark-slate-gray">Measuring to ensure updates are a success</li>
                            <li  className="dark-slate-gray">And much more!</li>
                        </ul>
                        <form id="sign-up-form" onSubmit={handleSubmit}>
                            <label htmlFor='email' className="dark-slate-gray">Email address</label>
                            <input onChange={handleEmailChange} value={email} type="email" id="email" name="email" placeholder="email@company.com" required/>
                            <button type="submit">Subscribe to monthly newsletter</button>
                        </form>
                    </>
                ) : (
                    <div className="subscribed-wrapper">
                        <div>
                            <img src="/assets/images/icon-success.svg"/>
                            <h1>Thanks for subscribing!</h1>
                            <p>A confirmation email has been sent to <span className="dark-slate-gray bold">{email}</span>. 
                            Please open it and click the button inside to confirm your subscription.</p>
                            
                        </div>
                        <button onClick={() => setIsSubscribed(false)}>Dismiss message</button>
                    </div>
                )}
            </section>
                
        </div>
    )
}

export default SignUp;