const version = '1.x.2'

function doSomething() {
  console.log(`moduleLib do something`);
}

function moduleLib(options) {
  console.log(options);
}

moduleLib.version = version

moduleLib.doSomething = doSomething

module.exports = moduleLib