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
          title: "Primary button link",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }),
        }),
        basicSchema({
          title: "Secondary button",
        }),
        basicSchema({
          title: "Secondary button link",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }),
        }),
        basicSchema({
          title: "Mobile image",
          type: "image",
          options: {
            metadata: ["lqip"],
          },
        }),
        basicSchema({
          title: "Tablet image",
          type: "image",
          options: {
            metadata: ["lqip"],
          },
        }),
        basicSchema({
          title: "Video",
          type: "object",
          required: false,
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            basicSchema({
              title: "Button label",
            }),
            basicSchema({
              title: "Button style",
              options: {
                list: [
                  { title: "Primary button", value: "primary" },
                  { title: "Secondary button", value: "secondary" },
                  { title: "Ghost button", value: "ghost" },
                  { title: "White button", value: "white" },
                  { title: "Link button", value: "link" },
                ],
              },
            }),
            basicSchema({
              title: "HTML",
              type: "text",
            }),
          ],
        }),
      ],
    }),
    basicSchema({
      title: "Dynamic sections",
      type: "array",
      validation: (Rule) => Rule.required().min(4).max(4),
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
              title: "Logo",
              type: "image",
              options: {
                metadata: ["lqip"],
              },
            }),
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
            basicSchema({
              title: "Blocks name",
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
          validation: (Rule) => Rule.required().min(2).max(5),
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
                basicSchema({
                  title: "Image",
                  type: "image",
                  options: {
                    metadata: ["lqip"],
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    basicSchema({
      title: "Testimonials",
      validation: (Rule) => Rule.required().min(1).max(4),
      type: "array",
      of: [
        basicSchema({
          title: "Testimonial",
          type: "object",
          fields: [
            basicSchema({
              title: "Content",
            }),
            basicSchema({
              title: "Author",
            }),
            basicSchema({
              title: "Author position",
            }),
            basicSchema({
              title: "Photo",
              type: "image",
              options: {
                metadata: ["lqip"],
              },
            }),
            basicSchema({
              title: "Logo active",
              type: "image",
              options: {
                metadata: ["lqip"],
              },
            }),
            basicSchema({
              title: "Logo inactive",
              type: "image",
              options: {
                metadata: ["lqip"],
              },
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
          title: "Logo",
          type: "image",
          options: {
            metadata: ["lqip"],
          },
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
  preview: {
    prepare() {
      return {
        title: "Home page",
      };
    },
  },
};
