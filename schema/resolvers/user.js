/**
 * User Resolver @class 
 */

class UserResolver {
  message(_, args) {
    return "Hello FUCKING"
  }
  sayMyName(args, obj, context) {
    console.log(args, "args");
    // console.log(obj, "obj");
    // console.log(context, "context");
    return args;
  }
}

export default UserResolver;


