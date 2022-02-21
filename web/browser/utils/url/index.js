export default process.env.NODE_ENV === 'production' ? {
  browserAPI: 'https://www.taylorscan.io/browser_api/',
  wsURL: 'wss://www.taylorscan.io/browser_api/',
} : {
  browserAPI: 'https://www.taylorscan.io/browser_api/',
  wsURL: 'wss://www.taylorscan.io/browser_api/',
}

