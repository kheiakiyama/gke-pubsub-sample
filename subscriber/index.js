
function createSubscription(topicName, subscriptionName) {
  // [START pubsub_create_pull_subscription]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'my-topic';
  // const subscriptionName = 'my-sub';

  // Creates a new subscription
  pubsub
    .topic(topicName)
    .createSubscription(subscriptionName)
    .then(results => {
      const subscription = results[0];
      console.log(`Subscription ${subscriptionName} created.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_create_pull_subscription]
}

function listenForMessages(subscriptionName, timeout) {
  // [START pubsub_subscriber_async_pull]
  // [START pubsub_quickstart_subscriber]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const subscriptionName = 'my-sub';
  // const timeout = 60;

  // References an existing subscription
  const subscription = pubsub.subscription(subscriptionName);

  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = message => {
    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);
    messageCount += 1;

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Listen for new messages until timeout is hit
  subscription.on(`message`, messageHandler);
  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
  // [END pubsub_subscriber_async_pull]
  // [END pubsub_quickstart_subscriber]
}

require('dotenv').config()

const topicName = 'sample';
const subscriptionName = 'sample';
//createSubscription(topicName, subscriptionName);

function listen() {
  console.log("listening...");
  listenForMessages(subscriptionName, 10);
  setTimeout(() => { listen() }, 60000);
}
listen();

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});