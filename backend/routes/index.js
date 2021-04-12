var express = require('express');
var con = require("../databaseHandler");
var router = express.Router();
var nodemailer = require("nodemailer");
var bcrypt = require("bcrypt");
const passport = require('passport');
var localStrategy = require('passport-local').Strategy;
// var session = require('express-session');
require('../passport')(passport);
require("dotenv").config()

/* GET home page. */
router.get("/",(req,res)=>{
  res.end("Node.js Working!");
})

// PREPAID PLANS LOAD
router.post('/planpost',(req,res)=>{
  var {calls, data, amt, validity} = req.body;
  con.query("INSERT INTO prepaid (amt,calls,data,validity) VALUES ('"+amt+"','"+calls+"','"+data+"','"+validity+"')",(err,data)=>{
    if(err) throw err
    else{
      res.redirect("/admin-dashboard");
    }
  }); 
});

router.get('/prepaid/plans',(req,res)=>{
  con.query("SELECT * FROM prepaid",(err,data)=>{
    if (err) {throw err};
    res.send(data);
  })
});

// POSTPAID PLANS LOAD
router.post('/postplanpost',(req,res)=>{
  var {calls, data, amt, member, validity} = req.body;
  con.query("INSERT INTO postpaid (amt,calls,data,member,validity) VALUES ('"+amt+"','"+calls+"','"+data+"','"+member+"','"+validity+"')",(err,data)=>{
    if(err) throw err
    else{
      res.end();
    }
  }); 
});
router.get('/postpaid/plans',(req,res)=>{
  con.query("SELECT * FROM postpaid",(err,data)=>{
    if (err) {throw err};
    res.send(data);
  })
});

// NEW PREPAID SIM LOAD
router.post('/newprepaidrequest',(req,res)=>{
  var { service, name, email, dob, gender, address} = req.body;
  con.query("INSERT INTO newprepaid (service, name, email, dob, gender, address) VALUES ('"+service+"','"+name+"','"+email+"','"+dob+"','"+gender+"','"+address+"')",(err,data)=>{
    if(err) throw err
    else{
      res.end();
    }
  }); 
});

// NEW POSTPAID SIM LOAD
router.post('/newpostpaidrequest',(req,res)=>{
  var { service, name, email, dob, gender, address} = req.body;
  con.query("INSERT INTO newprepaid (service, name, email, dob, gender, address) VALUES ('"+service+"','"+name+"','"+email+"','"+dob+"','"+gender+"','"+address+"')",(err,data)=>{
    if(err) throw err
    else{
      res.end();
    }
  }); 
});

// SHOW CONNECTION REQUEST IN ADMIN PANEL
router.get('/admin-dashboard',(req,res)=>{
    con.query("SELECT * FROM newprepaid",(err,data)=>{
      if (err) {throw err};
      res.send(data);
    })
});

// NEW ACTIVE USER REQUEST LOAD
router.post('/add-to-active-customer',(req,res)=>{
  var { service, name, email, dob, gender, address} = req.body;
  con.query("INSERT INTO activecustomer (service, name, email, dob, gender, address) VALUES ('"+service+"','"+name+"','"+email+"','"+dob+"','"+gender+"','"+address+"')",(err,data)=>{
    if(err) throw err
    else{
      con.query(`DELETE FROM newprepaid WHERE email = '${email}' and address = '${address}'`,(err,data2)=>{
        if(err) throw err
        else{
        }
      })
    }
  }); 
});


// REJECT NEW USER REQUEST FROM ADMIN PANEL
router.post("/delete-from-newprepaid",(req,res)=>{
  var { service, name, email, dob, gender, address} = req.body;
  con.query(`DELETE FROM newprepaid WHERE email = '${email}' and address = '${address}'`,(err,data2)=>{
    if(err) throw err
    else{
    }
  });
})

// SEARCH CUSTOMER

router.post("/search-customer",(req,res)=>{
  var { service, email } = req.body;
  con.query(`SELECT * FROM activecustomer where email = '${email}' and service = '${service}'`,(err, resp)=>{
    if (err) throw err
    else{
      res.send(resp);
    }
  })
});


// GENERATE BILL AND SEND TO CUSTOMERS
router.post("/mail-to-customer",(req,res,next)=>{
  var {email, bill} = req.body;

  let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: process.env.MAIL_ID, // Put your own email here and register yourself as Employee
        pass: process.env.MAIL_PASSWORD // Your own email password & Enable 3rd Party Option
    } 
  });

  let mailDetails = { 
    from: process.env.MAIL_ID, 
    to: `${email}`, 
    subject: 'Bill for the previous month',
    text: `Hello Sir/Ma'am,\n     Your bill for the previous month is Rs. ${bill}. If you want to pay the bill online, pay the bill online and collect the receipt else you can also visit our office and pay the bill and collect the hard copy of your receipt. Our office is open from 10 AM to 7 PM from Monday to Saturday.`
  };

  mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        //('Error Occurs'); 
    } else { 
        //('Email sent successfully'); 
    }
    res.end();
  }); 

})

// GET DEFAULTERS LOAD
router.get("/get-all-defaulters",(req,res)=>{
  con.query("SELECT * FROM defaulters",(err,data)=>{
    if(err) throw err
    else{
      res.send(data);
    }
  })
});

// REJECT DEFAULTERS
router.post("/cancel-def",(req,res)=>{
  var {email} = req.body;
  con.query(`DELETE FROM defaulters where email = '${email}'`,(err,data)=>{
    if(err) throw err
    else{
      res.end();
    }
  })
});

router.post("/add-user",(req,res)=>{
  var {name,email,password,cpassword} = req.body;
  if(password === cpassword){
    con.query(`SELECT * FROM users WHERE email = '${email}'`,(err,data)=>{
      //("1st command executed!");
      if(err) throw err
      else{
        if(data[0]) { 
          //(`User : ${data}`);
          res.end("User already registered!")
        }
        else{
          bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            //(salt,"->",password)
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) throw err;
              //(hash)
              password = hash;
          con.query(`INSERT INTO users (name, email, password, usertype) VALUES ('${name}', '${email}', '${password}','USER')`,((err,data)=>{
            //("User registered!");
          })
          )})
        })
        }
      }
    })
  }else{
    res.send("Password Mismatch!")
  }
  
  res.end();
})


router.post('/login-user',passport.authenticate('local'),function(req,res){
  req.session.userid = req.user[0].id;
  res.json(req.user);
});

router.post("/logout-user",(req,res)=>{
    req.logout();
    req.session.destroy();
    res.end();
});


router.post("/search-customer-by-email",(req,res)=>{
  var { email } = req.body;
  con.query(`SELECT * FROM activecustomer WHERE email = "${email}"`,(err, resp)=>{
    if (err) throw err
    else{
      res.send(resp);
    }
  })
})

module.exports = router;
