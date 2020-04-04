const sendMessage = require("../modules/sendMessage");
const express = require("express");
const router = express.Router();

router.post("/sendMessage", async (req, res) => {
    var chatId = req.body.chatId;
    var message = req.body.message;
    if (chatId != undefined && message != undefined) {
        var result = await sendMessage(chatId, message);
        res.send(result);
    } else {
        res.json({
            message: "parâmetros inválidos! -- chatID , message"
        });
    }
});

module.exports = router;