import { basicSchema } from "../../lib/helpers";

const wildcardSection = basicSchema({
  title: "Wildcard section",
  type: "object",
  required: false,
  fields: [
    basicSchema({
      title: "Title",
      required: false,
    }),
    basicSchema({
      title: "Description",
      type: "basicBlock",
      required: false,
    }),
    basicSchema({
      title: "Image",
      type: "image",
      required: false,
      options: {
        metadata: ["lqip"],
      },
    }),
  ],
});

export default wildcardSection;
