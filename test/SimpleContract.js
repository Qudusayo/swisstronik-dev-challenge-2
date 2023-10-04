const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleContract", function () {
  let simpleContract;

  beforeEach(async function () {
    // Deploy the contract before each test
    const SimpleContract = await ethers.getContractFactory("SimpleContract");
    simpleContract = await SimpleContract.deploy("InitialValue");
  });

  it("Should return the initial value", async function () {
    const initialValue = await simpleContract.getValue();
    expect(initialValue).to.equal("InitialValue");
  });

  it("Should allow setting a new value", async function () {
    const newValue = "NewValue";
    await simpleContract.setValue(newValue);
    const updatedValue = await simpleContract.getValue();
    expect(updatedValue).to.equal(newValue);
  });

  it("Should not allow setting an empty string", async function () {
    const emptyValue = "";
    // Use .revertedWith to check for a specific revert reason
    await expect(simpleContract.setValue(emptyValue)).to.be.revertedWith(
      "Input value cannot be empty"
    );
  });

  it("Should return the updated value", async function () {
    const newValue = "UpdatedValue";
    await simpleContract.setValue(newValue);
    const updatedValue = await simpleContract.getValue();
    expect(updatedValue).to.equal(newValue);
  });
});
