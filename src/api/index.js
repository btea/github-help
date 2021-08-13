import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/graphql';

axios.interceptors.request.use(
    request => {
        // request.headers['Authorization'] = 'token <your_token>';
        return request;
    },
    err => {
        return Promise.reject(err);
    }
);

export default {
    testApi: () => {
        const body = {
            query: 'query {user(login:"xiong35"){contributionsCollection(from:"2020-01-01T17:30:08+08:00"){contributionCalendar{colors weeks{contributionDays{date}}}}}}'
        };
        return axios.post('', body);
    }
};
