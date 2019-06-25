/**
 * User Resolver @class 
 */

import User from '../../models/user';

class UserResolver {
  message(_, args) {
    return "Hello FUCKING"
  }
  async createUser({ userInput }, obj, context) {
    let user = new User({
      ...userInput
    });
    let createdUser = await user.save();
    console.log(createdUser, "CreatedUser")
    return createdUser;
  }
}

export default UserResolver;


