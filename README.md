# Fundamentos de TypeScript

Practica de TypeScript seguida del curso [Fundamentos de TypeScript](https://platzi.com/cursos/typescript/)

## Compilar/Transpilar archivos TypeScript
Mediante la libreria `tsc` es posible transpilar archivos `.ts` a `.js`, siendo estos últimos los que lee el navegador.

### `Compilado`
```bash
npx tsc folder/file.ts
```
obtendremos un archivo `file.js`

### `Compilado a una versión especifica`
```bash
# npx tsc folder/file.ts --targert [VERSION]
npx tsc folder/file.ts --targert es6
```
Con la instrucción `target` le indicames que transpile a la versión que le indicamos, esto es útil cuando trabajamos sobre distintas versiones de JavaScript.

### `Enviar compilado a una ruta distinta`
```bash
# npx tsc folder/file.ts --outDir [RUTA]
npx tsc folder/file.ts --outDir dist
```
Va a crear el archivo `file.js` en el directorio `dist/`

## Compilado global
Compilar manualmente archivo por archivo no es lo más viable, por eso la libreria `tsc` nos provee una solución utilizando un archivo de configuración llamado `TSConfig.json`.

En la terminal corremos el comando
```bash
npx tsc --init
```
y obtendremos el siguiente output:

```bash
Created a new tsconfig.json with:

  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```
El resultado anterior indica cuales son las configuraciónes que ya estan precargadas en el archivo `TSConfig.json` que se creó en la raíz del proyecto.

El siguiente comando permite transpilar en tiempo real los archivos `.ts`:
```bash
npx tsc --watch
```
