require("dotenv").config();
const ethers = require("ethers");

async function retrieveRandomStr(providerNetwork, address, slot, block) {
  let provider;

  if (providerNetwork === "mumbai") {
    provider = new ethers.JsonRpcProvider(process.env.MUMBAI_NODE_URL);
  } else if (providerNetwork === "swisstronik") {
    provider = new ethers.JsonRpcProvider(process.env.SWISSTRONIK_NODE_URL);
  } else {
    throw new Error("Invalid provider network");
  }

  const storage = await provider.send("eth_getStorageAt", [
    address,
    slot,
    block,
  ]);
  return storage;
}

async function getValues() {
  try {
    let mumbaiVar = await retrieveRandomStr(
      "mumbai",
      "0x71223138B0FD2848c2657b293892157D0B1EE627",
      "0",
      "latest"
    );
    console.log("Value deployed to Mumbai:", ethers.toUtf8String(mumbaiVar));

    let swisstronikVar = retrieveRandomStr(
      "swisstronik",
      "0x59E431B64EC822b20DeD579788ec9c0464822729",
      "0",
      "latest"
    );
    console.log(
      "Value deployed to Swisstronik ",
      ethers.toUtf8String(swisstronikVar)
    );
  } catch (error) {
    console.log(error);
  }
}

getValues();
