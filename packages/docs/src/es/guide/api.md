---
title: API
description: Statusfy es un SPA (Single Page Application o Aplicación de Página Única) que lee sus datos desde una API RESTful interna. Tu también puedes recuperar estos datos desde una aplicación o biblioteca existente que puedas estar usando.
date: 2018-10-12T17:28:04Z
permalink: /guide/api
sidebarDepth: 3
---

# API

Statusfy es un SPA ([Single Page Application o Aplicación de Página Única](https://es.wikipedia.org/wiki/Single-page_application)) que lee sus datos desde una API RESTful interna. Tu también puedes recuperar estos datos desde una aplicación o biblioteca existente que puedas estar usando.

::: warning IMPORTANTE
Las URL de los **Endpoints** son diferentes en ambos modos de implementación: **Generación Estática** or **Renderizado por Servidor**.
:::

## Parámetros Comunes

Cada uno de los *Endpoints* ubicados más abajo tiene parámetros comunes que se pueden usar:

### :page

Indica el número de página. Se puede definir de dos maneras:

- **Generación Estática:** en la ruta de la URL de los *Endpoints* finales.
- **Renderizado por Servidor:** como una cadena de consulta (*query strong*).

### :lang

Indica el idioma de la respuesta requerida. Se puede definir de dos maneras:

- **Generación Estática:** en la ruta de la URL de los *Endpoints* finales.
- **Renderizado por Servidor:** en el cabecera HTTP de solicitud `Accept-Language`.

## Ruta de Base

La ruta base de los *Endpoints* es diferente en cada modo de despliegue:

|   Generación Estática  | Renderizado por Servidor |
|:----------------------:|:------------------------:|
| /static/content/api/v0 |         /api/v0/         |

## Endpoints

### /incidents <Badge text="get" />

Obtiene todos los incidentes.

|     |          Generación Estática         | Renderizado por Servidor |
|:---:|:------------------------------------:|:------------------------:|
| URL | /incidents.page-`:page`.`:lang`.json |  /incidents?page=`:page` |

**Ejemplo de respuesta:**

```json
{
  "count": 50,
  "page": 1,
  "page_size": 10,
  "total_pages": 5,
  "incidents": [
    {
      "id": "1a96284b",
      "title": "Conversions Issues",
      "description": "Our Files Conversion System were not responding properly.",
      "date": "2018-11-09T16:23:42.505Z",
      "modified": "2018-11-09T18:23:42.505Z",
      "severity": "degraded-performance",
      "affectedsystems": [
        "api",
        "cdn"
      ],
      "resolved": false,
      "content": "<p>Our Files Conversion System were not responding properly.</p>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T20:23:42.505Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion Process is responding slowly and we've investigating what is causing this issue.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T21:23:42.505Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Monitoring</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion System is not responding properly and we've investigating what is causing this issue. If you're affected by this issue, you can contact us at our <a href=\"https://demo.statusfy.co\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"external\">Support Page</a>.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T21:53:42.505Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion System is not responding properly and we've investigating what is causing this issue.</p>\n</div></div></div>\n"
    },
    {
      "id": "1a96284c",
      "title": "Files Conversion Issues",
      "description": "Our origin servers were responding slowly.",
      "date": "2018-11-09T16:23:42.505Z",
      "modified": "2018-11-09T18:23:42.505Z",
      "severity": "partial-outage",
      "affectedsystems": [
        "api",
        "cdn",
        "conversions"
      ],
      "resolved": true,
      "content": "<p>Our origin servers were responding slowly.</p>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T20:23:42.505Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion System is not responding properly and we've investigating what is causing this issue. If you're affected by this issue, you can contact us at our <a href=\"https://demo.statusfy.co\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"external\">Support Page</a>.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T21:23:42.505Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Monitoring</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion System is not responding properly and we've investigating what is causing this issue.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T21:53:42.505Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Our origin servers are responding slowly and we've added more capacity and are continuing to investigate.</p>\n</div></div></div>\n"
    },
    ...
  ]
}
```

### /incidents/:id <Badge text="get" />

Obtiene un incidente.

|     |      Generación Estática      | Renderizado por Servidor |
|:---:|:-----------------------------:|:------------------------:|
| URL | /incidents/`:id`.`:lang`.json |     /incidents/`:id`     |

Parámetro Adicional:

- **id:** ID del Incidente

**Ejemplo de respuesta:**

```json
{
  "id": "382ee149",
  "title": "API Issues",
  "description": "Our Files Conversion Process were responding slowly.",
  "date": "2018-09-03T15:48:45.061Z",
  "modified": "2018-09-03T17:48:45.061Z",
  "severity": "partial-outage",
  "affectedsystems": [
    "api",
    "cdn",
    "conversions"
  ],
  "resolved": true,
  "content": "<p>Our Files Conversion Process were responding slowly.</p>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-09-03T19:48:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion System is not responding properly and we've investigating what is causing this issue.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-09-03T20:48:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Monitoring</div>\n            <div class=\"update-block-body\">\n<p>Our origin servers are responding slowly and we've added more capacity and are continuing to investigate.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-09-03T21:18:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Performance is back to normal and we'll continue to monitor.</p>\n</div></div></div>\n"
}
```

### /incidents/history <Badge text="get" />

Obtiene todos los incidentes agrupados por meses.

|     |              Generación Estática             |     Renderizado por Servidor    |
|:---:|:--------------------------------------------:|:-------------------------------:|
| URL | /incidents/history.page-`:page`.`:lang`.json | /incidents/history?page=`:page` |

**Ejemplo de respuesta:**

```json
{
  "count": 10,
  "page": 1,
  "page_size": 3,
  "total_pages": 4,
  "periods": [
    {
      "id": "2018-11",
      "incidents": [
        {
          "id": "1a96284b",
          "title": "Conversions Issues",
          "description": "Our Files Conversion System were not responding properly.",
          "date": "2018-11-09T15:48:45.061Z",
          "modified": "2018-11-09T17:48:45.061Z",
          "severity": "degraded-performance",
          "affectedsystems": [
            "api",
            "cdn"
          ],
          "resolved": false,
          "content": "<p>Our Files Conversion System were not responding properly.</p>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T19:48:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion Process is responding slowly and we've investigating what is causing this issue.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T20:48:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Monitoring</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion System is not responding properly and we've investigating what is causing this issue. If you're affected by this issue, you can contact us at our <a href=\"https://demo.statusfy.co\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"external\">Support Page</a>.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T21:18:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion System is not responding properly and we've investigating what is causing this issue.</p>\n</div></div></div>\n"
        },
        {
          "id": "1a96284c",
          "title": "Files Conversion Issues",
          "description": "Our origin servers were responding slowly.",
          "date": "2018-11-09T15:48:45.061Z",
          "modified": "2018-11-09T17:48:45.061Z",
          "severity": "partial-outage",
          "affectedsystems": [
            "api",
            "cdn",
            "conversions"
          ],
          "resolved": true,
          "content": "<p>Our origin servers were responding slowly.</p>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T19:48:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion System is not responding properly and we've investigating what is causing this issue. If you're affected by this issue, you can contact us at our <a href=\"https://demo.statusfy.co\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"external\">Support Page</a>.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T20:48:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Monitoring</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion System is not responding properly and we've investigating what is causing this issue.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T21:18:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Our origin servers are responding slowly and we've added more capacity and are continuing to investigate.</p>\n</div></div></div>\n"
        },
        ...
      ],
      "order": 1,
      "count": 5
    },
    {
      "id": "2018-10",
      "incidents": [
        ...
      ],
      "order": 2,
      "count": 6
    },
    {
      "id": "2018-9",
      "incidents": [
        ...
      ],
      "order": 3,
      "count": 6
    }
  ]
}
```

### /incidents/timeline <Badge text="get" />

Obtiene todos los incidentes de los últimos 7 días.

|     |        Generación Estática       | Renderizado por Servidor |
|:---:|:--------------------------------:|:------------------------:|
| URL | /incidents/timeline.`:lang`.json |    /incidents/timeline   |

**Ejemplo de respuesta:**

```json
{
  "count": 8,
  "days": [
    {
      "date": "2018-11-09T00:00:00.000Z",
      "count": 2,
      "incidents": [
        {
          "id": "1a96284b",
          "title": "Conversions Issues",
          "description": "Our Files Conversion System were not responding properly.",
          "date": "2018-11-09T15:48:45.061Z",
          "modified": "2018-11-09T17:48:45.061Z",
          "severity": "degraded-performance",
          "affectedsystems": [
            "api",
            "cdn"
          ],
          "resolved": false,
          "content": "<p>Our Files Conversion System were not responding properly.</p>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T19:48:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion Process is responding slowly and we've investigating what is causing this issue.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T20:48:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Monitoring</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion System is not responding properly and we've investigating what is causing this issue. If you're affected by this issue, you can contact us at our <a href=\"https://demo.statusfy.co\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"external\">Support Page</a>.</p>\n</div></div></div>\n<div class=\"update-block\">\n          <div class=\"update-block-date\">2018-11-09T21:18:45.061Z</div>\n          <div class=\"update-block-content\">\n            <div class=\"update-block-title\">Resolved</div>\n            <div class=\"update-block-body\">\n<p>Our Files Conversion System is not responding properly and we've investigating what is causing this issue.</p>\n</div></div></div>\n"
        },
        ...
      ],
      "order": 1
    },
    {
      "date": "2018-11-08T00:00:00.000Z",
      "count": 2,
      "incidents": [
        ...
      ],
      "order": 2
    },
    {
      "date": "2018-11-07T00:00:00.000Z",
      "count": 1,
      "incidents": [
        ...
      ],
      "order": 3
    },
    {
      "date": "2018-11-06T00:00:00.000Z",
      "count": 0,
      "incidents": [],
      "order": 4
    },
    {
      "date": "2018-11-05T00:00:00.000Z",
      "count": 0,
      "incidents": [],
      "order": 5
    },
    {
      "date": "2018-11-04T00:00:00.000Z",
      "count": 0,
      "incidents": [],
      "order": 6
    },
    {
      "date": "2018-11-03T00:00:00.000Z",
      "count": 0,
      "incidents": [],
      "order": 7
    },
    {
      "date": "2018-11-02T00:00:00.000Z",
      "count": 0,
      "incidents": [],
      "order": 8
    }
  ]
}
```

### /systems <Badge text="get" />

Obtiene todos los Sistemas.

|     |  Generación Estática  | Renderizado por Servidor |
|:---:|:---------------------:|:------------------------:|
| URL | /systems.`:lang`.json |         /systems         |

**Ejemplo de respuesta:**

```json
[
  {
    "name": "cdn",
    "status": "degraded-performance",
    "order": 1
  },
  {
    "name": "conversions",
    "status": "operational",
    "order": 2
  },
  {
    "name": "site-delivery",
    "status": "operational",
    "order": 3
  },
  {
    "name": "api",
    "status": "degraded-performance",
    "order": 4
  }
]
```
