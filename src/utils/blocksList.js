const request = require('request');

const blocksList = (page, callback)=>{
    const count = 10;
    const url = `https://blockchain.info/blocks?format=json`;
    request({url, json: true}, (error, response)=>{
        if(error || response === undefined || response === null){
            callback('Unable to connect to API', undefined)
        }
        else{
            const {body} = response;
            const startCount = (page - 1) * count;
            const endCount = (page * count);
            const blockArray = body.blocks.slice(startCount, endCount);
            const totalPages = Math.ceil(body.blocks.length/count)
            callback(undefined, {
                blocksTotalCount: body.blocks.length,
                response: blockArray,
                startCount: startCount + 1,
                endCount,
                totalPages
            });
        }
    })
}

module.exports = blocksList;