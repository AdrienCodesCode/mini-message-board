// index.js router 

import { Router } from "express";

const router = Router();


const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const links = [
    { href: "/", text: "Home" },
    { href: "/new", text: "Form" }
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