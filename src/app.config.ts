import {registerAs} from '@nestjs/config';

export const AppConfig = registerAs('app', () => ({
  graphql: {
    gateway: {
      serviceList: [
        {
          name: 'main',
          url: process.env.SERVICE_URL_MAIN,
        },
      ],
    },
  },
}));
