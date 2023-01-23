import React from "react";
import { useTranslation } from "react-i18next";
import { ethers } from "ethers";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="wallet-block container">
        <div className="sensey">
          <div className="logo_sensey_container">
            <h1>SENSAY</h1>
            <img
              className="sensay_star"
              src="static/images/sensay_star.svg"
              alt=""
            />
          </div>
          <div className="mint-wrap _pc">
            <button className="mint-top" onClick={mint}>
              MINT
            </button>
            <button className="wallet-top" onClick={connect}>
              <span dangerouslySetInnerHTML={{ __html: t("wallet") }} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="34"
                viewBox="0 0 39 34"
                fill="none"
              >
                <path
                  d="M0 4.25C0 1.9125 1.755 0 3.9 0H33.15C33.6672 0 34.1632 0.223883 34.5289 0.622398C34.8946 1.02091 35.1 1.56141 35.1 2.125V4.25H3.9V6.375H37.05C37.5672 6.375 38.0632 6.59888 38.4289 6.9974C38.7946 7.39591 39 7.93641 39 8.5V29.75C39 30.8772 38.5891 31.9582 37.8577 32.7552C37.1263 33.5522 36.1343 34 35.1 34H3.9C2.86566 34 1.87368 33.5522 1.14228 32.7552C0.410892 31.9582 0 30.8772 0 29.75V4.25ZM32.175 23.375C32.9508 23.375 33.6947 23.0392 34.2433 22.4414C34.7918 21.8436 35.1 21.0329 35.1 20.1875C35.1 19.3421 34.7918 18.5314 34.2433 17.9336C33.6947 17.3358 32.9508 17 32.175 17C31.3992 17 30.6553 17.3358 30.1067 17.9336C29.5582 18.5314 29.25 19.3421 29.25 20.1875C29.25 21.0329 29.5582 21.8436 30.1067 22.4414C30.6553 23.0392 31.3992 23.375 32.175 23.375Z"
                  fill="url(#paint0_linear_427_270)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_427_270"
                    x1="-87.5"
                    y1="45"
                    x2="92.3627"
                    y2="76.6316"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6AE6C4" />
                    <stop offset="1" stopColor="#8C84F6" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
          <div className="btn-wrapp-test _mobile">
            <button className="mint-test" onClick={mint}>
              MINT
            </button>
            <button
              className={
                t("wallet") === "ПОДКЛЮЧИТЬ <br /> КОШЕЛЁК"
                  ? "wrallet-test yes"
                  : "wrallet-test no"
              }
              onClick={connect}
            >
              <span dangerouslySetInnerHTML={{ __html: t("wallet") }} />
              <svg width="39" height="34" viewBox="0 0 39 34" fill="none">
                <path
                  d="M0 4.25C0 1.9125 1.755 0 3.9 0H33.15C33.6672 0 34.1632 0.223883 34.5289 0.622398C34.8946 1.02091 35.1 1.56141 35.1 2.125V4.25H3.9V6.375H37.05C37.5672 6.375 38.0632 6.59888 38.4289 6.9974C38.7946 7.39591 39 7.93641 39 8.5V29.75C39 30.8772 38.5891 31.9582 37.8577 32.7552C37.1263 33.5522 36.1343 34 35.1 34H3.9C2.86566 34 1.87368 33.5522 1.14228 32.7552C0.410892 31.9582 0 30.8772 0 29.75V4.25ZM32.175 23.375C32.9508 23.375 33.6947 23.0392 34.2433 22.4414C34.7918 21.8436 35.1 21.0329 35.1 20.1875C35.1 19.3421 34.7918 18.5314 34.2433 17.9336C33.6947 17.3358 32.9508 17 32.175 17C31.3992 17 30.6553 17.3358 30.1067 17.9336C29.5582 18.5314 29.25 19.3421 29.25 20.1875C29.25 21.0329 29.5582 21.8436 30.1067 22.4414C30.6553 23.0392 31.3992 23.375 32.175 23.375Z"
                  fill="url(#paint0_linear_427_2701)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_427_2701"
                    x1="-87.5"
                    y1="45"
                    x2="92.3627"
                    y2="76.6316"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6AE6C4" />
                    <stop offset="1" stopColor="#8C84F6" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-star-bg" background="red">
        <img src="static/images/full-mb-budda.png" alt="" />
      </div>
    </>
  );
};

