var Cryptr = require('cryptr');
var express=require("express");
var connection = require('../connection/connection');
// cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=function(req,res){
    var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password);
  console.log(req.body)
    var users={
        //"name":req.body.name,
        "user_name":req.body.user_name,
        "password":encryptedString
        //"created_on":today,
        //"last_modified":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        console.log(error)
        res.json({
            status:false,
            message:'The query failed.'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}
