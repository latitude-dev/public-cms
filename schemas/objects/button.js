import { basicSchema } from "../../lib/helpers";

export const Button = basicSchema({
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
