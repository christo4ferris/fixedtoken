/*
 SPDX-License-Identifier: Apache2.0
*/
var Web3 = require('web3');
var Bignumber = require('bignumber.js');
var abi = require('./abi.json');
var provider = "https://fabproxy.mybluemix.net";
var web3 = new Web3(new Web3.providers.HttpProvider(provider));
var addr = '0x613ac660a26a66a52eadc02cda9f6c7e7326e675';
console.log("versions");
console.log("api: " + web3.version.api);
//console.log("node: " + web3.version.node);
//console.log("network: " + web3.version.network);
//console.log("ethereum: " + web3.version.ethereum);
//console.log("whisper: " + web3.version.whisper);
console.log("connected: " + web3.isConnected());
var str = 'thequickbrownfoxjumpedoverthelazydog';
console.log("sha: " + web3.sha3(str));
var h = web3.toHex(str);
console.log("hex: " + h);
console.log("ascii: " + web3.toAscii(h));
console.log("hex: " + web3.fromAscii(str));
console.log("dec: " + web3.toDecimal('0x15'));
console.log("hex: " + web3.fromDecimal(21));
console.log("is addr: " + web3.isAddress(addr));
console.log("block: " + web3.defaultBlock);
//console.log("state: " + web3.eth.getStorageAt('0fb2bd4f88c8076f8c2228dcc18f1e5e8b90c431'));
console.log("code: " + web3.eth.getCode('0432d8a78e0d1302a4985e01e4e37fd626259909'));
