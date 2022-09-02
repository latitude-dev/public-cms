import { basicSchema } from "../../lib/helpers";

export default {
  name: "layout",
  title: "Layout",
  type: "document",
  fields: [
    basicSchema({
      title: "Header",
      type: "object",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        basicSchema({
          title: "Menu items",
          name: "menuItems",
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
              type: "object",
              title: "Internal link",
              fields: [
                basicSchema({
                  type: "pageLink",
                  title: "Internal link",
                }),
              ],
            }),
          ],
        }),
        basicSchema({
          title: "Right actions",
          type: "array",
          of: [
            basicSchema({
              title: "Action",
              type: "object",
              fields: [
                basicSchema({
                  title: "Button style",
                  type: "button",
                }),
                basicSchema({
                  title: "Link",
                  type: "url",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    basicSchema({
      title: "Footer",
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
          title: "Columns",
          type: "array",
          of: [
            basicSchema({
              title: "Footer block",
              type: "object",
              fields: [
                basicSchema({
                  title: "Name",
                }),

                basicSchema({
                  title: "Links",
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
                      type: "object",
                      title: "Internal link",
                      fields: [
                        basicSchema({
                          type: "pageLink",
                          title: "Internal link",
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
