---
title: Notifications
description: Notifications are a way to keep your users/customers notified with any Incidents update your System may have. Viewers of your Status Page can access the Choices bellow by clicking the Subscribe button.
date: 2018-10-12T17:28:04Z
permalink: /guide/notifications
---

# Notifications <Badge text="0.2.0+"/>

Notifications are a way to keep your users/customers notified with any Incidents update your System may have. Viewers of your Status Page can access the Choices bellow by clicking the Subscribe button.

::: tip
Most of these Notifications Features are enabled by default but you can disable them in your config file. More info [here](../config/README.md#notifications).
:::

## Web Push <Badge text="0.4.0+"/>

Your users/customers can subscribe to Web Push notifications from their browsers. These notifications can only be sent to users who have opted-in to receive these notifications. Web push notifications or browser notifications are supported by Chrome, Firefox, Edge, and Safari.

Currently, Statusfy supports only one Provider: [OneSignal](#onesignal).

### OneSignal <Badge text="0.4.0+"/>

[OneSignal][onesignal-home] is a Free, high volume and reliable push notification service for websites and mobile applications.

## Atom and RSS Feeds <Badge text="0.2.0+"/>

These feeds include all past Incidents and Scheduled Maintenances. Your users/customers can use Feeds Readers or tools like [IFTT][iftt-rss] and [Zapier][zapier-rss] to recieve updates from these feeds.

## iCalendar <Badge text="0.2.0+"/>

Your users/customers can subscribe to a calendar containing all of your upcoming and past Scheduled Maintenances. The calendar is published using iCalendar, a popular format which is supported by most modern calendar applications.

These are the events that are included in the Calendar:

- All active and completed Scheduled Maintenances.
- All upcoming Scheduled Maintenances.


## Twitter <Badge text="0.2.0+"/>

Currently, with this option, you can define Twitter accounts that your users can access in order to receive updates.

## Support Site <Badge text="0.2.0+"/>

Define an external Support Site your users can access in order to receive updates from other sources you may want to provide.



[iftt-rss]: https://ifttt.com/feed
[zapier-rss]: https://zapier.com/apps/rss/integrations
[onesignal-home]: https://onesignal.com/
