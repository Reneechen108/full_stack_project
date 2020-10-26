import React, { Component } from 'react';
import { observer } from 'mobx-react';
import UserStore from '../stores/UserStore';
import LoginForm from '../components/LoginForm'
import SubmitButton from '../components/SubmitButton';
import Loading from '../components/loading';
import AccountNav from '../components/AccountNav'

class Login extends Component {
    async componentDidMount() {
        try{
            let res = await fetch('/isLoggedIn', {
                method: 'post',
                header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
            });
            let result = await res.json();
            if(result && result.success){
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }else{
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }
        }catch(e){
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }
    }
    
    async doLogout() {
        try{
          let res = await fetch('/logout', {
            method: 'post',
            header: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
          let result = await res.json();
          if(result && result.success){
            UserStore.isLoggedIn = false;
            UserStore.username = '';
          }
        }catch(e){
          console.log(e);
        }
    }
    render() {
        if(UserStore.loading){
            return <Loading />
        }else{
            if(UserStore.isLoggedIn){
                return (
                    <div className="app">
                        <div className="container"> 
                            Welcome {UserStore.username}
                            <SubmitButton 
                            text = {'Log Out'}
                            disabled={false}
                            onClick={ () => this.doLogout()}
                            />
                        </div>
                    </div>
                )
            }
        }
        return (
            <div className="login">
                <div className="container">
                    <AccountNav />
                    <LoginForm/>
                </div>
            </div>
        )
    }
}
export default observer(Login);