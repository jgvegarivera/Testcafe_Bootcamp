import page from './pageModel';

fixture('Practica uno con testcafe')
    .page ('http://the-internet.herokuapp.com/');

test('Probar slider horizontal con valor seteado', async t => {
    await t 
        .click(page.link11)
    await t
        .click(page.slider11)
        .typeText(page.slider11,"3.5")
        .expect(page.slider11.value).eql('3.5')
});

test('Probar slider horizontal con teclas', async t => {
    await t 
        .click(page.link11)
    await t
        .click(page.slider11)
        .pressKey('RIGHT')
        .pressKey('RIGHT')
        .wait(500)
        .expect(page.slider11.value).eql('1')
});