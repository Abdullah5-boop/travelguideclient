import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1> Difference between Authentication and Authorization </h1>
            <p> Authentication
                1. Authentication verifies who the user is.
                2. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                3. Authentication is the first step of a good identity and access management process.
                4. Authentication is visible to and partially changeable by the.

                Authorization
                1. Authorization determines what resources a user can access.
                2. Authorization works through settings that are implemented and maintained by the organization.
                3. Authorization always takes place after authentication.
                4. Authorization isn’t visible to or changeable by the user.
            </p>
            <h1>Other option of authentication</h1>
            <p>
                we use authentication for storing our log-in sign-in data and so on
                other option of authentication is Security tokens ,Biometrics, Phone authentication (two-step authentication), Applications that support push notifications, Mobile tokens, SMS authentication,
                Conclusion.
            </p>
            <h1>Firebase Use for ? </h1>
            <p>there are so many thing done by firebase such as Analytics, Authentication,Cloud messaging,Realtime database, Crashlytics,Performance,Test lab </p>
        </div>
    );
};

export default Blog;