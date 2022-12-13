import { expect } from "chai";
import { Contract, BigNumber, Signer } from "ethers";
import hre, { ethers } from "hardhat";

describe("ABT Token", function () {

  let signers: Signer[];

  let testTokenInstance: Contract;

  let user: any;



  before(async () => {
    signers = await ethers.getSigners();

    hre.tracer.nameTags[await signers[0].getAddress()] = "ADMIN";
    hre.tracer.nameTags[await signers[1].getAddress()] = "USER1";

    user = signers[1];

    const ABT = await ethers.getContractFactory("ABT", signers[0]);
    testTokenInstance = await ABT.deploy();
  });


  it("Functions", async function () {
    // console.log(testTokenInstance.functions);

    // console.log(user.address);


    await testTokenInstance.issue(user.address, "Asad")
    await testTokenInstance.issue(user.address, "Asad")
    await testTokenInstance.burn(1)

  })


});