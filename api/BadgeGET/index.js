module.exports = async function (context, req) {
    context.log('Javascript HTTP trigger: GET badge');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = `img/builder-qr.png`

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}