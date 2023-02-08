const MemberRole = artifacts.require('MemberRole')

module.exports = function(deployer){
    deployer.deploy(MemberRole)
}