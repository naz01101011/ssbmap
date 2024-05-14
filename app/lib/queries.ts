export const slugsQuery = `*[defined(slug.current)] | order(publishedAt desc) {
    _type == "post" => {
      "slug": "stiri/" + slug.current
    },
    _type == "page" => {
      "slug": slug.current
    }
}[0..500]`;
