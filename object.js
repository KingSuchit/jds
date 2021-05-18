const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';

rp(url)
  .then(function(html){
    const $ = cheerio.load(html);
    console.log($(".field-content")[69].childNodes[5].childNodes[0].data);  
  })
  .catch(function(err){
    // error
  });