const express = require('express');
let { REQUEST_ID, ACCESS_TOKEN, ENDPOINT, STATUS } = require("../../values");
const router = express.Router();

router.post('/', (req, res, next) => {
    const requestId = req.requestId;
    const accessToken = req.accessToken;
    const endpoint = req.endpoint;
    const status = req.status;

    console.log("Request ID: " + requestId + "\nAccess Token: " + accessToken + "\nEndpoint: " + endpoint + "\nStatus: " + status);

    REQUEST_ID = requestId;
    ACCESS_TOKEN = accessToken;
    ENDPOINT = endpoint;
    STATUS = status;

    next();
})

module.exports = router;
