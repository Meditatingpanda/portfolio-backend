export default {
    name: 'internship',
    type: 'document',
    title: 'Internship',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'

        },{
          name:'url',
          type:'url',
          title:'URL'  
        },
        {
            name:'from',
            type: 'datetime',
            title: 'From'
        },
        {
            name:'to',
            type: 'datetime',
            title: 'To'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'shortDescription',
            type: 'string',
            title: 'Short Description'
        },
        {
            name: 'desc',
            type: 'array',
            title: 'Description',
            of: [
                {
                    type: 'block'
                }
            ]
        }
        , {
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