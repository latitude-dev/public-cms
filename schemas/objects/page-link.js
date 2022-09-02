import { basicSchema } from "../../lib/helpers";

export const PageLink = basicSchema({
  title: "Page Link",
  type: "reference",
  to: [{ type: "home" }, { type: "pricing" }, { type: "about" }],
});
