import controller from './controller.js'
import { company } from './domElements.js'

console.log("Web page loaded")

let event_cb = (() => {
    let api_key = ["KXKAKROO5W0FDVSX", "BOTAHB99HFPL04KQ"];
    let i = 0;
    return (e) => {
        if (e.keyCode == 13) {

            let input_data = company.value
            company.value = "";
            i = i + 1;
            let n = api_key.length;
            console.log(input_data);
            controller(input_data, api_key[i % n]);
        }
    }
})();

company.addEventListener("keypress", event_cb
);

