import  {api} from  './api.js'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
const pusher  = Pusher;
const env = {
    PUSHER_APP_ID: process.env.REACT_APP_PUSHER_APP_ID,
    PUSHER_APP_KEY: process.env.REACT_APP_PUSHER_APP_KEY,
    PUSHER_APP_SECRET: process.env.REACT_APP_PUSHER_APP_SECRET,
    PUSHER_APP_CLUSTER: process.env.REACT_APP_PUSHER_APP_CLUSTER,
    PUSHER_WS_PORT: process.env.REACT_APP_PUSHER_WS_PORT,
    PUSHER_WS_HOST: process.env.REACT_APP_PUSHER_WS_HOST,
};
const {
    PUSHER_APP_ID,
    PUSHER_APP_KEY,
    PUSHER_APP_SECRET,
    PUSHER_APP_CLUSTER,
    PUSHER_WS_PORT,
    PUSHER_WS_HOST,
} = env;

const echo = new Echo({
    appId: PUSHER_APP_ID,
    broadcaster: 'pusher',
    key: PUSHER_APP_KEY,
    cluster: PUSHER_APP_CLUSTER,
    secret: PUSHER_APP_SECRET,
    wsHost: PUSHER_WS_HOST,
    wsPort: PUSHER_WS_PORT,
    forceTLS: false,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
    // eslint-disable-next-line no-unused-vars
    authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                api.post('broadcasting/auth', {
                    socket_id: socketId,
                    channel_name: channel.name,
                })
                    .then((response) => {
                        console.log(response,"data")
                        callback(false, response.data);
                    })
                    .catch((error) => {
                        callback(true, error);
                    });
            },
        };
    },
});
window.Echo = echo;
window.pusher = pusher;

export { echo, pusher };

