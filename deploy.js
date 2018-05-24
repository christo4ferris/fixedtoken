/*
 SPDX-License-Identifier: Apache2.0
*/
var Web3 = require('web3');
var provider = "https://fabproxy.mybluemix.net";
var web3 = new Web3(new Web3.providers.HttpProvider(provider));
// YOU NEED A REGISTERED FABRIC-EVM ACCOUNT HERE
var abi = require('./abi.json');
var bytecode = require('./bytecode.json');

var owner = '0x613ac660a26a66a52eadc02cda9f6c7e7326e675';
web3.eth.defaultAccount = owner;

var simpletokenContract = web3.eth.contract(abi);
var simpletoken = simpletokenContract.new(bytecode, function (e, contract){
    // console.log(e, contract);
    if (e != null) {
      var addr = web3.eth.getTransactionReceipt(contract.transactionHash).ContractAddress;
      console.log("Address: " + addr);
    }
    else {
      console.log(e);
    }
 })
