const { allDocs, getDoc, addDoc, deleteDoc } = require('./lib/dal-helper')
const pkGen = require('./lib/pkGen')

const getResources = options => allDocs(options || { include_docs: true })

const getResource = resourceId => getDoc(resourceId)

const getCategories = options => allDocs(options || { include_docs: true })

const addResource = doc => {
  doc.type = 'resource'
  doc._id = pkGen(doc)
  return addDoc(doc)
}

const deleteResource = doc => {
  return deleteDoc(doc)
}

const dal = {
  getResource,
  getResources,
  getCategories,
  addResource,
  deleteResource
}

module.exports = dal
