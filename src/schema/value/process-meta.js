/**
 * @memberof Eventsource.Schema
 * @typedef {Object} ValueProcessMeta
 */
const schema =
{
  'domain':
  {
    'type'      : 'string',
    'not-empty' : true
  },
  'pid':
  {
    'type'      : 'string',
    'not-empty' : true
  },
  'ppid':
  {
    'type'      : 'string',
    'not-empty' : true,
    'nullable'  : true,
    'default'   : true
  },
  'name':
  {
    'type'      : 'string',
    'not-empty' : true
  }
}

module.exports = schema