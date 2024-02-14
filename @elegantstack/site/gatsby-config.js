require("dotenv").config({
  path: "./.env",
});

module.exports = {
  siteMetadata: {
    // General Site Metadata
    title: "FlexiBlog Theme",
    name: "FlexiBlog",
    description: "My site description...",
    address: "New York, NY",
    email: "email@example.com",
    phone: "+1 (888) 888-8888",

    // Site Social Media Links
    social: [
      {
        name: "Github",
        url: "https://github.com/gatsbyjs",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/gatsbyjs",
      },
      {
        name: "Instagram",
        url: "https://instagram.com/gatsbyjs",
      },
    ],

    // Header Menu Items
    headerMenu: [
      {
        name: "Home",
        slug: "/",
      },
      {
        name: "Contact",
        slug: "/contact",
      },
    ],

    // Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: "Quick Links",
        items: [
          {
            name: "Advertise with us",
            slug: "/contact",
          },
          {
            name: "About Us",
            slug: "/about",
          },
          {
            name: "Contact Us",
            slug: "/contact",
          },
        ],
      },
      {
        title: "Legal Stuff",
        items: [
          {
            name: "Privacy Notice",
            slug: "/privacy",
          },
          {
            name: "Cookie Policy",
            slug: "/cookie",
          },
          {
            name: "Terms Of Use",
            slug: "/terms",
          },
        ],
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ["article", "category", "author"],
        queryLimit: 1000,
      },
    },
    {
      resolve: "@elegantstack/gatsby-theme-flexiblog-minimal-v2",
      options: {
        sources: {
          strapi: true,
          local: false,
        },
        // Include other theme-specific options here as needed
        siteUrl: process.env.URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
      },
    },
    // Include any other plugins here
  ],
};
