export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        }, {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'link',
            type: 'url',
            title: 'Link'
        }

    ]


}