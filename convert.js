const xlsxjs = require('xlsx-to-json');
xlsxjs({
    input: 'entrada.xlsx',
    output: 'saida.json'
}, function(err, result) {
    if (err) {
        console.log(err);
        console.log('erro');
        return;
    }
    console.log(result);
    console.log('finalizado.');
});