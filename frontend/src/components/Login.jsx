import React from 'react'
import styles from'../App.css'

function Login() {

  return (
    <div className={styles.login}>

        <span className={styles.borderSpin}>
            {/* Spining border goes here */}
        </span>

        <form action="#" id="login">

            <h2>LOGIN</h2>

            {/* Input Fields */}
            <div className={styles.inputField}>

                <input type="email" name="emailAddress" id="emailAddress" required="required"/>
                <span>Email Address</span>
                {/* Input goes here */}
                <i></i>

            </div>

            <div className={styles.inputField}>

                <input type="password" name="password" id="password" required="required" />
                <span>Password</span>
                <i></i>

            </div>

            {/* Links */}
            <div className={styles.links}>

                <a href="https://www.google.com">Forgot Password?</a>
                <a href="./register.html">Create a new account</a>

            </div>

            {/* Submit Button */}
            <div className={styles.submit-btn}>
                <input type="submit" value="LOGIN" />
            </div>

        </form>    

    </div>
  )
}

export default Login