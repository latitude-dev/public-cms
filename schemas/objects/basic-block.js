import { basicSchema } from "../../lib/helpers";

const basicBlock = basicSchema({
  type: "array",
  title: "Basic block",
  required: false,
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
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
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
  ],
});

export default basicBlock;
