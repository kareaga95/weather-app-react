# 🌦️ My Weather

MyWeather es una aplicación web que proporciona información meteorológica actualizada, noticias relevantes y eventos deportivos para cualquier ubicación del mundo. Los usuarios pueden consultar el clima actual, pronósticos diarios y por hora, además de acceder a un carrusel interactivo de noticias y eventos destacados.

## 📋 Tabla de Contenidos

1. [Características](#-características)
2. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
3. [Instalación](#-instalación)
4. [Uso](#-uso)
5. [Endpoints](#-endpoints)
6. [Colaboradores](#-colaboradores)

## 🌟 Características

- Búsqueda interactiva del clima por ciudad.
- Información detallada del clima actual:
- Temperatura, humedad, viento, y condiciones climáticas.
- Pronóstico diario a 7 días y por horas.
- Carrusel interactivo de noticias locales relevantes.
- Carrusel de eventos deportivos destacados del día actual.
- Diseño responsive, optimizado para móviles y ordenadores.

## 🛠️ Tecnologías Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## ⚙️ Instalación

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/kareaga95/weather-app-react

    ```
2. **Inicia la aplicacion**:

    npm run dev  

4. **Disfruta de nuestra app :)**

## 🚀 Uso

1. **Buscar una ciudad**:
    - Ingresa una ciudad en la barra de búsqueda y haz clic en el botón Buscar.

2. **Visualizar el clima**:
    - Clima Actual: Muestra la temperatura, condiciones, humedad y viento.
    - Pronóstico por horas: Despliega el clima por horas de un día específico.
    - Pronóstico diario: Permite ver el clima de los proximos 7 dias.

3. **Explorar Noticias y Deportes**:
    - Carrusel de noticias relevantes locales.
    - Carrusel de eventos deportivos actualizados del día.

## 📌 Endpoints

La aplicación utiliza las siguientes APIs para consumir los datos:

1. **WeatherAPI (Clima actual y pronósticos)**:
    - Clima actual: /current.json
    - Pronóstico diario: /current.json
    - Eventos deportivos por ciudad

2. **Mediastack (Noticias):** 
    - Noticias globales por país.
