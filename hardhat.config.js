require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
// const CONSTANTS = require("../../../utils/constants");

// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
    solidity: "0.8.4",
    defaultNetwork: "rinkeby",
    networks: {
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/4cb846dc53d84d86b554011818aed647",
            accounts: ["c2d58ba553fb79ca21f3b7f9d34ea4e71e9335243d10b9a11852ebd512ebc606"],
        },
        // hardhat: {
        //   chainId: 1337
        // }
    },
    etherscan: {
        // Add your api key here
        apiKey: "2PICR51FVB31HS5YFC2ZHCAYCX3IZF2K6S",
    },
};