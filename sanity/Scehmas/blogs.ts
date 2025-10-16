import { defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // auto-generate from title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Short summary for blog listing pages",
      validation: (Rule) => Rule.max(200),
    }),

    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Author Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "image",
          title: "Author Image",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "writtenBy",
          title: "Written By Text",
          type: "string",
          initialValue: "Written by",
        },
      ],
    }),

    defineField({
      name: "categories",
      title: "Blog Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "blogCategory" }], 
        },
      ],
    }),

    defineField({
      name: "body",
      title: "Blog Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "featured",
      title: "Featured Blog",
      type: "boolean",
      description: "Mark this blog as featured",
      initialValue: false,
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "author.name",
      media: "featuredImage",
    },
  },
});
