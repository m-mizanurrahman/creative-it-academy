import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSinIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser)
                history.replace(from)
                console.log(signedInUser);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div style={{textAlign:'center', height:'100px', marginLeft: '200px', padding: '80px', width: '1000px'}}>
            <button  onClick={handleGoogleSinIn}>Sign In Using Google</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;