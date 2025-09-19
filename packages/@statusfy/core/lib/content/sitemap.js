const sm = require("sitemap");
const { Dates } = require("@statusfy/common");

const createDatabase = require("./database");

const dates = Dates();

module.exports = async function sitemap(siteConfig) {
  const database = await createDatabase(siteConfig);

  const sitemap = sm.createSitemap({
    hostname: siteConfig.baseUrl,
    cacheTime: 86400, // 1 day
    xslUrl: "/sitemap.xsl"
  });

  siteConfig.locales.forEach(locale => {
    const prefix =
      locale.code === siteConfig.defaultLocale ? "" : `/${locale.code}`;
    const fixedPages = ["/", "/history"];
    const base = {
      changefreq: "daily",
      priority: 0.8,
      lastmodISO: dates.parse().toISOString()
    };

    // Fixed Pages
    fixedPages.forEach(route => {
      sitemap.add({
        ...base,
        url: `${siteConfig.baseUrl}${prefix}${route}`
      });
    });

    // History Pages
    const historyPage1 = database.incidentsHistory(locale.code);
    const totalPages = historyPage1.total_pages;

    for (let page = 2; page <= totalPages; page++) {
      sitemap.add({
        ...base,
        url: `${siteConfig.baseUrl}${prefix}/history/${page}`
      });
    }

    // Incidents Pages
    const { incidents } = database.incidents(locale.code, 1, -1);

    incidents.forEach(incident => {
      sitemap.add({
        ...base,
        url: `${siteConfig.baseUrl}${prefix}/incidents/${incident.id}`,
        changefreq: "weekly",
        priority: 0.7,
        lastmodISO: dates.parse(incident.modified).toISOString()
      });
    });
  });

  return sitemap.toString();
};
