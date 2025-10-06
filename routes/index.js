// index.js router 

import { Router } from "express";

const router = Router();


const messages = [
    {
        text: "Hi there, I'm a robot bro!",
        user: "Robotbro",
        added: new Date()
    },
    {
        text: "Hello World, I'm an Alien!",
        user: "Alien Bob",
        added: new Date()
    }
];

const links = [
    { href: "/", text: "to Home bro" },
    { href: "/new", text: "click here to add a new message bro" }
];


// GET INDEX
router.get("/", (req, res) => {
    res.render("index", { messages: messages, links: links })
})

// POST MESSAGE FORM
router.post("/new", (req, res) => {
    const { messageText, userName } = req.body;
    messages.push({ text: messageText, user: userName, added: new Date() });
    res.redirect("/")
})

// GET MESSAGE FORM
router.get("/new", (req, res) => {
    res.render("form", { links: links })
})

// GET MESSAGE 
router.get("/messages/:id", (req, res) => {
    const message = messages[req.params.id]
    res.render("message", { links: links, message: message })
})

export default router;