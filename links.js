const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';

rp(url)
  .then(function(html){
    const $ = cheerio.load(html)
    
    //  link 1 : console.log($(".field--name-field-icone-link")[3].childNodes[0].childNodes[1].childNodes[1].attribs.href);
    //  link 2 : console.log($(".field--name-field-icone-link")[2].childNodes[0].childNodes[1].childNodes[1].attribs.href);
    //  link 3 : console.log($(".field--name-field-icone-link")[1].childNodes[0].childNodes[1].childNodes[1].attribs.href);
    // link 4 :console.log($(".field--name-field-icone-link")[0].childNodes[0].childNodes[1].childNodes[1].attribs.href);
     for(let i = 0 ; i < 4 ;i++){
        console.log($(".field--name-field-icone-link")[i].childNodes[0].childNodes[1].childNodes[1].attribs.href);
    }

   
  })
  .catch(function(err){
    // error
  });