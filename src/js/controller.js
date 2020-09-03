import { company, watch_btn, search_btn } from './domElements.js'

import { company_cb, search_btn_cb, watch_btn_cb } from "./eventCallback.js";

console.log("Web page loaded")
search_btn.style.display = 'none';

try {
    company.addEventListener('keypress', company_cb);
    watch_btn.addEventListener('click', watch_btn_cb);
    search_btn.addEventListener('click', search_btn_cb)

} catch (error) {
    console.log(error);
    alert('somethng went wrong check connectivity or data you provided')
}


