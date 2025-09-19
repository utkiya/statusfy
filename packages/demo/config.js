const oneSignalAppID =
  process.env.ONESIGNAL_APP_ID || "0c13819d-dd92-4c3e-a554-e7ab14c561af";

module.exports = {
  title: "Demo System Status",
  short_title: "System Status",
  description: "A marvelous open source Status Page system",
  baseUrl: "https://demo.statusfy.co",
  analytics: {
    ga: process.env.GA_TRACKING_ID || "UA-XXXXXXXXX-Y",
    mixpanel: process.env.MIXPANEL_TOKEN || "mixpanel-token",
    facebook: process.env.FACEBOOK_TOKEN || "facebook-token",
    segment: process.env.SEGMENT_TOKEN || "segment-token"
  },
  defaultLocale: "en",
  locales: [
    { code: "en", iso: "en-US", name: "English" },
    { code: "es", iso: "es-ES", name: "Español" }
  ],
  content: {
    frontMatterFormat: "yaml",
    systems: ["cdn", "conversions", "site-delivery", "api"]
  },
  head: {
    link: [
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3e4e88"
      }
    ]
  },
  theme: {
    links: {
      en: {
        contact: "https://statusfy.co/support",
        support: "https://statusfy.co/support",
        home: "https://statusfy.co",
        privacy: "https://statusfy.co/data-privacy",
        legal: "https://statusfy.co/legal"
      },
      es: {
        contact: "https://statusfy.co/es/support",
        support: "https://statusfy.co/es/support",
        home: "https://statusfy.co/es",
        privacy: "https://statusfy.co/es/data-privacy",
        legal: "https://statusfy.co/es/legal"
      }
    }
  },
  notifications: {
    twitter: {
      en: "BazziteTech",
      es: "BazziteES"
    },
    support: {
      en: "https://statusfy.co/support",
      es: "https://statusfy.co/es/support"
    },
    webpush: {
      onesignal: {
        appId: oneSignalAppID
      }
    }
  }
};
