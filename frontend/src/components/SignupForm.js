import React, { Component } from 'react'
import InputFile from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from '../stores/UserStore';
import InputFiled from './InputField';

class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            buttonDisabled: false
        }
    }
    setInputValue(property, val){
        val = val.trim();
        if(val.length > 40){
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm(){
        this.setState({
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            buttonDisabled: false
        })
    }

    validateForm(){
        if(!this.state.username || !this.state.password || !this.state.confirmPassword || !this.state.email){
            alert('Iuput field missing!');
            return;
        }
        if(this.state.password !== this.state.confirmPassword){
            alert('Password is not mathch!');
            this.setState({
                confirmPassword: ''
            })
            return false;
        }
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email))){
            this.setState({
                email: ''
            })
            alert("You have entered an invalid email address!")
            return false;
        }
        return true;
    }

    async doSignup(){
        if(this.validateForm()){
            console.log("hehe");
            this.setState({
                buttonDisabled: true
            })
            console.log("haha");
            try{
                let res = await fetch('/signup', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.state.username,
                        password: this.state.password,
                        email: this.state.email
                    })
                });
                console.log(res);
                let result = await res.json();
                if(result && result.success){
                    UserStore.isLoggedIn = true;
                    UserStore.username = result.username;
                }else if(result && result.success === false){
                    this.resetForm();
                    alert(result.msg);
                }
            }catch(e){
                console.log(e);
                this.resetForm();
            }
        }
    }

    render() {
        return (
            <div className="loginForm">
                <InputFiled
                    type='text'
                    placeholder='Username'
                    value={this.state.username ? this.state.username : ''}
                    onChange={ (val) => this.setInputValue('username', val) }
                />
                <InputFiled
                    type='password'
                    placeholder='Password'
                    value={this.state.password ? this.state.password : ''}
                    onChange={ (val) => this.setInputValue('password', val) }
                />
                <InputFiled
                    type='password'
                    placeholder='Comfirm Password'
                    value={this.state.confirmPassword ? this.state.confirmPassword : ''}
                    onChange={ (val) => this.setInputValue('confirmPassword', val) }
                />
                <InputFiled
                    type='email'
                    placeholder='Email'
                    value={this.state.email ? this.state.email : ''}
                    onChange={ (val) => this.setInputValue('email', val) }
                />
                <SubmitButton
                    text='Sign Up'
                    disabled={this.state.buttonDisabled}
                    onClick={ () => this.doSignup() }
                />
            </div>
        )
    }
}
export default SignupForm;