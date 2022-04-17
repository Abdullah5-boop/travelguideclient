import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../Fire.init";

const useFirebase = () => {
    const location =useLocation();
    let from = location.state?.from?.pathname || "/";
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                console.log(user)
                setUser(user)
            })
    }
    const navigate =useNavigate();

    if(user)
    {
        navigate('/home')
    }
    return { user, signInWithGoogle }

}
export default useFirebase;