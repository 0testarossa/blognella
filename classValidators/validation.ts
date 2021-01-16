import { validateOrReject } from "class-validator";

export async function validateOrRejectExample(input) {
    try {
      await validateOrReject(input);
      return 'OK'
    } catch (errors) {
    //   console.log('Caught promise rejection (validation failed). Errors: ', errors);
      throw errors;
    }
  }
