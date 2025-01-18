import {defineQuery} from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc){
  _id, 
  type, 
  slug, 
  _createdAt, 
  author -> {
    _id, name, image, bio
  }, 
  views, 
  description,
  category, 
  image,
  title
}`);

export const STARTUP_BY_ID_QUERY = defineQuery(`
*[_type == "startup" && _id == $id ][0]{
  _id, 
  slug, 
  _createdAt, 
  author -> {
    _id, name, username, image, bio
  }, 
  views, 
  description,
  category, 
  image,
  title,
  pitch
}`)