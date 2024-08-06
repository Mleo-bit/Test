import React from 'react'
import { FaChevronDown, FaAngleUp } from "react-icons/fa6";

const User = () => {
  const popoverStyle = {
    position: 'absolute',
    background: 'white',
    border: '1px solid #ccc',
    padding: '10px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '10px'
  };
  return (
    <div className="w-200px h-300px absolute" style={popoverStyle}>
      <ul >
        <li>Download AlphaWallet App</li>
        <li>Best Wallet for Polygon</li>
        <li>Benefits of Crypto</li>
        <li>Benefits of dapps</li>
        <li>Earn with DeFi</li>
        <li>Buy Crypto with Fiat</li>
        <li>Web3 Browser</li>
        <li>Smart Tokens</li>
        <li>WalletConnect</li>
        <li>Attenstation on Blockchain</li>
      </ul>
    </div>
  )
}

export default User


export const TokenScript = () => {
  const popoverStyle = {
    position: 'absolute',
    background: 'white',
    border: '1px solid #ccc',
    padding: '10px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '10px'
  };
  return (
    <div className="w-200px h-300px absolute" style={popoverStyle}>
      <ul >
        <li>Extend Your Tokens</li>
        <li>TokenScript Examples</li>
        <li>ABI-to-TokenScript Tool</li>
        <li>Design Papper</li>
        <li>TokenScript Visualiser Tool</li>
      </ul>
    </div>
  )

}

export const Deverloper = () => {
  const popoverStyle = {
    position: 'absolute',
    background: 'white',
    border: '1px solid #ccc',
    padding: '10px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '10px'
  };
  return (
    <div className="w-200px h-300px absolute" style={popoverStyle}>
      <ul >
        <li>Case Study: FIFA Tickets</li>
        <li>Case Study: Car Ownership Token</li>
        <li>Case Study: eCommerce Marketplace</li>
        <li>Benefit of using Blockchain for Business</li>
        <li>Benefit of using TokenScript</li>
        <li>How to tokenize your business</li>
        <li>Upcoming Features</li>
        <li>Business Deck</li>
      </ul>
    </div>
  )
}

export const Menu = () => {
  const popoverStyle = {
    position: 'absolute',
    top: '110px',
    left: '0px',
    width: '100%',
    background: 'white',
    border: '1px solid #ccc',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '10px',
  };

  const menuItemStyle = {
    marginBottom: '16px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
  };
  return (
    <div className='' style={popoverStyle}>
      <ul className='text-start font-semibold text-xl pt-8 pr-4 pb-0 pl-4'>
        <li style={menuItemStyle}>For Business <button ><FaChevronDown /></button></li>
        <li style={menuItemStyle}>For Developer <button ><FaChevronDown /></button></li>
        <li style={menuItemStyle}>For User <button ><FaChevronDown /></button> </li>
        <li style={menuItemStyle}>TokenScript <button ><FaChevronDown /></button> </li>
        <li style={menuItemStyle}>About <button ><FaChevronDown /></button></li>
        <li style={menuItemStyle}>Blog</li>
        <li style={menuItemStyle}>Contact Us</li>
        <li style={menuItemStyle}>Download</li>
      </ul>
    </div>
  )
}

