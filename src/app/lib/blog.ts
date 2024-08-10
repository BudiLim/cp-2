import resolveResponse from 'contentful-resolve-response'

export const getBlogs = async () => {
    const res = await fetch(`https://cdn.contentful.com/spaces/dzi5m3tms0qq/environments/master/entries?access_token=HT8vlrUDt9ZTZPj5Bt5ex8DNojLk7gujARtocQtslgU&content_type=blog&include=10`, { next: {  revalidate: 10 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items
}

export const getBlogSlug = async (slug: string) => {
    const res = await fetch(`https://cdn.contentful.com/spaces/dzi5m3tms0qq/environments/master/entries?access_token=HT8vlrUDt9ZTZPj5Bt5ex8DNojLk7gujARtocQtslgU&content_type=blog&include=10&fields.slug=${slug}`, { next: {  revalidate: 3600 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items[0]
}