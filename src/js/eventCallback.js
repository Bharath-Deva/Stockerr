import { company, display_watch, display_search, watch_btn, search_btn } from './domElements.js';
import symbol_data from './symbol_data.js';
import { event_cb as watch_controller } from './watch_controller.js';
import { search_ui } from './serarch_ui.js'

let watch_arr = [];

export let company_cb = (() => {
    let api_key = ['KXKAKROO5W0FDVSX', 'BOTAHB99HFPL04KQ'];
    let i = 0;
    let n = api_key.length;
    return async (e) => {

        if (e.keyCode == 13) {
            display_search.innerHTML = '';

            let input_data = company.value
            company.value = "";
            i = i + 1;
            console.log(input_data);
            let symbol_list = await symbol_data(input_data, api_key[i % n]);
            console.log(symbol_list)
            search_ui(symbol_list, input_data, watch_arr)

        }
    }
})();


export let watch_btn_cb = () => {
    company.style.display = 'none';
    display_search.innerHTML = '';
    watch_btn.style.display = 'none';
    search_btn.style.display = 'inline';
    watch_controller(watch_arr)
};

export let search_btn_cb = () => {
    company.style.display = 'block';
    display_watch.innerHTML = '';
    watch_btn.style.display = 'block';
    search_btn.style.display = 'none';
};