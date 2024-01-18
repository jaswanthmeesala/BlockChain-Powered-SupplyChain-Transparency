const SimpleStorage = artifacts.require('SimpleStorage');
const simpleStorageInstance = await SimpleStorage.deployed();
module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};
