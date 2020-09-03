import { display_search } from './domElements.js';

export let search_ui = (symbol_list, input_data, watch_arr) => {
    console.log(watch_arr)
    symbol_list.forEach(element => {

        //div .symbol
        let div = document.createElement('div')
        div.className = 'symbol'
        display_search.appendChild(div);

        //inner html .symbol
        let p = document.createElement('p')
        let display_data = `Symbol:${element['1. symbol']}<br>Company Name:${element['2. name']}`
        p.innerHTML = display_data;
        div.appendChild(p);

        //add to watch btn
        let watchList_btn = document.createElement('button')
        watchList_btn.className = 'watch_btn'
        watchList_btn.innerHTML = 'Add to Watch'
        watchList_btn.onclick = () => {
            let temp = {
                Input: input_data,
                symbol: element['1. symbol'],
                Company_name: element['2. name']
            };
            watch_arr.push(temp);
            console.log(watch_arr);
        }
        div.appendChild(watchList_btn)
        console.log(element);
    });
}