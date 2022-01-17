import localforage from 'localforage'
import memoryDriver from 'localforage-memoryStorageDriver'
import { setup } from 'axios-cache-adapter'

async function configure (keycloak) {
    await localforage.defineDriver(memoryDriver)

    const forageStore = localforage.createInstance({
        driver: [
            localforage.INDEXEDDB,
            localforage.LOCALSTORAGE,
            memoryDriver._driver
        ],
        name: 'my-cache'
    })

    return setup({
        headers: {
            Authorization: "Bearer " + keycloak.token
        },
        cache: {
            invalidate: async (config, request) => {
                if (request.clearCacheEntry) {
                  await config.store.removeItem(config.uuid)
                }
            },
            readHeaders: false,
            maxAge: 8 * 60 * 60 * 1000,
            store: forageStore // Pass `localforage` store to `axios-cache-adapter`
        },
    })
}

export const get = async (url, keycloak, cache = true) => {
    const axios = await configure(keycloak);
    const config = {
        responseType: 'arraybuffer',
    }
    if(!cache) {
        config.clearCacheEntry = true;
    }
    try {
        const result = await axios.get(url, config)
        if(result.data.byteLength > 0) {
            return `data:image/png;base64,${Buffer.from(result.data, 'binary').toString('base64')}`;
        }
    } catch (error) {
        console.error(error);
    }   
}