---
title: Notificaciones
description: Las notificaciones son una forma de mantener a sus usuarios/clientes notificados con cualquier actualización de Incidentes que pueda tener tu Sistema. Los espectadores de su página de estado pueden acceder a las siguientes opciones haciendo clic en el botón Suscribirse.
date: 2018-10-12T17:28:04Z
permalink: /guide/notifications
---

# Notificaciones <Badge text="0.2.0+"/>

Las notificaciones son una forma de mantener a sus usuarios/clientes notificados con cualquier actualización de Incidentes que pueda tener tu Sistema. Los espectadores de su página de estado pueden acceder a las siguientes opciones haciendo clic en el botón Suscribirse.

::: tip
La mayoría de estas opciones de notificación están habilitadas de forma predeterminada, pero puedes deshabilitarlas en tu archivo de configuración. Más información [aquí](../config/README.md#notifications).
:::

## Web Push <Badge text="0.4.0+"/>

Tus usuarios/clientes pueden suscribirse a las notificaciones Web Push desde sus navegadores. Estas notificaciones sólo pueden enviarse a los usuarios que hayan optado por recibirlas. Las notificaciones web push o las notificaciones del navegador son compatibles con Chrome, Firefox, Edge y Safari.

Actualmente, Statusfy soporta sólo un proveedor: [OneSignal](#onesignal).

### OneSignal <Badge text="0.4.0+"/>

[OneSignal][onesignal-home] es un servicio de notificación push gratuito, de gran volumen y fiable para sitios web y aplicaciones móviles.


## Feeds Atom y RSS <Badge text="0.2.0+"/>

Estos feeds incluyen todos los incidentes Mantenimientos Programados que han pasado. Tus usuarios/clientes pueden usar lectores de feeds o herramientas como [IFTT][iftt-rss] y [Zapier][zapier-rss] para recibir notidicaciones de estos feeds.

## iCalendar <Badge text="0.2.0+"/>

Tus usuarios/clientes pueden suscribirse a un calendario que contiene todos sus Mantenimientos Programados futuros y pasados. El calendario se publica utilizando iCalendar, un formato popular que es compatible con la mayoría de las aplicaciones de calendario modernas.

Estos son los eventos que se incluyen en el Calendario:

- Todos los Mantenimientos Programados activos y completados.
- Todos los Mantenimientos Programados futuros.


## Twitter <Badge text="0.2.0+"/>

Actualmente, con esta opción, puede definir las cuentas de Twitter a las que tus usuarios pueden acceder para recibir actualizaciones.

## Sitio de Soporte <Badge text="0.2.0+"/>

Define un sitio de soporte externo al que puedan acceder tus usuarios para recibir actualizaciones de otras fuentes que desees proporcionar.



[iftt-rss]: https://ifttt.com/feed
[zapier-rss]: https://zapier.com/apps/rss/integrations
[onesignal-home]: https://onesignal.com/