export default Home;

//if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

function isMobileDevice() {
  return "ontouchstart" in window || "onmsgesturechange" in window;
}

async function connect(onConnected) {
  if (isMobileDevice()) {
    Connect();
  } else if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  onConnected(accounts[0]);
}

async function checkIfWalletIsConnected(onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }
  }
}

function Connect() {
  const dappUrl = "lumeta.beget.tech/";
  const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location.replace(metamaskAppDeepLink);
  } else {
    alert(
      "Please do: \n 1) Open Metamask browser\n 2) Enter http://lumeta.beget.tech/"
    );
    window.location.replace(metamaskAppDeepLink);
  }
}

async function mint() {
  const address = "0x21abb9a32e8b9be8b9d1632a7303f9cb21f5bcd3";

  const ABI = [
    {
      inputs: [
        { internalType: "string", name: "_name", type: "string" },
        { internalType: "string", name: "_symbol", type: "string" },
        { internalType: "address", name: "_comissionAddress", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "addressMintedBalance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "baseExtension",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "baseURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "comissionAddress",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "cost",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "getApproved",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_user", type: "address" }],
      name: "isWhitelisted",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "maxMintAmount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "maxSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_mintAmount", type: "uint256" },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "nftPerAddressLimit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "notRevealedUri",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "onlyWhitelisted",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bool", name: "_state", type: "bool" }],
      name: "pause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "reveal",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "revealed",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "bytes", name: "_data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "_newBaseExtension", type: "string" },
      ],
      name: "setBaseExtension",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "_newBaseURI", type: "string" }],
      name: "setBaseURI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_newAddress", type: "address" },
      ],
      name: "setComissionAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_newCost", type: "uint256" }],
      name: "setCost",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_limit", type: "uint256" }],
      name: "setNftPerAddressLimit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "_notRevealedURI", type: "string" },
      ],
      name: "setNotRevealedURI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bool", name: "_state", type: "bool" }],
      name: "setOnlyWhitelisted",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_newmaxMintAmount", type: "uint256" },
      ],
      name: "setmaxMintAmount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
      name: "tokenByIndex",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "uint256", name: "index", type: "uint256" },
      ],
      name: "tokenOfOwnerByIndex",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_owner", type: "address" }],
      name: "walletOfOwner",
      outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address[]", name: "_users", type: "address[]" },
      ],
      name: "whitelistUsers",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "whitelistedAddresses",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ];
  await changeChain();
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const account = signer.getAddress();
      const contract = new ethers.Contract(address, ABI, signer);
      const cost = await contract.cost();
      const overrides = {
        from: account,
        gasLimit: ethers.utils.hexlify(6000000),
        value: cost.toString(),
        nonce: provider.getTransactionCount(signer.getAddress()),
      };
      const tx = await contract.mint(1, overrides);
      console.log(tx);
      await contract.methods.mint(1).send({ from: account, value: cost });
      contract.events
        .Transfer(
          {
            //filter: {from: account},
            fromBlock: 0,
          },
          function (error, event) {
            console.log();
          }
        )
        .on("data", function (mint) {
          alert("Done!");
        })
        .on("error", function (error, receipt) {
          // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
          console.log(receipt);
        });
    }
  } catch (error) {
    console.log(error);
  }
}
async function changeChain() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x1",
                rpcUrl:
                  "https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7",
              },
            ],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
      console.error(error);
    }
  }
}

function openMetaMaskUrl(url) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_self";
  document.body.appendChild(a);
  a.click();
  a.remove();
}
