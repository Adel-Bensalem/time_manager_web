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

router.post(
    "/team",
    (req, res) => res.status(200).send({
        id: Math.random(),
        name: req.body.name,
        members: []
    })
);

router.get(
    "/team",
    (req, res) => res.status(200).send([
        {
            id: Math.random(),
            name: req.body.name,
            members: []
        },
        {
            id: Math.random(),
            name: req.body.name,
            members: []
        },
        {
            id: Math.random(),
            name: req.body.name,
            members: []
        }
    ])
);

router.post(
    "/employee",
    (req, res) => res.status(200).send({
        fullName: "John Doe",
        email: "john.doe@test.test",
        role: {
            isGeneralManager: false,
            isManager: req.body.employee.isManager,
            isEmployee: !req.body.employee.isManager
        }
    })
);

module.exports = router;