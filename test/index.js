let http = require('http');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../app');
let assert = require('assert');

chai.use(chaiHttp);

describe('Node Server', () => {
	it('(GET /api) returns the homepage', (done)=> {
		chai.request(server)
			.get('/api')
			.end( (err, res) => {
				res.should.have.status(200);
				res.text.should.contain('Welcome to Express')
				done();
			});
	})
});