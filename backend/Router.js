const bcrypt = require('bcrypt');

class Router{
    constructor(app, db){
        this.login(app, db);
        this.logout(app, db);
        this.isLoggedIn(app, db);
    }

    login(app, db) {
        app.post('/login', (req, res) => {
            let username = req.body.username;
            let password = req.body.password;

            let cols = [username];
            console.log("hehe");
            db.query('SELECT * FROM People WHERE username = ?', cols, (err, data, fields) => {

                if(err) {
                    res.json({
                        success: false,
                        msg: 'An error occured, plese try again'
                    })
                    return;
                }

                // Found 1 user with this username
                if(data && data.length === 1) {
                    bcrypt.compare(password, data[0].password, (bcryptErr, verified) => {

                        if(verified) {
                            req.session.userID = data[0].ID;
                            
                            res.json({
                                success: true,
                                username: data[0].u_name
                            })

                            return;
                        }

                        else {
                            res.json({
                                success: false,
                                msg: 'Invalid password'
                            })
                        }
                    });
                }

                else {
                    res.json({
                        success: false,
                        msg: 'User not found, please try again'
                    })
                }

            });

        });
    }

    // signup(app, db){
    //     app.post('/signup', (req, res) => {
    //         let username = req.body.username;
    //         let password = req.body.password;
            
    //         let cols = [username, password];
    //         console.log("hehe");
    //         db.query('INSERT INTO People (`ID`, `username`) VALUES(?,?)', cols, (err, data, fields) => {

    //             if(err) {
    //                 res.json({
    //                     success: false,
    //                     msg: 'An error occured, plese try again'
    //                 })
    //                 return;
    //             }

    //             // Found 1 user with this username
    //             if(data && data.length === 1) {
    //                 console.log(data[0].username);
    //                 res.json({
    //                     success: true,
    //                 })
    //             }

    //             else {
    //                 res.json({
    //                     success: false,
    //                     msg: 'User not found, please try again'
    //                 })
    //             }

    //         });

    //     });
    // }


    logout(app, db) {
        
        app.post('/logout', (req, res) => {
            
            if(req.session.userID) {
                
                req.session.destroy();
                res.json({
                    success: true
                })

                return true;
            } else {
                res.json({
                    success: false
                })
                return false;
            }
        })

    }

    isLoggedIn(app, db) {
        app.post('/logout', (req, res) => {
            
            if(req.session.userID) {
                let cols = [req.session.userID];
                db.query('SELECT * from account WHERE ID = ?', cols, (err, data, fields) => {
                    
                    if(data && data.length === 1){
                        
                        res.json({
                            success: true,
                            username: data[0].u_name
                        })

                        return true;
                    } else {
                        res.json({
                            success: false
                        })
                    }

                });
            } else {
                res.json({
                    success: false
                })
            }
        });

    }
}

module.exports = Router;