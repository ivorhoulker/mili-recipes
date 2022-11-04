import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "", // Get this from tina.io
  token: process.env.TINA_TOKEN || "", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],

        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "index") {
              return `/`;
            }

            return `/${document._sys.filename}`;
          },
        },
      },
      {
        name: "recipes",
        label: "Recipes",
        path: "content/recipes",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "number",
            name: "priority",
            label: "Priority",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],

        ui: {
          router: ({ document }) => `/recipes/${document._sys.filename}`,
        },
      },
    ],
  },
});
