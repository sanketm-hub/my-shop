import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "ratings",
      title: "Ratings",
      type: "object",
      fields: [
        defineField({
          name: "average",
          title: "Average Rating",
          type: "number",
          initialValue: 0,
          validation: (Rule) => Rule.min(0).max(5),
        }),
        defineField({
          name: "reviewsCount",
          title: "Number of Reviews",
          type: "number",
          initialValue: 0,
        }),
      ],
    }),
  ],
});

export default product;
