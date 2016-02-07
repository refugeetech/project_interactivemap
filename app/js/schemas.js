import { Schema, arrayOf } from 'normalizr'

export const section = new Schema('sections')
export const category = new Schema('categories')
export const post = new Schema('posts')

section.define({
  categories: arrayOf(category)
})

category.define({
  posts: arrayOf(post)
})