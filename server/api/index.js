const router = require("express").Router();

router.post(
    "/authentication",
    (req, res) => res.status(200).send({
        token: "This is a fake token, it's useless"
    })
);

router.get(
    "/authentication",
    (req, res) => res.status(200).send({
        fullName: "John Doe",
        email: "john.doe@test.test",
        role: {
            isGeneralManager: true,
            isManager: false,
            isEmployee: false
        }
    })
);

router.put(
    "/authentication",
    (req, res) => res.status(200).send({
        fullName: "John Doe",
        email: "john.doe@test.test",
        role: {
            isGeneralManager: true,
            isManager: false,
            isEmployee: false
        }
    })
);

module.exports = router;