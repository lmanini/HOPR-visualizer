"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = __importDefault(require("ethers"));
function getContract(address, abi, provider) {
    return new ethers_1.default.Contract(address, abi, provider);
}
function getLogs(contract) {
    return contract.filters.ChannelUpdated(null, null, null);
}
function main() {
    let gnosisRPCEndpoint = "https://rpc.xdaichain.com";
    const provider = new ethers_1.default.providers.JsonRpcProvider(gnosisRPCEndpoint);
    const targetAddress = "0xF69C45B4246FD91F17AB9851987c7F100e0273cF";
    const targetABI = [
        "event ChannelUpdated(address indexed source, address indexed destination, (uint256,bytes32,uint256,uint256,uint8,uint256,uint32) newState)"
    ];
    console.log(getLogs(getContract(targetAddress, targetABI, provider)));
}
let el = document.getElementById("clickMe");
if (el !== null) {
    el.onclick = main;
}
//# sourceMappingURL=eventReader.js.map