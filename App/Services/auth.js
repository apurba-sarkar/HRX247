import axios from "axios";
const API =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_uToEHwhPazT6sUSG2u-tlCmamnYTh08";

async function createUser({ fullname, age,email, bloodgroup, mobile, password }) {
  try {
    await axios.post(API, {
      email,
      password,
      returnSecureToken: true,
    });

    console.log("this is from auth");
    console.log(email);
  } catch (error) {
    console.log(error.message);
    console.log("---------");
  }
}
export default createUser;
