
![](https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif)
# TestCafe BootCamp
Este proyecto es producto de la experiencia del curso impartido por QA Minds Labs.

# Introducción
> En este repositorio encontraras practicas de Javascript, Testcafe, etc. Para poder hacer uso de ellos necesitaras de alguna herramientas previas para poder ejecutarlas.

# Requerimientos
* [<a href="https://nodejs.org/en/download/" rel="nofollow">NodeJS</a>] - is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [<a href="https://code.visualstudio.com/download" rel="nofollow">Visual Studio Code</a>] - Code editing. Redefined. Free. Built on open source. Runs everywhere.
* [<a href="https://devexpress.github.io/testcafe/" rel="nofollow">Testcafe</a>] - A node.js tool to automate end-to-end web testing
* [<a href="https://git-scm.com/downloads" rel="nofollow">Git</a>] - is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
* [<a href="https://www.google.com/chrome/" rel="nofollow">Chrome</a>] - Puedes usar el navegador de tu conveniencia pero recomendamos este.

# Instalación de programas

> **Descarga e instalación** de <a href="https://nodejs.org/en/download/" rel="nofollow">NodeJS</a> entra al link y descarga la versión "recomendada por más usuarios".<p>
Para Mac OS debes contar con <a href="https://osxdaily.com/2018/03/07/how-install-homebrew-mac-os/">Homebrew</a> para poder ejecutar los siguientes comandos
```sh
$ brew update
$ brew install node
```

>**Descarga e instalación** de <a href="https://git-scm.com/downloads" rel="nofollow" _istranslated="1">Git</a> entra al link y descarga la versión adecuada para tu sistema operativo (Recomiendo no mover nada durante la instalación, solo darle siguiente).

> **Descarga e instalación** de <a href="https://code.visualstudio.com/download" rel="nofollow">Visual Studio Code</a> entra al link y descarga la versión correcta para tu Sistema Operativo.<p>
>![](https://media.giphy.com/media/kdiLau77NE9Z8vxGSO/giphy.gif)
# Integrando Git a VisualStudio Code
Si te gusta trabajar directamente de VisualStudio code sin abrir una terminal aparte de Bash, vamos a integrarlo.
Para ellos seguiremos los siguientes pasos.
- En VisualStudio code presionamos el siguiente comando<p> `ctrl+,`<p>
- En el buscador escribiremos <p>`shell`<p> y buscaremos lo siguiente
```sh 
Terminal › Integrated › Shell: Windows
The path of the shell that the terminal uses on Windows (default: C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe).
```
- Si dejamos el mouse sobre el texto aparecere un engrane al lado izquierdo, vamos a dar clic en el y seleccionamos<p> `Copy Setting as a JSON`<p>
- Ahora damos clic en <p>`Edit in setting.json`<p>
- Dentro de setting.json pegamos el texto copiado y cambiamos la ruta por la de nuestro GIT, en mi caso quedo así:
````sh
{
    terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
}
````
- Listo solo queda guardar nuestros cambios y reiniciar VisualStudio Code.

# Instalando TestCafe
Aqui nos encontramos con algo tan facil como un comando el cual nos ayuda a descargarlo de su repositorio.<p>
`npm install -g testcafe`<p>
Una vez instalado comprobamos que existe con el siguiente comando:<p>
`testcafe -v`
  
# Felicidades!!

**Ahora que ya tienes testcafe puedes comenzar a interactuar con el contenido de este repositorio.**<p>
![](https://media.giphy.com/media/xT1XGzXhVgWRLN1Cco/giphy.gif)
