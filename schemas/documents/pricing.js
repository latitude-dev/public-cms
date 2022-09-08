import { basicSchema } from "../../lib/helpers";

export default {
  name: "pricing",
  title: "Pricing",
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
          title: "Title",
        }),
        basicSchema({
          title: "Main header",
        }),
        basicSchema({
          title: "Pricing List",
          type: "array",
          of: [
            basicSchema({
              title: "Pricing",
              type: "object",
              fields: [
                basicSchema({
                  title: "Name",
                }),
                basicSchema({
                  title: "Description",
                }),
                basicSchema({
                  title: "Price",
                  type: "number",
                }),
                basicSchema({
                  title: "Period",
                  required: false,
                }),
                basicSchema({
                  title: "Billing label",
                }),
                basicSchema({
                  title: "Button label",
                }),
                basicSchema({
                  title: "Button link",
                  type: "url",
                }),
                basicSchema({
                  title: "Benefits",
                  type: "array",
                  of: [
                    basicSchema({
                      title: "Benefit item",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    basicSchema({
      title: "Enterprise section",
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
          title: "Heading",
        }),
        basicSchema({
          title: "Description",
        }),
        basicSchema({
          title: "Button label",
        }),
        basicSchema({
          title: "Button link",
          type: "url",
        }),
      ],
    }),
    basicSchema({
      title: "FAQ section",
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
          title: "Areas",
          type: "array",
          of: [
            basicSchema({
              title: "Area",
              type: "object",
              fields: [
                basicSchema({
                  title: "Name",
                }),
                basicSchema({
                  title: "Questions",
                  type: "array",
                  of: [
                    basicSchema({
                      title: "Question",
                      type: "object",
                      fields: [
                        basicSchema({
                          title: "Question",
                        }),
                        basicSchema({
                          title: "Answer",
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
        title: "Pricing page",
      };
    },
  },
};
