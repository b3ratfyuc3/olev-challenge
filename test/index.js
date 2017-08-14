let chai = require("chai");
let chaiHttp = require("chai-http");
/*eslint-disable */
let should = chai.should();
/*eslint-enable*/
let server = require("../app");

chai.use(chaiHttp);

describe("Node Server", () => {
    it("(GET /api) returns the homepage", (done)=> {
        chai.request(server)
            .get("/api")
            .end( (err, res) => {
                res.should.have.status(200);
                res.text.should.contain("Welcome to Express");
                done();
            });
    });

    it("(POST /api/driver/add) should have property status and that equal 1", (done)=> {
        chai.request(server)
            .post("/api/driver/add")
            .set("content-type","application/json")
            .send({name: "Foo 1", surname: " 1"})
            .end( (err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});