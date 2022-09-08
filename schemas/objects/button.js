import { basicSchema } from "../../lib/helpers";

const button = basicSchema({
  type: "object",
  title: "button",
  fields: [
    basicSchema({
      title: "Label",
    }),
    basicSchema({
      title: "Button options",
      options: {
        list: [
          { title: "Primary button", value: "primary" },
          { title: "Secondary button", value: "secondary" },
          { title: "Link button", value: "link" },
        ],
      },
    }),
  ],
});

export default button;
