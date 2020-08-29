import { company, display } from './domElements.js'
import symbol_data from './symbol_data.js';

// export default let watch_arr = [];
let update = (input, symbol, company_name) => {
    let temp = {
        Input: input,
        symbol: symbol,
        Company_name: company_name
    };
    watch_arr.push(temp);
    console.log(watch_arr);
}

console.log("Web page loaded")

let event_cb = (() => {
    let api_key = [process.env.API_KEY_1, process.env.API_KEY_2];
    let i = 0;
    let n = api_key.length;
    return async (e) => {

        if (e.keyCode == 13) {

            let input_data = company.value
            company.value = "";
            i = i + 1;
            console.log(input_data);
            let symbol_list = await symbol_data(input_data, api_key[i % n]);
            console.log(symbol_list)
            symbol_list.forEach(element => {
                let div = document.createElement('div')
                div.className = 'symbol'
                let p = document.createElement('p')
                let display_data = `Symbol:${element['1. symbol']}<br>Company Name:${element['2. name']}`
                p.innerHTML = display_data;
                div.appendChild(p);
                let watch_btn = `<button onclick="update('${input_data}','${element['1. symbol']}','${element['2. name']}')">Add To Cart</button>`
                div.insertAdjacentHTML('beforeend', watch_btn)
                display.appendChild(div);
                console.log(element);
            });

        }
    }
})();



company.addEventListener("keypress", event_cb
);

