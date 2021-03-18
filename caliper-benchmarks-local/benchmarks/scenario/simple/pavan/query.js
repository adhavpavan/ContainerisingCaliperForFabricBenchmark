
'use strict';

module.exports.info  = 'querying accounts';


let bc, contx;
let account_array;

module.exports.init = function(blockchain, context, args) {
    const open = require('./open.js');
    bc       = blockchain;
    contx    = context;
    account_array = open.account_array;

    return Promise.resolve();
};

module.exports.run = function() {
    const acc  = account_array[Math.floor(Math.random()*(account_array.length))];

        let args = {
            chaincodeFunction: 'queryCar',
            chaincodeArguments: [acc],
        };

        return bc.bcObj.querySmartContract(contx, 'fabcar', '1', args, 10);
};

module.exports.end = function() {
    // do nothing
    return Promise.resolve();
};
