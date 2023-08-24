export const slugsQuery = `*[defined(slug.current)]{
    _type == "post" => {
      "slug": "stiri/" + slug.current
    },
    _type == "page" => {
      "slug": slug.current
    }
}`;
