const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    `<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login" method="POST">
    
    <input type="text" id="username" name="username" placeHolder="username" required>
    <button>Submit</button></form>`
  );
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  res.redirect("/chat");
});

module.exports = router;
