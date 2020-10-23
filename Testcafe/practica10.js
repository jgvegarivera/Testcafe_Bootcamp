import page from './pageModel';

fixture('Practica uno con testcafe')
    .page ('http://the-internet.herokuapp.com/');

test('Prueba un click derecho', async t => {
    await t
        .click(page.link10)
    await t
        .setNativeDialogHandler(http://the-internet.herokuapp.com/context_menu)
        .rightClick(page.hotspot101)

});