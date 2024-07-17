const os = require('os');

console.log(os.userInfo())
const data = {
    platform: os.platform(),
    arch: os.arch(),
    version: os.version(),
    cpus: os.cpus().length,
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    net: os.networkInterfaces(),
    uptime: os.uptime(),
    loadavg: os.loadavg(),
    type: os.type(),
    release: os.release(),
    hostname: os.hostname(),
    endianness: os.endianness(),
    homedir: os.homedir(),
    tmpdir: os.tmpdir(),
    // versionInfo: os.versionInfo(),
    // getNetworkInterfaces: os.getNetworkInterfaces(),
    // getLoadavg: os.getLoadavg(),
}
console.log(data);

// / constants: os.constants
//     // event: os.event