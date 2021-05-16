import { expect } from 'chai';

const myAsyncFunction = (callback) => {
  setTimeout(() => {
    callback('blah');
  }, 50);
};

const myPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('blah');
    }, 50);
  });
};

describe('async test suite ', () => {
  it('Asyncronous test expects to return "blah". Using done()', () => {
    myAsyncFunction((str) => {
      expect(str).to.equal('blah');
      done();
    });
  });
  //Note: You can't have 2 functions using 'done()' in the same suite.
  it('Fail because the function at the top uses done()', async () => {
    return myPromiseFunction().then((res) => {
      expect(res).to.equal('blah');
    });
  });
});

describe('async test suite without explicit done()', () => {
  it('Asyncronous function expects to return "blah" using Promise', async () => {
    return myPromiseFunction().then((res) => {
      expect(res).to.equal('blah');
    });
  });
  it('test asynv await', async () => {
    const result = await myPromiseFunction();
    expect(result).to.equal('blah');
  });
});
