export default async (symbol, api_key) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&outputsize=full&apikey=${api_key}`;
    let response = await axios.get(url);
    console.log(`got stock response ${url}`)
    return response;
}