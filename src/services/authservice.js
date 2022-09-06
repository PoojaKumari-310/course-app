//The service uses Axios for HTTP requests and Local Storage for user information & JWT.
//It provides following important methods:
// login(): POST {username, password} & save JWT to Local Storage
// logout(): remove JWT from Local Storage
// register(): POST {username, email, password}


//We also have methods for retrieving data from server. In the case we access protected resources, the HTTP request needs Authorization header.
//Let’s create a helper function called authHeader() inside auth-header.js:
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('myUser'));
    if (user && user.token) {
      return { Authorization: 'Bearer ' + user.token};
    } else {
      return {};
    }
  }

  // The code above checks Local Storage for myUser item. If there is a logged in user with accessToken (JWT), return HTTP Authorization header. Otherwise, return an empty object.