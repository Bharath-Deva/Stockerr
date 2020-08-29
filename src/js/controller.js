import stock_data from './stock_data';
import symbol_data from './symbol_data.js';
import UI from './ui';

export default async (input_data, api_key) => {
    let [symb_response, symbol_list] = await symbol_data(input_data, api_key);
    let symbol = symbol_list[0]["1. symbol"];
    let company_name = symbol_list[0]["2. name"]
    // console.log(symbol, company_name);
    let stock_response = await stock_data(symbol);
    while (input_data.includes(' ')) {
        input_data = input_data.replace(" ", "_")
    }
    UI([stock_response.data, company_name, input_data]);
}