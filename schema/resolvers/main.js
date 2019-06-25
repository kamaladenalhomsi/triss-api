import { mergeResolvers } from 'merge-graphql-schemas';
import UserResolver from './user';
import RoleResolver from './role';


const resolver = [
  new UserResolver(),
  new RoleResolver()
];

export default mergeResolvers(resolver);