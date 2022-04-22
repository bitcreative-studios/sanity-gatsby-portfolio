export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6262346dcd6183249d750e5d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bbfd9h2h',
                  apiId: 'bc1a501b-d6af-4a97-b8a8-89e87e1a4fbc'
                },
                {
                  buildHookId: '6262346d9e21ec27e1306221',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pakdc9pu',
                  apiId: '409ba88e-d0cc-44ca-a194-4a326cded4c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bitwhys/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pakdc9pu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
