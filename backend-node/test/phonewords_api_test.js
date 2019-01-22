process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

const error_message = 'Phone number not valid. Has to contain only digits and no 0/1, maximum length 9'

describe('API Tests', () => {
      describe('Test base route', () => {
            it('it should display the example', (done) => {
            chai.request(server)
                  .get('/api/v1')
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.all.keys('phonewords example');
                  done();
                  });
            });
      });
      describe('Test validation', () => {
            it('Test non valid number (0 1)', (done) => {
            chai.request(server)
                  .get('/api/v1/phonewords/154')
                  .end((err, res) => {
                        res.should.have.status(400);
                        res.body.should.have.all.keys('success','phonewords','error')

                        res.body.should.have.property('success').to.equal(false)
                        res.body.should.have.property('error').to.equal(error_message)
                  done();
                  });
            });
            it('Test non valid number (letters)', (done) => {
            chai.request(server)
                  .get('/api/v1/phonewords/novalid')
                  .end((err, res) => {
                        res.should.have.status(400);

                        res.body.should.have.all.keys('success','phonewords','error');
                        res.body.should.have.property('success').to.equal(false);
                        res.body.should.have.property('error').to.equal(error_message);

                  done();
                  });
            });
            it('Test a valid number result length', (done) => {
            chai.request(server)
                  .get('/api/v1/phonewords/43')
                  .end((err, res) => {
                        res.should.have.status(200);

                        res.body.should.have.all.keys('success','phonewords','error');
                        res.body.should.have.property('success').to.equal(true);
                        res.body.should.have.property('error').to.equal('');
                        res.body.should.have.property('phonewords').to.have.lengthOf(9);
                  done();
                  });
            });
            it('Test a valid number result words', (done) => {
                  const words = ["MID","NID","OID","MHD","NHD","OHD","MGD","NGD","OGD","MIE","NIE","OIE",
                  "MHE","NHE","OHE","MGE","NGE","OGE","MIF","NIF","OIF","MHF","NHF","OHF",
                  "MGF","NGF","OGF"]

                  chai.request(server)
                  .get('/api/v1/phonewords/643')
                  .end((err, res) => {
                        res.should.have.status(200);
      
                        res.body.should.have.all.keys('success','phonewords','error');
                        res.body.should.have.property('success').to.equal(true);
                        res.body.should.have.property('error').to.equal('');
                        res.body.should.have.property('phonewords').to.have.lengthOf(27);
                        res.body.should.have.property('phonewords').to.eql(words);
                  done();
                  });
            });
      });
});