import { mock } from '../lib/axios';
import wait from '../utils/wait';

const accessToken = 'accessToken';

const user = {
  id: 'testuser',
  email: 'admin@autozone.lk',
  password: '123',
  name: 'Admin User',
  role: 'Admin',
  avatar: '',
};

mock.onPost('/api/authentication/login').reply(async (config) => {
  await wait(1000);

  try {
    const { email, password } = JSON.parse(config.data);

    if (user.email !== email || user.password !== password) {
      return [400, { message: 'Please check your email and password' }];
    }

    return [
      200,
      {
        accessToken,
        user: {
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      },
    ];
  } catch (e) {
    console.error('[Mock]: ' + e);
    return [500, { message: 'Internal server error' }];
  }
});

mock.onGet('/api/identity/me').reply((config) => {
  try {
    // Ensure authorization is provided
    const { Authorization } = config.headers;

    if (!Authorization) {
      return [401, { message: 'Authorization required' }];
    }

    return [
      200,
      {
        user: {
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      },
    ];
  } catch (err) {
    console.error('[Mock]: ', err);
    return [500, { message: 'Internal server error' }];
  }
});
