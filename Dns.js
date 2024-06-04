const { error } = require('console');
var dns = require('dns');
const { Server } = require('http');
const { hostname } = require('os');

websit = 'facebook.com';

// dns.lookup(websit,(err,address,family)=>{
//     console.log('Address:',address);
//     console.log('Family:',family);
// })

// dns.lookup(websit, function onlookup(err,address,family){
//     console.log('Address:',address);
//     dns.reverse(address,(err,hostname)=>{
//         console.log('Hostname:',JSON.stringify(hostname));
//     })
// })

// dns.lookupService('127.0.0.1',5500,(err,hostname,server)=>{
//     console.log('Hostname:',hostname);
//     console.log('Service:',server);
// })

// dns.resolve('facebook.com','AAAA',(err,address,hostname)=>{
//     console.log('Address:',address);
//     console.log('Hostname:',hostname);
// })

// dns.resolveAny('www.google.com',(e,data)=>{
//     console.log('Data:',JSON.stringify(data,null,2));
//     dns.lookupService("142.250.192.132",2004,(err,hostname,server)=>{
//     console.log('Hostname:',hostname);
//     console.log('Service:',server);
// })
// })
