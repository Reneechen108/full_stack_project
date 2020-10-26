import { extendObservable } from 'mobx';

class UserStore{
    constructor(){
        extendObservable(this,{
            loading: true,
            isLoggedIn: false,
            isSignup: false,
            username: '',
            password: '',
            confirmPassword: '',
            email: ''
        })
    }
}

export default new UserStore();