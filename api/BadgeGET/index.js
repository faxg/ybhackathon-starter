/*
Please use async / promise style operations. 
You can "promisify" synchronous operations, e.g. read from a local file
*/
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

// Axios is a http client lib
// see https://github.com/axios/axios#axios-api
const axios = require('axios'); 


module.exports = async function (context, req) {
    context.log('Javascript HTTP trigger: GET badge');

    const responseMessage = `img/builder-qr.png`
    let data = await readFileAsync ('./BadgeGET/sample.dat')


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: data
    };
}