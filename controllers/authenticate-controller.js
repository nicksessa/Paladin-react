var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('../connection/connection');
module.exports.authenticate=function(req,res){
  console.log(req.body)
    var user_name=req.body.user_name;
    var password=req.body.password;
   
   
    connection.query('SELECT * FROM users WHERE user_name = ?',[user_name], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
                res.json({
                    status:true,
                    message:'successfully authenticated'
                })
            }else{
                res.json({
                  status:false,
                  message:"User_name and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"User_Name does not exits"
          });
        }
      }
    });
}
