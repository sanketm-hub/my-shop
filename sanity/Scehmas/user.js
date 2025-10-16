export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      description: "Hashed password only",
    },
  ],
};
