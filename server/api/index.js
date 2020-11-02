const router = require("express").Router();

router.post(
    "/authenticate",
    (req, res) => res.status(200).send({
        token: "This is a fake token, it's useless"
    }));

router.get(
    "/authenticate",
    (req, res) => res.status(200).send({
        account: { fullName: "John Doe", email: "john.doe@test.test" },
        role: {
            isGeneralManager: true,
            isManager: false,
            isEmployee: false
        },
    }));

module.exports = router;