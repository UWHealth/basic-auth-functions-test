// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const _ = require('lodash');

exports.handler = async (event) => {
  try {
    const subject = (event.path || 'World' ).replace("/hello-world/","");
    if (subject === 'failure') throw new Error('Failure!');
    console.log(event);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello ${subject}. ${_.upperCase('Are you having a nice day?')}`
      }),
      headers: { 'Content-Type': 'application/json' }
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
