import page from './PageObjectModel';
//Variables
let rndNumber = Math.random().toString(36).substr(1,4);
const email = 'dummy' + rndNumber + '@mailinator.com'
const firstName = "Gabo"
const lastName = "Rivery"
const password = "12345678"
//Página y modulo a probar
fixture('Pruebas de modulo mi cuenta')
    .page('http://automationpractice.com/');
//Tests
test('Crear una cuenta', async t =>{
    //Click en Sing In
    await t
        .click(page.signIn_link)
        console.log("Correo: ", email)
    //Insertar correo y dar click a crear cuenta
    await t
        .typeText(page.email_input, email)
        .click(page.createAccount_btn)
    //Validacion del correo en formulario
    await t
        .expect(page.email_form.value).contains(email)
        .expect(page.email_form.hasAttribute('readonly')).notOk()
    //LLenar campos
        .typeText(page.firstName_input, firstName)
        .typeText(page.lastName_input, lastName)
        .typeText(page.password_input, password)
        .expect(page.firstName_Address.value).contains(firstName)
        .expect(page.lastName_Address.value).contains(lastName)
        .typeText(page.adress, "PO Box 533")

});

//test('Loggearse con la nueva cuenta', async t =>{});

//test('Logout', async t =>{});

//test('Crear una cuenta con un correo ya existente', async t =>{});

//test('Validar recuperar el password con un correo valido', async t =>{});

//test('Validar recuperar el password con un correo no valido', async t =>{});

//test('Cambiar información  de mi cuenta', async t =>{});