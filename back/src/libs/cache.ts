// import Redis from "ioredis";
import { connection } from "../config/redis";
import util from "util";
import * as crypto from "crypto";

const { createClient } = require('redis');
export const client = createClient(connection);

// const redis = new Redis(REDIS_URI_CONNECTION);

function encryptParams(params: any) {
    const str = JSON.stringify(params);
    return crypto.createHash("sha256").update(str).digest("base64");
}

export function setFromParams(
    key: string,
    params: any,
    value: string,
    option?: string,
    optionValue?: string | number
) {
    const finalKey = `${key}:${encryptParams(params)}`;
    if (option !== undefined && optionValue !== undefined) {
        return set(finalKey, value, option, optionValue);
    }
    return set(finalKey, value);
}

export function getFromParams(key: string, params: any) {
    const finalKey = `${key}:${encryptParams(params)}`;
    return get(finalKey);
  }
  
  export function delFromParams(key: string, params: any) {
    const finalKey = `${key}:${encryptParams(params)}`;
    return del(finalKey);
  }
  
  export function set(
    key: string,
    value: string,
    option?: string,
    optionValue?: string | number
  ) {
    const setPromisefy = util.promisify(client.set).bind(client);
    if (option !== undefined && optionValue !== undefined) {
      return setPromisefy(key, value, option, optionValue);
    }
  
    return setPromisefy(key, value);
  }
  
  export function get(key: string) {
    const getPromisefy = util.promisify(client.get).bind(client);
    return getPromisefy(key);
  }
  
  export function getKeys(pattern: string) {
    const getKeysPromisefy = util.promisify(client.keys).bind(client);
    return getKeysPromisefy(pattern);
  }
  
  export function del(key: string) {
    const delPromisefy = util.promisify(client.del).bind(client);
    return delPromisefy(key);
  }
  
  export async function delFromPattern(pattern: string) {
    const all = await getKeys(pattern);
    for (let item of all) {
      del(item);
    }
  }
  
  export const cacheLayer = {
    set,
    setFromParams,
    get,
    getFromParams,
    getKeys,
    del,
    delFromParams,
    delFromPattern
  };