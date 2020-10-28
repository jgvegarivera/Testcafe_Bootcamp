import page from './PageObjectModel';
import { data } from './data';
//Página y modulo a probar
fixture('Pruebas de modulo mi cuenta')
    .page('http://automationpractice.com/');
//Tests
test('Crear una cuenta', async t =>{
    //Click en Sing In
    await t
        .click(page.signIn_link)
        console.log("Correo: ", data.email)
        console.log("firstName: ", data.firstName)
        console.log("lastName: ", data.lastName)
    //Insertar correo y dar click a crear cuenta
    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
    //Validacion del correo en formulario
    await t
        .expect(page.email_form.value).contains(data.email)
        .expect(page.email_form.hasAttribute('readonly')).notOk()
    //LLenar campos
        .typeText(page.firstName_input, data.firstName)
        .expect(page.firstName_input.value).contains(data.firstName)
        .typeText(page.lastName_input, data.lastName)
        .expect(page.lastName_input.value).contains(data.lastName)
        .typeText(page.password_input, data.password)
        .expect(page.password_input.value).contains(data.password)
        .expect(page.firstName_Address.value).contains(data.firstName)
        .expect(page.lastName_Address.value).contains(data.lastName)
        .typeText(page.adress, data.pbox)
        .expect(page.adress.value).contains(data.pbox)
        .typeText(page.city, data.city)
        .expect(page.city.value).contains(data.city)
        .click(page.state)
        .click(page.opnState)
        .typeText(page.zip, data.zip)
        .expect(page.zip.value).contains(data.zip)
        .click(page.country)
        .click(page.opnCountry)
        .expect(page.adressAlias.value).contains(data.adress_Alias)
});

//test('Loggearse con la nueva cuenta', async t =>{});

//test('Logout', async t =>{});

//test('Crear una cuenta con un correo ya existente', async t =>{});

//test('Validar recuperar el password con un correo valido', async t =>{});

//test('Validar recuperar el password con un correo no valido', async t =>{});

//test('Cambiar información  de mi cuenta', async t =>{});