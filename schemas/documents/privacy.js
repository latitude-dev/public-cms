import { basicSchema } from "../../lib/helpers";

export default {
  name: "privacy",
  title: "Privacy",
  type: "document",
  fields: [
    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
    },
    basicSchema({
      title: "Title",
    }),
    basicSchema({
      title: "content",
      type: "basicBlock",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Privacy page",
      };
    },
  },
};
