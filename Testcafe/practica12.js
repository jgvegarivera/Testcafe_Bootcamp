import page from './pageModel';

fixture('Practica uno con testcafe')
    .page ('https://devexpress.github.io/testcafe/example/');

test('Mover slider', async t => {
    await t
        .click(page.checkboxTried)
        .expect(page.checkboxTried.checked).ok()
        .dragToElement(page.slider.handle, page.slider.value.withText('9'))
});

