import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .child(
          S.document()
            .schemaType("home")
            .documentId("c40eae23-677d-444d-b1ef-f753fdc07bd6")
            .views([S.view.form()])
        ),
      S.listItem()
        .title("About")
        .child(
          S.document()
            .schemaType("about")
            .documentId("25fb0a78-a5fe-4c74-9f4a-44be93f6ff6b")
            .views([S.view.form()])
        ),
      S.listItem()
        .title("Pricing")
        .child(
          S.document()
            .schemaType("pricing")
            .documentId("1b8efa64-9caa-47dd-b97b-9748c64fda1f")
            .views([S.view.form()])
        ),
    ]);
