import { Selector } from 'testcafe';
import page from './pageModel';

fixture('Practica dos con testcafe')
    .page('http://the-internet.herokuapp.com/');

test('Probar dar clic en un enlace', async t => {
    await t 
        .click(page.link2)
    await t
    if(page.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Control"){
        console.log("Paso prueba")
    } else {
        console.log("No paso la prueba")
    }    
});

