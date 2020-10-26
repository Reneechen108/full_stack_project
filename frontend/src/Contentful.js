import { createClient } from 'contentful';

export default createClient({
    space: '48t1s0p1dk0p',
    accessToken: '61dda3b65d92ab91decdcde3f89f5d268746742a792e27b9981a33a1a76c8c7f'

    // space: process.env.REACT_APP_API_SPACE,
    // accessToken: process.env.REACT_APP_ACCESS_TOKEN

    // space: 'et48qh7ed1zh',
    // accessToken: '9A4KaSQP7fDAsMSNylFxLXxxaFKrtMxu6NDiQCbldBE'
});

