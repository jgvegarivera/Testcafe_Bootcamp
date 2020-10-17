import page from './pageModel';

fixture('Test con testcafe')
    .page('http://the-internet.herokuapp.com/')

    test('Probar checkboxes', async t =>{
        await t
            .click(page.link4)
        await t
            .click(page.baseCheckbox.nth(1))
        await t
            .expect(page.baseCheckbox.nth(1).checked).notOk()
        await t
            .expect(page.baseCheckbox.nth(3).checked).notOk()
        //await t.expect(page.checkbox42.checked).notOk()
        
    
    });
    