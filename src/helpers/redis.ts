import * as redis from 'redis';
const client = redis.createClient(); // using 127.0.0.1:6379
export default client;
