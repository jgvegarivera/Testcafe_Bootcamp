import page from './pageModel';

fixture('Test con testcafe')
    .page('http://the-internet.herokuapp.com/')

    test('Escribir numeros', async t =>{
        await t
            .click(page.link5)
        await t
            .typeText(page.input51,"letras",{speed: 0.1})
            .expect(page.input51.value).eql("")

            .typeText(page.input51, "987654321",{speed: 0.1})
            .expect(page.input51.value).notEql("7687")
            .expect(page.input51.value).eql("987654321")

            .typeText(page.input51,"666",{replace: true})
            .typeText(page.input51,"#$%8&%$#",{replace: true},{speed: 0.01})
            console.log(page.input51.value)
        await t
            .expect(page.input51.value).eql("8")

    });