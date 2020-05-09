export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb6bcccdfd2a034f1e25494',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6yrwoyaa',
                  apiId: 'd17bf43a-39b8-4c19-b2c7-ff4017cd9fa2'
                },
                {
                  buildHookId: '5eb6bccc8f7aa31350db9962',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fc5nn6gc',
                  apiId: '0ddc9b0a-9bfd-4aec-9461-54e9bb181e51'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OllieJT/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fc5nn6gc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
