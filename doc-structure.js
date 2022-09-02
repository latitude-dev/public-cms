import S from "@sanity/base/structure-builder";

const singletons = ["home", "about", "pricing"];

export default [
  ...S.defaultInitialValueTemplateItems().filter(
    (doc) => !singletons.includes(doc.spec.id)
  ),
];