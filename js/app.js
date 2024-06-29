/* var */
const apikey = "af45fd38be25a0d1598798b2f72a49d6";

const inputCidade = document.querySelector('#inputCidade');
const botaoPesquisa = document.querySelector('#botaoPesquisa');

const dadoCidade = document.querySelector('#cidadeNome span');
const dadoTemp = document.querySelector('#temperatura span');
const dadoDesc = document.querySelector('#descricao span');
const dadoIcone = document.querySelector('#iconeTempo')
const dadoUmid = document.querySelector('#umidade span');
const dadoVento = document.querySelector('#vento span');

/* funcoes */
const obterDadosClima = async(inputCidade) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCidade}&units=metric&appid=${apikey}&lang=pt_br`;

    const response = await fetch(apiWeatherURL);
    const dadosObj = await response.json();

    return dadosObj
};

const mostraDadosClima = async(inputCidade) => {
    const dadosObj = await obterDadosClima(inputCidade);

    dadoCidade.innerText = dadosObj.name;
    dadoTemp.innerText = parseInt(dadosObj.main.temp);
    dadoDesc.innerText = dadosObj.weather[0].description;
    dadoIcone.src = `http://openweathermap.org/img/wn/${dadosObj.weather[0].icon}.png`;
    dadoUmid.innerText = dadosObj.main.humidity;
    dadoVento.innerText = dadosObj.wind.speed;
};

/* eventos */
botaoPesquisa.addEventListener('click', (evento) =>{
    evento.preventDefault();

    const cidade = inputCidade.value;

    mostraDadosClima(cidade);
});