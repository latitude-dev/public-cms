import { basicSchema } from "../../lib/helpers";

export default {
  name: "layout",
  title: "Layout",
  type: "document",
  fields: [
    basicSchema({
      title: "Footer",
      type: "object",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        basicSchema({
          title: "Title",
        }),
        basicSchema({
          title: "Description",
        }),
        basicSchema({
          title: "Button label",
        }),
        basicSchema({
          title: "Social networks",
          type: "object",
          fields: [
            basicSchema({
              title: "Twitter",
              type: "url",
            }),
            basicSchema({
              title: "LinkedIn",
              type: "url",
            }),
            basicSchema({
              title: "Slack",
              type: "url",
            }),
          ],
        }),
        basicSchema({
          title: "Links",
          type: "array",
          of: [
            basicSchema({
              title: "Footer block",
              type: "object",
              fields: [
                basicSchema({
                  title: "Link",
                  type: "array",
                  of: [
                    basicSchema({
                      type: "object",
                      title: "External link",
                      fields: [
                        basicSchema({
                          title: "Label",
                        }),
                        basicSchema({
                          title: "Link",
                          type: "url",
                        }),
                      ],
                    }),
                    basicSchema({
                      title: "Page reference",
                      type: "reference",
                      to: [
                        { type: "home" },
                        { type: "pricing" },
                        { type: "about" },
                      ],
                    }),
                  ],
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
        title: "Layout",
      };
    },
  },
};
