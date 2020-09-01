import visualize from './visualize.js'
import { display_watch as display } from './domElements.js'
import stock_visualize from './stock_visualize.js';

export default (data) => {
  let [response, company_name, input_data] = data;
  let date = new Date()

  let today = `${date.getFullYear()}-0${date.getMonth()}-${date.getDate() + 9}`
  let stocks_today = response["Time Series (Daily)"][today]
  console.log(response, stocks_today)
  console.log(today);

  let display_data =
    `
      <div class="open">
        <p class="open_heading">Open: ${stocks_today["1. open"]}</p>
      </div>
      <div class="close">
        <p class="close_heading">Close: ${stocks_today["4. close"]}</p>
      </div>
    `
  //div: .stock-container
  let stock_container = document.createElement('div');
  stock_container.className = 'stock_container';
  display.insertBefore(stock_container, display.childNodes[0]);

  //div: .<input_data>
  let div = document.createElement('div');
  div.className = input_data;
  stock_container.appendChild(div);

  //div: <input_data>_svg
  let svg = document.createElement('div');
  svg.className = input_data + '_svg';
  stock_container.appendChild(svg)
  stock_visualize(response['Time Series (Daily)'], svg.className);
  svg.style.display = 'none';

  //childElements div: .<input_data>
  let btn = document.createElement('button');
  btn.className = 'btn'
  btn.innerHTML = `${input_data}`;
  btn.onclick = () => {
    svg.style.display = 'block';
  }
  div.appendChild(btn);
  let para = document.createElement('p')
  para.innerHTML = `Company Name: ${company_name}`;
  div.appendChild(para);
  div.insertAdjacentHTML("beforeend", display_data)

  visualize(stocks_today, stocks_today["1. open"], stocks_today["4. close"], input_data)

}
