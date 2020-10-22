import { Selector } from 'testcafe';
import page from './pageModel';

fixture('Practica dos con testcafe')
    .page('http://the-internet.herokuapp.com/');

test('Probar dar clic en un enlace', async t => {
    await t 
        .click(page.link2)
    await t
    if(page.text21.innerText == "Hola"){
        console.log("Paso prueba");
    } else {
        console.log("El texto no coincide con lo esperado");
        await t
            .expect (page.text21.innerText).contains("A/B Test Control" || "A/B Test Variation 1")
    }    
});

