module.exports = {
    async create(req, res) {


        const imgToCreate = req.body.imgcmd

        //if (validateFilters) return res.status(422).send({ message: `${validateFilters.message}` })


        return res.status(200).send({ message: `User ${req.body.imgcmd} successfully created! 😃` })

    },
}