import { basicSchema } from "../../lib/helpers";

export default {
  name: "home",
  title: "Home",
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
          title: "Main header",
        }),
        basicSchema({
          title: "Main description",
          type: "text",
        }),
        basicSchema({
          title: "Primary button",
        }),
        basicSchema({
          title: "Secondary button",
        }),
      ],
    }),
    basicSchema({
      title: "Dynamic sections",
      type: "array",
      validation: (Rule) => Rule.required().min(1).max(4),
      options: {
        collapsible: true,
        collapsed: true,
      },
      of: [
        basicSchema({
          title: "Section",
          type: "object",
          fields: [
            basicSchema({
              title: "Name",
            }),
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
    basicSchema({
      title: "Features section",
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
          title: "Cards",
          type: "array",
          of: [
            basicSchema({
              title: "Card",
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
    basicSchema({
      title: "DBT section",
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
