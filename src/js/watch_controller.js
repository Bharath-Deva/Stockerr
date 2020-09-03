// import { arr } from './search_controller.js'
import stock_data from './stock_data.js';
import UI from './watch_ui.js';

export let event_cb = (() => {
    let api_key = ['KXKAKROO5W0FDVSX', 'BOTAHB99HFPL04KQ'];
    let n = api_key.length;
    let i = 0;
    return (arr) => {
        console.log(arr)
        arr.forEach(async element => {
            i += 1;
            let stock_response = await stock_data(element.symbol, api_key[i % n]);
            console.log(stock_response)
            while (element.Input.includes(' ')) {
                element.Input = element.Input.replace(" ", "_")
            }
            console.log(arr)
            console.log(element.Company_name, element.Input)
            UI([stock_response.data, element.Company_name, element.Input])
        });
    }
})();


