export const getRoute = (type) => {
  switch (type) {
    case "homePage":
      return "/";
    default:
      return "/";
  }
};

export const basicSchema = ({
  title,
  type = "string",
  required = true,
  ...rest
}) => {
  const camelcaseName = title
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");

  return {
    title,
    name: camelcaseName,
    type,
    ...(required && !rest.validation
      ? {
          validation: (Rule) => Rule.required(),
        }
      : {}),
    ...rest,
  };
};
