import { basicSchema } from "../../lib/helpers";

export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
    },
    basicSchema({
      title: "Hero section",
      type: "object",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        basicSchema({
          title: "title",
        }),
        basicSchema({
          title: "Main header",
        }),
        basicSchema({
          title: "Main description",
        }),
        basicSchema({
          title: "Images",
          type: "array",
          validation: (Rule) => Rule.required().max(4),
          of: [
            basicSchema({
              title: "Pricing",
              type: "object",
              fields: [
                basicSchema({
                  title: "High resolution image",
                  type: "image",
                }),
                basicSchema({
                  title: "Low resolution image",
                  type: "image",
                }),
                basicSchema({
                  title: "Is landscape",
                  type: "boolean",
                  initialValue: false,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    basicSchema({
      title: "Mission section",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        basicSchema({
          title: "Title",
        }),
        basicSchema({
          title: "Description",
          type: "text",
        }),
        basicSchema({
          title: "Show signatures",
          type: "boolean",
          initialValue: true,
        }),
      ],
    }),
    basicSchema({
      title: "Place section",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        basicSchema({
          title: "Title",
        }),
        basicSchema({
          title: "Description",
          type: "text",
        }),
        basicSchema({
          title: "Images",
          type: "array",
          of: [
            basicSchema({
              title: "Image",
              type: "image",
            }),
          ],
        }),
      ],
    }),
    basicSchema({
      title: "Team section",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        basicSchema({
          title: "Title",
        }),
        basicSchema({
          title: "Description",
          type: "text",
        }),
        basicSchema({
          title: "Images",
          type: "array",
          of: [
            basicSchema({
              title: "Employee",
              type: "object",
              fields: [
                basicSchema({
                  title: "Image",
                  type: "image",
                }),
                basicSchema({
                  title: "Name",
                }),
                basicSchema({
                  title: "Role",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    basicSchema({
      title: "Values section",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        basicSchema({
          title: "Title",
        }),
        basicSchema({
          title: "Description",
          type: "text",
        }),
        basicSchema({
          title: "Values",
          type: "array",
          validation: (Rule) => Rule.required().min(1).max(6),
          of: [
            basicSchema({
              title: "Value",
              type: "object",
              fields: [
                basicSchema({
                  title: "Title",
                }),
                basicSchema({
                  title: "Description",
                  type: "text",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About page",
      };
    },
  },
};
