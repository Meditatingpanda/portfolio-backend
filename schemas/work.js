export default {
    name: 'work',
    type: 'document',
    title: 'Work',
    fields: [
        
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'shortDescription',
            type: 'string',
            title: 'Short Description'
        },
        {
            name:'link',
            type: 'url',
            title: 'Link'

        },
        {
            name: 'desc',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'image',
            type: 'array',
            title: 'Image',
            of:[
              {
                type: 'image',
              }
            ]
        },
        {
            name: 'stacks',
            type: 'array',
            title: 'Stacks',
            of: [
                {
                    type: 'string'
                }
            ]
        }
    ]
}