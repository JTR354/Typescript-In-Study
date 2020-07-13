function globalLib(options) {
  console.log(options);
}

globalLib.version = '1.x.x'

globalLib.doSomething = function () {
  console.log(`globalLib do something`);
}