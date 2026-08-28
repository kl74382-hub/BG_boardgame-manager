const fs = require('fs');

const origReadlinkSync = fs.readlinkSync;
fs.readlinkSync = function (path, options) {
  try {
    return origReadlinkSync(path, options);
  } catch (err) {
    if (err.code === 'EISDIR' || err.code === 'EINVAL') {
      const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
      e.code = 'EINVAL';
      throw e;
    }
    throw err;
  }
};

const origReadlink = fs.readlink;
fs.readlink = function (path, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  return origReadlink(path, options, (err, linkString) => {
    if (err && (err.code === 'EISDIR' || err.code === 'EINVAL')) {
      const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
      e.code = 'EINVAL';
      return callback(e);
    }
    return callback(err, linkString);
  });
};

if (fs.promises && fs.promises.readlink) {
  const origPromisesReadlink = fs.promises.readlink;
  fs.promises.readlink = async function (path, options) {
    try {
      return await origPromisesReadlink(path, options);
    } catch (err) {
      if (err.code === 'EISDIR' || err.code === 'EINVAL') {
        const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
        e.code = 'EINVAL';
        throw e;
      }
      throw err;
    }
  };
}
