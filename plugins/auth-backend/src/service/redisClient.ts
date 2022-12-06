/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createClient } from 'redis';
import { Logger } from 'winston';

let client: ReturnType<typeof createClient> | null = null;

interface getRedisClientParams {
  redisConnectionUrl: string;
  logger: Logger;
}

/**
 * this function will return a singleton instance of redis.
 * TODO
 * we need to decide the strategy of how to handle redis connection failure.
 * as of right now we are shutting the server down and logging the error over the terminal.
 * */

async function getRedisClient(
  options: getRedisClientParams,
): Promise<ReturnType<typeof createClient>> {
  const { logger } = options;

  if (!client) {
    client = createClient({
      url: options.redisConnectionUrl,
    });

    client.on('connect', () => {
      logger.info(
        `CacheStore - Connection status: connected, url: ${options.redisConnectionUrl}`,
      );
    });

    client.on('end', () => {
      logger.info('CacheStore - Connection status: disconnected');
      // process.exit(0);
    });

    client.on('reconnecting', () => {
      logger.info('CacheStore - Connection status: reconnecting');
    });

    client.on('error', (err: any) => {
      logger.warn(
        `CacheStore - Connection status: error, url: ${options.redisConnectionUrl}`,
        { err },
      );
      // process.exit(1);
    });

    await client.connect();
  }
  return client;
}

export { getRedisClient };
