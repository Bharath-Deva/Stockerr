export default async (input_data, api_key) => {
    let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input_data}&apikey=${api_key}`
    let response = await axios.get(url);
    console.log(`got symb_response ${url} `);
    let symbol_list = response.data.bestMatches
    return ([response, symbol_list])
}
