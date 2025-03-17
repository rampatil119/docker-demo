const { createClient } = require('@redis/client');  // Import the Redis client

const client = createClient({
  url: 'redis://redis-server:6379',  // Update this if necessary
});

async function run() {
  try {
    console.log('Connecting to Redis...');
    await client.connect();
    console.log('Connected to Redis!');

    // Set a value in Redis
    console.log('Setting key in Redis...');
    await client.set('mykey', 'Hello from Node.js!');
    console.log('Key set in Redis');

    // Get the value from Redis
    console.log('Getting key from Redis...');
    const value = await client.get('mykey');
    console.log('Value from Redis:', value);

  } catch (error) {
    console.error('Error during Redis operations:', error);
  } finally {
    // Ensure client.quit() is called after all commands are executed
    console.log('Closing Redis client...');
    await client.quit();
    console.log('Redis client closed');
  }
}

run();
