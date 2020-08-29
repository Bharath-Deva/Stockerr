import visualize from './visualize.js'
import { display } from './domElements.js'

export default (data) => {
  let [response, company_name, input_data] = data;
  let date = new Date()

  let today = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate() - 2}`
  let stocks_today = response["Time Series (Daily)"][today]
  console.log(response, stocks_today)
  console.log(today);
  console.log(display)
  var display_data =
    `
      <div class="open">
        <p class="open_heading">Open: ${stocks_today["1. open"]}</p>
      </div>
      <div class="close">
        <p class="close_heading">Close: ${stocks_today["4. close"]}</p>
      </div>
    `

  var div = document.createElement('div');
  div.className = input_data;
  display.insertBefore(div, display.childNodes[0]);//inserting the child into the display block
  let para = document.createElement('p');
  para.innerHTML = `<h2>${input_data}</h2>`;
  div.appendChild(para);
  para = document.createElement('p')
  para.innerHTML = `Company Name: ${company_name}`;
  div.appendChild(para);
  div.insertAdjacentHTML("beforeend", display_data)

  visualize(stocks_today, stocks_today["1. open"], stocks_today["4. close"], input_data)

}
