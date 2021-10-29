import _ from 'underscore'

module.exports = (req, res) => {
  const r = _.random(0, 100);
  res.status(200).json({'name': 'yoda', 'r': r})
};