export const SITE_URL = "https://www.supergpapp.co.uk";
export const SITE_NAME = "SuperGP";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/features/dashboard-1.png`;

export const DEFAULT_TITLE = "All in one system for GP's and PCN's | SuperGP";
export const DEFAULT_DESCRIPTION = "All in one system for GP's and PCN's";

export const ORGANIZATION = {
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  email: "info@supergpapp.co.uk",
  description: DEFAULT_DESCRIPTION,
};

export const SOFTWARE_APPLICATION = {
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  offers: [
    {
      name: "Starter",
      price: "150",
      priceCurrency: "GBP",
      description: "1-4 sites — unlimited staff, self-service set-up, email support",
    },
    {
      name: "Growth",
      price: "250",
      priceCurrency: "GBP",
      description: "4-8 sites — we set you up, email and Whatsapp support",
    },
    {
      name: "Network",
      price: "400",
      priceCurrency: "GBP",
      description: "9+ sites — full onboarding, dedicated account manager, quarterly reviews",
    },
  ],
};
