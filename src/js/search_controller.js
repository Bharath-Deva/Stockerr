import { company, display_watch, display_search, watch_btn, search_btn } from './domElements.js'
import symbol_data from './symbol_data.js'
import { event_cb as watch_controller } from './watch_controller.js'

let watch_arr = [];

console.log("Web page loaded")
search_btn.style.display = 'none';

let event_cb = (() => {
    let api_key = ['KXKAKROO5W0FDVSX', 'BOTAHB99HFPL04KQ'];
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
    }
})();


try {
    company.addEventListener('keypress', event_cb);
    watch_btn.addEventListener('click', () => {
        company.style.display = 'none';
        display_search.innerHTML = '';
        watch_btn.style.display = 'none';
        search_btn.style.display = 'inline';
        watch_controller(watch_arr)
    });

    search_btn.addEventListener('click', () => {
        company.style.display = 'block';
        display_watch.innerHTML = '';
        watch_btn.style.display = 'block';
        search_btn.style.display = 'none';
    })

} catch (error) {
    console.log(error);
    alert('somethng went wrong check connectivity or data you provided')
}


