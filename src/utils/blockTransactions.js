const request = require('request');

const blockTransactions = (hash, page, callback)=>{
    const count = 10;
    const url = `https://blockchain.info/rawblock/${hash}`;
    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to API', undefined)
        }  
        else{
            const startCount = (page - 1) * count;
            const endCount = (page * count);
            let txArray = body.tx.slice(startCount, endCount)
            const totalPages = Math.ceil(body.tx.length/count)
            txArray = txArray.map((item)=> 
            obj = {
                size: item.size,
                weight: item.weight,
                height: item.block_height,
                index: item.block_index,
                time: item.time
            });
            callback(undefined, {
                txTotalCount: body.tx.length,
                startCount: startCount + 1,
                endCount,
                totalPages,
                tx : txArray,
            });
        }
    })
}

module.exports = blockTransactions;