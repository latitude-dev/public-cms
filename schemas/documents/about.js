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
          title: "Sticker",
          type: "image",
          options: {
            metadata: ["lqip"],
          },
        }),
        basicSchema({
          title: "Images",
          type: "array",
          validation: (Rule) => Rule.required().max(4).min(4),
          of: [
            basicSchema({
              title: "image",
              type: "image",
              fields: [
                basicSchema({
                  title: "Is landscape",
                  type: "boolean",
                  initialValue: false,
                  required: false,
                }),
              ],
              options: {
                metadata: ["lqip"],
              },
            }),
          ],
        }),
      ],
    }),
    basicSchema({
      title: "Body",
      type: "array",
      of: [
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
              type: "basicBlock",
            }),
            basicSchema({
              title: "Signatures",
              type: "array",
              validation: (Rule) => Rule.max(2),
              of: [
                basicSchema({
                  title: "image",
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
              type: "basicBlock",
            }),
            basicSchema({
              title: "Images",
              type: "array",
              validation: (Rule) => Rule.max(4).min(4),
              of: [
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
              type: "basicBlock",
            }),
            basicSchema({
              title: "Employees",
              type: "array",
              of: [
                basicSchema({
                  title: "Employee",
                  type: "object",
                  fields: [
                    basicSchema({
                      title: "Image",
                      type: "image",
                      options: {
                        metadata: ["lqip"],
                      },
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
              type: "basicBlock",
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
        basicSchema({
          title: "Wildcard section",
          type: "wildcardSection",
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
