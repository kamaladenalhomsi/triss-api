/**
 * Role Resolver @class 
 */

 import Role from '../../models/role';

class RoleResolver {
  createRole({ roleInput }) {
    let role = new Role({
      ...roleInput
    });
    let createdRole = role.save();
    return createdRole;
  }
}

export default RoleResolver;