import page from './pageModel';

fixture('Test con testcafe')
    .page('http://the-internet.herokuapp.com/')

    test('Probar UI', async t =>{
        await t
            .click(page.link3)
        await t
            .expect(page.input31.exists).ok()
            .expect(page.button32.exists).ok()
    });

    test("Probar que podemos escribir un mail", async t =>{
        await t
            .click(page.link3)
        await t
            .typeText(page.input31, 'noemail@noemail.com')
            .expect(page.input31.value).eql('noemail@noemail.com')
    });

    test("Probar envio de email", async t =>{
        await t
            .click(page.link3)
        await t
            .typeText(page.input31, 'noemail@noemail.com')
            .expect(page.input31.value).eql('noemail@noemail.com')
            .click(page.button32)
        await t
            .expect(page.text33.innerText).contains('sent', 'Prueba exitosa')
    });
    
    test("Prueba Error (500 Internal Server Error)", async t =>{
        await t
            .click(page.link3)
        await t
            .click(page.button32)
        await t
            .expect(page.text34.innerText).contains("Internal Server Error")
    });