import React from 'react'

function register() {
    return (
        <div>
            <img className="moon" src="../assets/moon.png" alt="" />
            <img className="cloud1" src="../assets/cloud1.png" alt="Cloud" />
            <img className="cloud2" src="../assets/cloud1.png" alt="Cloud" />

            <div className="login">

                <span className="borderSpin">
                </span>

                <form action="#" id="login">

                    <h2>SIGN UP</h2>

                    <div className="names">
                        <div className="inputField">

                            <input type="text" name="firstName" id="firstName" required="required" />
                            <span>First Name</span>
                            <i></i>

                        </div>

                        <div className="inputField">

                            <input type="text" name="lastName" id="lastName" required="required" />
                            <span>Last Name</span>
                            <i></i>

                        </div>
                    </div>

                    <div className="inputField">

                        <input type="text" name="username" id="username" required="required" />
                        <span>Username</span>
                        <i></i>

                    </div>

                    <div className="inputField">

                        <input type="email" name="emailAddress" id="emailAddress" required="required" />
                        <span>Email Address</span>
                        <i></i>

                    </div>

                    <div className="inputField">

                        <input type="password" name="password" id="password" required="required" />
                        <span>Password</span>
                        <i> </i>

                    </div>

                    <div className="inputField">

                        <input type="password" name="confirmPassword" id="confirmPassword" required="required" />
                        <span>Confirm Password</span>
                        <i></i>

                    </div>

                    <div className="links">

                        <a href="./login.html">Already have an account? Then Log In</a>

                    </div>

                    <div className="submit-btn">
                        <input type="submit" value="CREATE ACCOUNT" />
                    </div>

                </form>

            </div>
        </div>
    )
}

export default register