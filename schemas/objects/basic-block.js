import { basicSchema } from "../../lib/helpers";

const basicBlock = basicSchema({
  type: "array",
  title: "Basic block",
  required: false,
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

export default basicBlock;
