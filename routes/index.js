var express = require('express');
var router = express.Router();


let product=[
  {
    productname:"AMG GT ",
    category:"SPORTS-CAR",
    description:"Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG is headquartered in Stuttgart, Baden-Württemberg, Germany",
    image:"https://cdn.bigboytoyz.com/newcar/files/upload/varinat/1608376738462-2021_mercedes-amg_gt_black_series_47_1600x1200.jpg",
    link:"https://www.mercedes-benz.com/en/"
  },
  {
    productname:"LAMBORGHINI SC20",
    category:"SPORTS-CAR",
    description:"Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.the company is owned by the Volkswagen Group through its subsidiary Audi.Automobili Lamborghini S.p.A.",
    image:"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/motorsport/cars/sc20/s/sc20_s_01_m.jpg",
    link:"https://www.lamborghini.com/en-en"

  },
  {
    productname:"PAGANI HUAYRA",
    category:"SPORTS-CAR",
    description:"The stunning new Pagani Huayra Roadster has made its first appearance before making a public debut at Geneva. The Roadster not only loses the glorious Gullwing doors but also gives away 80kg as compared to the hardtop Huayra.the Pagani Huayra Roadster weighs less than Huayra Coupe.Pagani Huayra Roadster",
    image:"https://imgd.aeplcdn.com/600x337/cw/ec/27116/Pontiac-Bonneville-Exterior-90709.jpg?wm=1&q=75",
    link:"https://www.pagani.com/"
  },
  {
    productname:"BUGATTI CHIRON",
    category:"SPORTS-CAR",
    description:"the Bugatti Super Sport and Pur Sport are great examples of that. The Bugatti Chiron is a rare supercar with only 500 units scheduled for production and now the company has commissioned even rare bespoke editons of Chiron as the model is inching closer to the end of its lifecycle.",
    image:"https://c.ndtvimg.com/2022-04/skgup19o_bugatti-chiron_625x300_22_April_22.jpg",
    link:"https://www.bugatti.com/chiron/"
  }


]

let loginError

/* GET home page. */
router.get('/',(req, res) => {
  if(req.session.user){
    res.render('home',{product})
  }
  else{
    res.redirect('/index')
  }
  loginError = null
});

router.get('/index',(req, res) => {
  if(!req.session.user){
    res.render('index' ,{loginError})
    loginError = null
  }
  else{
    res.redirect('/')
  }
});



router.post('/index',(req ,res) => {
  const userInput = {
  email:"admin@gmail.com",
  password:"123"
 }
 console.log(req.body);
  if(req.body.email == userInput.email && userInput.password == req.body.password){
    req.session.user = {userEmail : userInput.email}
    res.redirect('/')
  }
  else{
    loginError = 'credentials is not match'
    res.redirect('/index')
  }
})


//log Out
router.get('/logout',(req, res) => {
  req.session.user = null
  res.redirect('/index')
});

module.exports = router;