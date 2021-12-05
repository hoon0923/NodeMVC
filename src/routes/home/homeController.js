"use strict";

const home = (req,res) => {
    res.render("home/index");
}
// 위와 같음
// function home(req,res){
//     res.render("home/index")    
// }

const login = (req,res) => {
    res.render("home/login");
}
// 위와 같음
// function logi(req,res){
//     res.render("home/login");
// }

module.exports = {
    home
    , login
}
// 위와 같음
// module.exports = {
//       home : home
//     , login : login
// }