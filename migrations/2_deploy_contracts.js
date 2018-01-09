var SimpleToken = artifacts.require("SimpleToken");
var Bounty0x = artifacts.require("Bounty0x");

module.exports = function(deployer) {
    owner = "0x627306090abab3a6e1400e9345bc60c78a8bef57";

    var tokenContract, bountyContract;

    deployer.deploy(SimpleToken).then(function() {
        return SimpleToken.deployed();
    }).then(function(instance) {
        tokenContract = instance;
        return deployer.deploy(Bounty0x, tokenContract.address);
    }).then(function() {
        return Bounty0x.deployed();
    }).then(function(instance) {
        bountyContract = instance;
        tokenContract.transfer(bountyContract.address, 1000000);
    });
};
