const {
  getResources,
  getResource,
  addResource,
  deleteResource
} = require('../dal')
const pkGen = require('../lib/pkGen')

module.exports = app => {
  app.get('/resources', (req, res) => {
    getResources({
      include_docs: true,
      startkey: 'resource_',
      endkey: 'resource_\ufff0'
    })
      .then(resources => res.send(resources))
      .catch(err => console.log(err))
  })
  app.get('/resources/:id', (req, res) => {
    getResource(req.params.id).then(resource => res.send(resource))
  })

  app.post('/resources', (req, res) => {
    addResource(req.body)
      .then(addedResource => res.status(201).send(addedResource))
      .catch(err => console.log('Post Resource ERROR', err))
  })

  app.delete('/resources/:id', (req, res) => {
    deleteResource(req.params.id)
      .then(deletedResult => res.status(200).send(deletedResult))
      .catch(err => console.log('Could not delete item.'))
  })
}
