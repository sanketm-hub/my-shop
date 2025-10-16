import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../Scehmas/products'
import user  from '../Scehmas/user'
import {category} from '../Scehmas/category'
import blog  from '../Scehmas/blogs'
import blogcategory from '../Scehmas/blogcategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, user, category, blog, blogcategory],
  
}
