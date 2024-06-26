require('dotenv').config();
console.log('dotenv loaded');

const Web3 = require('web3');
console.log('Web3 imported');

const infuraUrl = process.env.INFURA_URL;
console.log(`INFURA_URL: ${infuraUrl}`);

if (!infuraUrl) {
    console.error('Missing INFURA_URL in .env file');
    process.exit(1);
}

const web3 = new Web3(infuraUrl);
console.log('Web3 instance created');

const privateKey = process.env.PRIVATE_KEY;
console.log(`PRIVATE_KEY: ${privateKey ? 'Loaded' : 'Missing'}`);

const receiverAddress = process.env.RECEIVER_ADDRESS;
console.log(`RECEIVER_ADDRESS: ${receiverAddress}`);

if (!privateKey || !receiverAddress) {
    console.error('Missing PRIVATE_KEY or RECEIVER_ADDRESS in .env file');
    process.exit(1);
}

async function sendTransaction() {
    try {
        console.log('sendTransaction function called');

        const account = web3.eth.accounts.privateKeyToAccount(privateKey);
        web3.eth.accounts.wallet.add(account);
        console.log(`Account loaded: ${account.address}`);

        const balance = await web3.eth.getBalance(account.address);
        console.log(`Current balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);

        if (balance > web3.utils.toWei('0.01', 'ether')) {
            console.log('Sufficient balance');

            const tx = {
                from: account.address,
                to: receiverAddress,
                value: web3.utils.toHex(balance - web3.utils.toWei('0.01', 'ether')),
                gas: 21000,
                gasPrice: await web3.eth.getGasPrice()
            };

            console.log('Transaction object created');

            const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
            console.log('Transaction signed');

            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(`Transaction successful with hash: ${receipt.transactionHash}`);
        } else {
            console.log('Insufficient funds for transaction.');
        }
    } catch (error) {
        console.error(`Transaction failed: ${error.message}`);
    }
}

sendTransaction();
console.log('Script executed');
