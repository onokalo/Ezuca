const express = require("express");
const path = require("path");

// ROUTES //
const home = require("./routes/index");
// const about = require("./routes/about");
// const courses = require("./routes/courses");
// const blog = require("./routes/blog");
// const contact = require("./routes/contact");

const PORT = 3000;
const app = express();

app.set("views", "views");
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname,"public")));

app.use(home);
// app.use(about);
// app.use(courses);
// app.use(blog);
// app.use(contact);

app.listen(PORT);