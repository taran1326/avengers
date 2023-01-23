const request = require('supertest');
const app = require('./app'); // your application file

describe('Server', () => {
  it('should return the home page for the root URL', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return the avenger1 page for /Avenger1 URL', (done) => {
    request(app)
      .get('/Avenger1')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return the avenger2 page for /Avenger2 URL', (done) => {
    request(app)
      .get('/Avenger2')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return the avenger3 page for /Avenger3 URL', (done) => {
    request(app)
      .get('/Avenger3')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return 404 for a non-existent URL', (done) => {
    request(app)
      .get('/not-found')
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
