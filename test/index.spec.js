var chai = require("chai"),
  chaiHttp = require("chai-http");
var expect = chai.expect;
chai.use(chaiHttp);
var app = require("../app");

describe("home page", function () {
  it("body should contain 'Welcome to Express'", function () {
    chai
      .request(app)
      .get("/")
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.contain("Welcome to Express");
      });
  });
});
