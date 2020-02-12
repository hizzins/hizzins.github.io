const L = {};

L.map = function*(f, iter) {
  for (let item of iter) {
    yield f(item);
  }
};

L.filter = function*(f, iter) {
  for (let item of iter) {
    if (f(item)) yield item;
  }
};

L.take = function*(limit, iter) {
  for (let item of iter) {
    yield item;
    if (!--limit) break;
  }
};

export default L;
