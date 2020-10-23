import page from './pageModel';

fixture('Test con testcafe')
    .page('http://the-internet.herokuapp.com/');

    test('Probar Agregar Elemento', async t =>{
        //Click a link
        await t
            .click(page.link6)
        //Verifica que el boton Add este presente
        await t
            .expect(page.addBtn61.visible).ok()
            .click(page.addBtn61)
            .click(page.addBtn61)
            .click(page.addBtn61)
        //Verifica que el boton Delete este presente
            .expect(page.remBtn62.visible).ok()
            .wait(300)
    });

    test('Probar agregar y quitar elementos usando el primer boton ', async t =>{
        //Click a link
        await t
            .click(page.link6)
        await t
            .click(page.addBtn61)
            .click(page.addBtn61)
            .click(page.addBtn61)
        //Verifica que el boton Delete este presente
        await t    
            .expect(page.remBtn62.visible).ok()
            .wait(300)
        //Remove Delete Element
            .click(page.remBtn62)
            .click(page.remBtn62)
            .click(page.remBtn62)
        //Verificar que el boton Delete no este presente
            .expect(page.remBtn62.visible).notOk()
    });

    test('Probar agregar y quitar elementos de derecha a izquierda ', async t =>{
        //Click a link
        await t
            .click(page.link6)
        await t
            .click(page.addBtn61)
            .click(page.addBtn61)
            .click(page.addBtn61)
        //Verifica que el boton Delete este presente
        await t    
            .expect(page.remBtn62.visible).ok()
            .wait(300)
        //Remove Delete Element
            .click(page.remBtn65)
            .click(page.remBtn64)
            .click(page.remBtn63)
        //Verificar que el boton Delete no este presente
            .expect(page.remBtn62.visible).notOk()
    });