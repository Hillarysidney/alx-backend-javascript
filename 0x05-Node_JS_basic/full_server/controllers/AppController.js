class AppController {
  static getHomepage(req, res) {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }
}

export default AppController;
