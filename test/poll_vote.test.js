const PollVote = artifacts.require("PollVote");

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract("PollVote", async ([deployer, addr1, addr2, addr3, addr4]) => {
  let token
  before(async () => {
      token = await Token.new()
  })
});
