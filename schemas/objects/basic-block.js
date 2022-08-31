import { basicSchema } from "../../lib/helpers";

export const BasicBlock = basicSchema({
  type: "array",
  title: "Basic block",
  of: [
    {
      type: "block",
      styles: [],
      lists: [],
      marks: {
        decorators: [
          {
            title: "Strong",
            value: "strong",
          },
          {
            title: "Emphasis",
            value: "em",
          },
        ],
      },
    },
  ],
});
