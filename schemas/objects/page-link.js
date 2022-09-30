import { basicSchema } from "../../lib/helpers";

const pageLink = basicSchema({
  title: "Page Link",
  type: "reference",
  to: [
    { type: "home" },
    { type: "pricing" },
    { type: "about" },
    { type: "terms" },
    { type: "privacy" },
  ],
});

export default pageLink;
