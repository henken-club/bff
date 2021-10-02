import {Module} from '@nestjs/common';
import {ConfigModule, ConfigType} from '@nestjs/config';
import {GraphQLGatewayModule} from '@nestjs/graphql';

import {AppConfig} from './app.config';

@Module({
  imports: [
    GraphQLGatewayModule.forRootAsync({
      imports: [ConfigModule.forFeature(AppConfig)],
      inject: [AppConfig.KEY],
      useFactory: async (config: ConfigType<typeof AppConfig>) => ({
        server: {},
        gateway: {
          serviceList: config.graphql.gateway.serviceList,
          serviceHealthCheck: true,
        },
      }),
    }),
  ],
})
export class AppModule {}
