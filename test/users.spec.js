var chai = require("chai"),
  chaiHttp = require("chai-http");
var expect = chai.expect;
chai.use(chaiHttp);
var app = require("../app");

describe("users page", function () {
  it("body should be equal to 'respond with a resource'", function () {
    chai
      .request(app)
      .get("/users")
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.equal("respond with a resource");
      });
  });
});
