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
     //   const slider = await t.page.slider11
        console.log(page.slider11)
    await t
       // .click(page.slider11)
        .pressKey('tab', {speed:0.01})
        .pressKey('tab')
        .pressKey('up', {speed:0.01})
        .wait(300)
        .pressKey('up')
        .expect(page.slider11.value).eql('1')
});