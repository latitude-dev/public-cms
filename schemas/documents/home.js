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
      validation: (Rule) => Rule.required().min(1).max(3),
      options: {
        collapsible: true,
        collapsed: true,
      },
      of: [
        basicSchema({
          title: "Name",
        }),
        basicSchema({
          title: "Title",
        }),
        basicSchema({
          title: "Description",
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
        }),
        basicSchema({
          title: "Cards",
          type: "array",
          of: [
            basicSchema({
              title: "Title",
            }),
            basicSchema({
              title: "Description",
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
