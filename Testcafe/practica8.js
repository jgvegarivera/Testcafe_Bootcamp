import page from './pageModel';

fixture('Test con testcafe')
    .page('http://the-internet.herokuapp.com/');

test('Validación de login correcto', async t => {
    await t
            .click(page.link8)
    await t
        .expect(page.text81.visible).ok()
        .expect(page.input82.visible).ok()
        .expect(page.input83.visible).ok()
        .expect(page.btn84.visible).ok()
    await t
        .typeText(page.input82, "tomsmith")
        .expect(page.input82.value).eql("tomsmith")
        .typeText(page.input83, "SuperSecretPassword!")
        .expect(page.input83.value).eql("SuperSecretPassword!")
    await t
        .click(page.btn84)
        .expect(page.text85.innerText).contains('You logged into a secure area!')
        .expect(page.text86.visible).ok()
});
test('Validación de login con datos erroneos y despues logearse correctamente', async t => {
    await t
        .click(page.link8)
    await t
        .expect(page.text81.visible).ok()
        .expect(page.input82.visible).ok()
        .expect(page.input83.visible).ok()
        .expect(page.btn84.visible).ok()
    await t
        .click(page.btn84)
        .expect(page.text85.innerText).contains('invalid!')
    await t
        .typeText(page.input82, "tomsmith")
        .expect(page.input82.value).eql("tomsmith")
        .typeText(page.input83, "SuperSecretPassword!")
        .expect(page.input83.value).eql("SuperSecretPassword!")
    await t
        .click(page.btn84)
        .expect(page.text85.innerText).contains('You logged into a secure area!')
        .expect(page.text86.visible).ok()
});
test('Validación de login sin ingresar datos', async t => {
        await t
            .click(page.link8)
        await t
            .expect(page.text81.visible).ok()
            .expect(page.input82.visible).ok()
            .expect(page.input83.visible).ok()
            .expect(page.btn84.visible).ok()
        await t
            .click(page.btn84)
            .expect(page.text85.innerText).contains('Your username is invalid!')
});
test('Validación de login con datos erroneos', async t => {
    await t
        .click(page.link8)
    await t
        .expect(page.text81.visible).ok()
        .expect(page.input82.visible).ok()
        .expect(page.input83.visible).ok()
        .expect(page.btn84.visible).ok()
    await t
        .typeText(page.input82, "Gabo")
        .typeText(page.input83, "Holly")
    await t
        .click(page.btn84)
        .expect(page.text85.innerText).contains('Your username is invalid!')
});
test('Validación de login con usuario correcto y password incorrecto', async t => {
    await t
        .click(page.link8)
    await t
        .expect(page.text81.visible).ok()
        .expect(page.input82.visible).ok()
        .expect(page.input83.visible).ok()
        .expect(page.btn84.visible).ok()
    await t
        .typeText(page.input82, "tomsmith")
        .expect(page.input82.value).eql("tomsmith")
        .typeText(page.input83, "Holly")
    await t
        .click(page.btn84)
        .expect(page.text85.innerText).contains('Your password is invalid!')
});
test('Validación de login con usuario incorrecto con password correcto', async t => {
    await t
        .click(page.link8)
    await t
        .expect(page.text81.visible).ok()
        .expect(page.input82.visible).ok()
        .expect(page.input83.visible).ok()
        .expect(page.btn84.visible).ok()
    await t
        .typeText(page.input82, "Gabo")
        .typeText(page.input83, "SuperSecretPassword!")
        .expect(page.input83.value).eql("SuperSecretPassword!")
    await t
        .click(page.btn84)
        .expect(page.text85.innerText).contains('Your username is invalid!')
});




