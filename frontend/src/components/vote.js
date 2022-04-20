import React, { Component } from "react";
import VoteContract from '../contracts/VoteContract.json'
import getWeb3 from '../getWeb3'


class Vote extends Component {
  constructor(props) {
      super(props)

      this.state = {
          VoteInstance: undefined,
          account: null,
          web3: null,
          isOwner:false,
      }
      
  }  
  componentDidMount = async () => {
// FOR REFRESHING PAGE ONLY ONCE -
if(!window.location.hash){
window.location = window.location + '#loaded';
window.location.reload();
}

try{
    // Get network provider and web3 instance.
const web3 = await getWeb3();
// Use web3 to get the user's accounts.
const accounts = await web3.eth.getAccounts();
// Get the contract instance.
const networkId = await web3.eth.net.getId();
const deployedNetwork = VoteContract.networks[networkId];
const instance = new web3.eth.Contract (
VoteContract.abi,
deployedNetwork && deployedNetwork.address,
);
// Set web3, accounts, and contract to the state, and then proceed with an
// example of interacting with the contract's methods.
this.setState({VoteInstance: instance, web3: web3, accounts: accounts[0]});
const owner = await this.state.VoteInstance.methods.getOwner().call();
if(this.state.account === owner){
    this.setState({isOwner : true});
}

let start=await this.state.VoteInstance.methods.getStart().call();
let end=await this.state.VoteInstance.methods.getEnd().call();

this .setState({start: start, end: end});
} catch(error){
    //Catch error
    alert(`Failed to load`);

console.error(error);
 };
};



return() {
    if(!this.state.web3){
        return <div>Loading...</div>;
    }

  return (
    <div>vote</div>
  );
}
}

export default Vote;