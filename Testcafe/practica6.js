import page from './pageModel';

fixture('Test con testcafe')
    .page('http://the-internet.herokuapp.com/');

    test('Probar agregar y quitar botones', async t =>{
        await t
            .click(page.link6)
        
        await t
            .expect(page.remBtn62.visible).notOk()
            .click(page.addBtn61)
            .click(page.addBtn61)
            
            .expect(page.remBtn62.visible).ok()
            .wait(3000)
    
            .click(page.remBtn62)
            .click(page.remBtn63)
            .expect(page.remBtn62.visible).notOk()
    });
    
