// Declare a variable to store our NFTs
let nfts = [];
// Initialize a counter to track the number of minted NFTs
let nftCounter = 0;

// Define a function to mint NFTs
function mintNFT(make, model, year, color) {
    const nft = {
        make: make,
        model: model,
        year: year,
        color: color
    };
    // Add the newly minted NFT to our collection
    nfts.push(nft);
    // Increment the counter
    nftCounter++;
    // Inform about the minting of the NFT and display the current total
    console.log(make + " " + model + " NFT has been minted.");
    console.log("Total NFTs minted: " + nftCounter);
}

// Define a function to list all NFTs
function listNFTs() {
    // Iterate over each NFT in our collection
    for (let index = 0; index < nfts.length; index++) {
        const nft = nfts[index];
        // Display the metadata of each NFT
        console.log("NFT " + (index + 1) + ":");
        console.log("Make: " + nft.make);
        console.log("Model: " + nft.model);
        console.log("Year: " + nft.year);
        console.log("Color: " + nft.color);
        console.log('------------------');
    }
}

// Define a function to get the total number of minted NFTs
function getTotalSupply() {
    // Return the length of the NFTs collection
    return nfts.length;
}

// Mint some example NFTs
mintNFT("Toyota", "Camry", 2020, "Red");
mintNFT("Honda", "Civic", 2019, "Blue");
mintNFT("Tesla", "Model S", 2021, "White");
mintNFT("Ford", "Mustang", 2018, "Black");
mintNFT("Chevrolet", "Corvette", 2022, "Yellow");
mintNFT("BMW", "X5", 2020, "Silver");

// List all minted NFTs
listNFTs();

// Display the total number of minted NFTs
console.log("Total NFTs minted: " + getTotalSupply());
