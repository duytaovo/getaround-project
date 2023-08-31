import React from 'react'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'

const LoginWithGG: React.FC = () => {
  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response)
  }

  return (
    <div>
      <GoogleLogin
        clientId='775654682848-lg5o0dv6ukqnv5nfn65cie2vjob2cr8s.apps.googleusercontent.com'
        buttonText='Login with Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default LoginWithGG
