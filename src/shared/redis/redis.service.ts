import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Logger } from '@deuna/node-logger';

@Injectable()
export class RedisService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly _cacheManager: Cache,
    private readonly _logger: Logger,
  ) {}

  async getCacheData<T>(key: string): Promise<T> {
    this._logger.log(
      `Initialize the data acquisition from cache with the key: ${key}`,
    );
    const resp = await this._cacheManager.get<T>(key);

    this._logger.log(
      `Finish the data acquisition from cache with the key: ${key}`,
    );
    return resp;
  }

  async setCacheData<T>(key: string, data: T, ttl?: number): Promise<void> {
    this._logger.log(
      `Initialize the data save into cache with the key: ${key}`,
    );

    await this._cacheManager.set(key, data, ttl);
    this._logger.log(`Finish the data save into cache with the key: ${key}`);
  }

  async deleteCacheData<T>(key: string): Promise<void> {
    this._logger.log(
      `Initialize the data remove from cache with the key: ${key}`,
    );

    await this._cacheManager.del(key);
    this._logger.log(`Finish the data remove from cache with the key: ${key} `);
  }

  async invalidTokenCache(key: string) {
    this._logger.log(
      `Initialize the data invalid from cache with the key: ${key}`,
    );
    await this._cacheManager.set(key, 'INVALID');
    this._logger.log(`Finish the data invalid from cache with the key: ${key}`);
  }
}
