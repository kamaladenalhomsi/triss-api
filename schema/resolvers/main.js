import { mergeResolvers } from 'merge-graphql-schemas';
import UserResolver from './user';


const resolver = [
  new UserResolver()
];

export default mergeResolvers(resolver);