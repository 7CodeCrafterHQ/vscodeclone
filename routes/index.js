var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require("path");
const filePath = path.join(__dirname,'../files');


router.get("/",function(req,res,next){
fs.readdir("files",{withFileTypes:true},function(err,data){
  res.render("index",{data});
})
})
router.get("/formfile",function(req,res){ 
     fs.writeFile(`${filePath}/${req.query.file}`,"",function(err){
      res.redirect("/")
     })
});
router.get('/formfolder',function(req,res){
    fs.mkdir(`${filePath}/${req.query.folder}`, function(err){
    res.redirect("/")
  })
});


router.get("/fileshow/:filename",function(req,res){
  let filename = req.params.filename
  fs.readdir("files",{withFileTypes:true},function(err,data){
    fs.readFile(`files/${filename}`,'utf-8',(err,file)=>{
      res.render("fileshow",{data,filename,file});
    })
  })
})
router.get("/folder/delete/:filename",function(req,res){
  var file = req.params.filename;
  fs.rmdir(`files/${file}`,(err,file)=>{
    res.redirect("/")
  })

})

router.get("/file/delete/:filename",function(req,res){
  var file = req.params.filename;
  fs.unlink(`files/${file}`,(err,file)=>{
    res.redirect("/")
  })
})
router.get("/fileupdate/:filename",function(req,res){
  var file = req.params.filename;
  fs.writeFile(`files/${file}`,req.query.textarea, function(err){
    res.redirect('back');
  })
})

router.post("/edit/:filename",function(req,res){
  fs.rename(`./files/${req.params.filename}`,`./files/${req.body.updatefilename}`,function(err){
    res.redirect("back");
    // res.send("hay")
  })
}) ;
module.exports = router;
