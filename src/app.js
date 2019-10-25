const path = require('path');
const express = require('express');
const hbs = require('hbs');
const blocksList = require('./utils/blocksList');
const blockData = require('./utils/blockData');
const blockTransactions = require('./utils/blockTransactions');

const app = express();
const pathToPubliDir = path.join(__dirname, '../public');

const port = process.env.PORT || 3000; //if localhost, env will be null and assign 3000

app.use(express.static(pathToPubliDir));

app.set('view engine', 'hbs');

app.get('/blockTransactions', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let page = 1;
    if(req.query.page){
        page = parseInt(req.query.page)
    }
    if(!req.query.hash){
        return res.send({
            error: "Hash is mandatory."
        });
    }
    const hash = req.query.hash;
    blockTransactions(hash, page, (error, { tx, txTotalCount, startCount, endCount, totalPages } = {}) => {
        if (error) {
            return res.send({
                error
            })
        }
        res.send({
            txTotalCount, 
            startCount, 
            endCount,
            totalPages,
            tx
        });
    });
});

app.get('/blockData', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(!req.query.hash){
        return res.send({
            error: "Hash is mandatory."
        });
    }
    const hash = req.query.hash;
    blockData(hash, (error, { size, block_index, prev_block, tx_count } = {}) => {
        if (error) {
            return res.send({
                error
            })
        }
        res.send({
            size, 
            block_index,
            prev_block,
            tx_count,
            hash
        });
    });
});


app.get('/blocksList', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let page = 1;
    if(req.query.page){
        page = parseInt(req.query.page)
    }
    blocksList(page, (error, { response, blocksTotalCount, startCount, endCount, totalPages } = {}) => {
        if (error) {
            return res.send({
                error
            })
        }
        res.send({
            blocksTotalCount,
            page,
            startCount,
            endCount,
            totalPages,
            blocksList: response,
        });
    });

});

app.listen(port, () => {
    console.log('server is running on port' + port);
});


	




