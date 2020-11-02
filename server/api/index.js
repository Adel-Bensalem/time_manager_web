const router = require("express").Router();

router.get(
    "/authenticate",
    (req, res) => res.status(200).send({
        token: "This is a fake token, it's useless"
    }));

module.exports = router;