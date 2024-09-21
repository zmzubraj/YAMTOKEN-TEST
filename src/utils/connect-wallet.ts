declare global {
    interface Window {
      ethereum?: any
      unisat?: any
    }
  }
  
class Metamask {
  constructor() {}

  public async connect() {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })

    return accounts[0]
  }

  public async disconnect() {
    await window.ethereum.request({
      method: 'wallet_revokePermissions',
      params: [{ eth_accounts: {} }],
    })
  }
}

export default new Metamask()