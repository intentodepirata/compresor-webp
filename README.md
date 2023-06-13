# Proyecto "compresor_webp"

Este proyecto consiste en un compresor de imágenes y videos que convierte los archivos a los formatos webp y avif, además de crear versiones comprimidas de los archivos jpgs.

## Instalación

Antes de comenzar, asegúrate de tener Node.js y npm (administrador de paquetes de Node.js) instalados en tu sistema. Luego, sigue estos pasos:

1. Clona o descarga el proyecto desde [https://github.com/intentodepirata/compresor-webp.git]([enlace_al_repositorio]()).
2. Navega hasta el directorio del proyecto en tu terminal.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```shell
   npm install
   ```

## Uso

El proyecto proporciona los siguientes scripts de gulp:

- `gulp dev`: Ejecuta la compresión de imágenes y la conversión a webp en modo de desarrollo.

Para utilizar los scripts, ejecuta el siguiente comando en tu terminal:

```shell
npm run dev
```

## Estructura del proyecto

El proyecto sigue la siguiente estructura de directorios:

```
├── destino/
│   └── img/
│       └── ... (archivos de imágenes y videos procesados)
├── imagenes_aqui/
│       └── ... (archivos de imágenes y videos)
├── gulpfile.js
├── package.json
└── ...
```

- El directorio `imagens_aqui/` contiene los archivos de imágenes y videos que se desean procesar.
- El directorio `destino/img/` es el destino donde se guardarán los archivos de imágenes y videos procesados.

## Configuración

Puedes ajustar las opciones de compresión y conversión en los scripts de gulp en el archivo `gulpfile.js`. Asegúrate de modificar las siguientes secciones según tus necesidades:


const opcionesWebp = {
  quality: 50, // Calidad de la conversión a formato webp
};

// ...

const opcionesAvif = {
  quality: 50, // Calidad de la conversión a formato avif
};
```

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los pasos a continuación:

1. Realiza un fork de este repositorio.
2. Crea una nueva rama con tu nueva función: `git checkout -b mi-nueva-funcion`.
3. Realiza los cambios y guarda tus archivos.
4. Confirma tus cambios: `git commit -m "Agrega mi nueva función"`.
5. Envía tus cambios a la rama principal: `git push origin mi-nueva-funcion`.
6. Abre una solicitud de extracción en este repositorio.

## Licencia

Este proyecto está bajo la Licencia [ISC](Antonio Alvarez Lopez).
