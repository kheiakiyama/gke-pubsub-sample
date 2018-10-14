require('dotenv').config()

// Imports the Google Cloud client library
const PubSub = require('@google-cloud/pubsub');

const topicName = 'sample';

// Instantiates a client
const pubsubClient = new PubSub();

const data = JSON.stringify({ foo: 'bar' });
const dataBuffer = Buffer.from(data);

pubsubClient
  .topic(topicName)
  .publisher()
  .publish(dataBuffer)
  .then(messageId => {
    console.log(`Message ${messageId} published.`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
