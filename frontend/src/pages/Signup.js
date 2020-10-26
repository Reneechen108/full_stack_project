import React, { Component } from 'react';
import { observer } from 'mobx-react';
import UserStore from '../stores/UserStore';
import LoginForm from '../components/LoginForm';
import SignupFrom from '../components/SignupForm';
import Loading from '../components/loading';
import AccountNav from '../components/AccountNav'

class Signup extends Component {
    async componentDidMount() {
        try{
            let res = await fetch('/isSignUp', {
                method: 'post',
                header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
            });
            let result = await res.json();
            if(result && result.success){
                UserStore.loading = false;
                UserStore.isSignup = true;
                UserStore.username = result.username;
                UserStore.password = result.password;
            }else{
                UserStore.loading = false;
                UserStore.isSignup = false;
            }
        }catch(e){
            UserStore.loading = false;
            UserStore.isSignup = false;
        }
    }
   
    render() {
        if(UserStore.loading){
            return <Loading />
        }else{
            if(UserStore.isSignup){
                return (
                    <div className="app">
                        <div className="container">
                            <LoginForm/> 
                        </div>
                    </div>
                )
            }
        }
        return (
            <div className="login">
                <div className="container">
                    <AccountNav />
                    <SignupFrom/>
                </div>
            </div>
        )
    }
}

export default observer(Signup);