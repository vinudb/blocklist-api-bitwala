const request = require('request');

const blocksList = (hash, callback)=>{
    const url = `https://blockchain.info/rawblock/${hash}`;
    request({url, json: true}, (error, response)=>{
        if(error || response === undefined || response === null){
            callback('Unable to connect to API', undefined)
        }  
        else{
            const {body} = response;
            callback(undefined, {
                size: body.size, 
                block_index: body.block_index,
                prev_block: body.prev_block,
                tx_count : body.tx.length,
            });
        }
    })
}

module.exports = blocksList;