const express = require("express");
const router = express();
const path = require("path");

router.get("/", (reg, res) => {
    // res.sendFile(path.join(__dirname, "../", "views", "index.pug"));
    res.render("index", {
        title: "Hello World",
        h1: ["best online", "Learning system"],
        h2: ["Learn From The Experts","Book Library & Store","Best Course Online","Best Industry Leaders"],
        h4: "Get started with online courses",
        p: ["Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium","Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."]
    })
})

module.exports = router;