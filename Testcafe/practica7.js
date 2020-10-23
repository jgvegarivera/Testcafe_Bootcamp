import page from './pageModel';

fixture('Test con testcafe')
    .page('http://formy-project.herokuapp.com/form')

    test('Llenar formulario', async t =>{
        await t
        //Name
            .typeText(page.input71, "Gabo", {speed:0.10})
            .expect(page.input71.value).eql("Gabo")
        //Last Name
            .typeText(page.input72, "Rivery", {speed:0.10})
            .expect(page.input72.value).eql("Rivery")
        //Job
            .typeText(page.input73, "QA Analyst", {speed:0.10})
            .expect(page.input73.value).eql("QA Analyst")
        //Education
            .click(page.rbtn74)
            .expect(page.rbtn74.checked).ok()
            .click(page.rbtn75)
            .click(page.rbtn76)
        //Sex
            .click(page.checkbox77)
            .expect(page.checkbox77.checked).ok()
            .click(page.checkbox78)
            .expect(page.checkbox78.checked).ok()
            .click(page.checkbox79)
            .expect(page.checkbox79.checked).ok()
        //Experience
            .click(page.smenu701)
            .click(page.opt702)
        //Date
            .typeText(page.date703, "10222020")
        //Submit
            .click(page.btn704)
        //Thanks submit
        await t
            .expect(page.text705.visible).ok()
            .expect(page.text706.visible).ok()
    });