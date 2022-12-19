const { openai } = require('../config/openApiConfig')
module.exports = {
    async create(req, res) {


        const imgToCreate = req.body.imgcmd

        //if (validateFilters) return res.status(422).send({ message: `${validateFilters.message}` })
        const response = await openai.createImage({
            prompt: `${imgToCreate}`,
            n: 1,
            size: "1024x1024",
        });
        image_url = response.data.data[0].url;


        return res.status(200).send({ message: `Image URL: ${image_url} 😃` })

    },
}