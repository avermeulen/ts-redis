import Redis from 'ioredis';
const redis = new Redis();

redis
    .exists('user_email')
    .then(async (result) => {
        // console.log(result);
        if (!result) {
            redis.set('user_email', 'av@email.com');
            console.log('new value stored')
        } else {
            console.log('value already stored');
            await redis.del('user_email');
        }
    })
// if (!) {
//     redis.set('user_email', 'av@email.com');
//     console.log('value stored')
// } else {
//     console.log('value already stored')
// }


async function getValue() {
    const value = await redis.get('user_email');
    // console.log(value);
    return value
}

getValue().then(async () => {
    const result = await redis.exists('user_email')
    console.log(result);
    redis.disconnect();
})



