async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy(deployer.address); // pass initialOwner here
  await myNFT.waitForDeployment(); // ✅ Correct for Ethers v6+

  console.log("MyNFT deployed to:", await myNFT.getAddress()); // get address in v6
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
