// import { arr } from './search_controller.js'
import stock_data from './stock_data.js';
import UI from './ui.js';

console.log("Web page loaded-w")
let arr = [{
    Company_name: "Alphabet Inc.",
    Input: "google",
    symbol: "GOOG"
},
{
    Company_name: "Apple Inc.",
    Input: "apple",
    symbol: "AAPL"
}]
let event_cb = (() => {
    let api_key = ['KXKAKROO5W0FDVSX', 'BOTAHB99HFPL04KQ'];
    let n = api_key.length;
    let i = 0;
    return () => {
        console.log('function strated');
        arr.forEach(async element => {
            i += 1;
            let stock_response = await stock_data(element.symbol, api_key[i % n]);
            while (element.Input.includes(' ')) {
                input_data = input_data.replace(" ", "_")
            }
            console.log(element.Company_name, element.Input)
            UI([stock_response.data, element.Company_name, element.Input])
        });
    }
})();

event_cb();

