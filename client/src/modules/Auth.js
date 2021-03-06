import jwt_decode from 'jwt-decode';

class Auth {
  static user
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

    static setCurrentUser(user) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user)
    }
 
    static getCurrentUser() {
      return JSON.parse(localStorage.getItem('user')) || [];
    }

    static setCurrentToken(token) {
      var one = jwt_decode(token);
      this.user.id = one
      var user = JSON.parse(localStorage.getItem('user')) || {}
      user.id = one
      localStorage.setItem('user', JSON.stringify(user));
      console.log(this.user.id.id)
    }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated(token) {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken(token) {
    return localStorage.getItem('token');
  }

}

export default Auth;