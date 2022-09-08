// Sanity
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
// Document schemas
import home from "./documents/home";
import layout from "./documents/layout";
import about from "./documents/about";
import pricing from "./documents/pricing";
// Object schemas
import seo from "./objects/seo";
import button from "./objects/button";
import pageLink from "./objects/page-link";
import basicBlock from "./objects/basic-block";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    home,
    pricing,
    about,
    layout,
    seo,
    button,
    pageLink,
    basicBlock,
  ]),
});
