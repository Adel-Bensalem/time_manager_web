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
            name: "Team 1",
            members: []
        },
        {
            id: Math.random(),
            name: "Team 2",
            members: [
                {
                    fullName: "John Doe",
                    email: "john.doe@test.test",
                    role: {
                        isGeneralManager: false,
                        isManager: true,
                        isEmployee: false
                    }
                },
                {
                    fullName: "John Doe",
                    email: "john.doe@test.test",
                    role: {
                        isGeneralManager: false,
                        isManager: false,
                        isEmployee: true
                    }
                },
                {
                    fullName: "John Doe",
                    email: "john.doe@test.test",
                    role: {
                        isGeneralManager: false,
                        isManager: false,
                        isEmployee: true
                    }
                },
            ]
        },
        {
            id: Math.random(),
            name: "Team 3",
            members: [{
                fullName: "John Doe",
                email: "john.doe@test.test",
                role: {
                    isGeneralManager: false,
                    isManager: true,
                    isEmployee: false
                }
            }]
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

router.post(
    "/clocks",
    (req, res) => res.status(200).send("01/01/2020 00:00:00")
);

module.exports = router;