process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');
const knex = require('../../src/server/db/connection');

describe('routes : coffee', () => {

  beforeEach(() => {
    return knex.migrate.rollback()
    .then(() => { return knex.migrate.latest(); })
    .then(() => { return knex.seed.run(); });
  });

  describe('GET /coffee/2', () => {
    it('should render a success', (done) => {
      chai.request(server)
      .get('/coffee/2')
      .end((err, res) => {
        return knex('coffee').where('id', 2).first()
        .then((coffee) => {
          res.redirects.length.should.equal(0);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.should.contain.keys('status', 'data');
          res.body.status.should.eql('success');
          res.body.data[0].should.be.a('object');
          res.body.data[0].id.should.eql(coffee.id);
          res.body.data[0].name.should.eql(coffee.name);
          done();
        });
      });
    });
  });

});
