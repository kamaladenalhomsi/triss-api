import path from 'path';
import { fileLoader } from 'merge-graphql-schemas';
import { mergeTypes } from 'merge-graphql-schemas';
 
const typesArray = fileLoader(path.join(__dirname, '*.gql'))
 
module.exports = mergeTypes(typesArray, { all: true })