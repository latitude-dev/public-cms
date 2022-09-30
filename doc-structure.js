import S from "@sanity/base/structure-builder";

const singletons = ["home", "about", "pricing", "layout", "privacy", "terms"];

export default [
  ...S.defaultInitialValueTemplateItems().filter(
    (doc) => !singletons.includes(doc.spec.id)
  ),
];
