import { basicSchema } from "../../lib/helpers";

export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
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
        }),
        basicSchema({
          title: "Images",
          type: "array",
          of: [
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
        }),
        basicSchema({
          title: "Values",
          type: "array",
          validation: (Rule) => Rule.required().min(1).max(6),
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
  ],
  preview: {
    prepare() {
      return {
        title: "About page",
      };
    },
  },
};
