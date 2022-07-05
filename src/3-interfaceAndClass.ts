/*
    Assignment 1
    LocalStorage API:
    Use abstract classes and generics.
*/

interface LocalStorageAPI<T> {
    [key: string]: T
}

abstract class LocalStorage<T> {
    protected storage: LocalStorageAPI<T>
    constructor() {
        this.storage = {}
    }
}

class MyStorage<T> extends LocalStorage<T> {
    setItem(key: string, value: T) {
        this.storage[key] = value;
    }

    getItem(key: string) {
        console.log(`${key} : ${this.storage[key]}`)
        return this.storage[key]
    }

    clearItem(key: string) {
        delete this.storage[key]
    }

    clear() {
        this.storage = {};
    }
}

const myStore = new MyStorage();

myStore.setItem("id", "testUser");
myStore.setItem("expired", 1234567);
myStore.setItem("isLoggedIn", true);

myStore.getItem("id");
myStore.getItem("expired");
myStore.getItem("isLoggedIn");

myStore.clearItem("id");
myStore.getItem("id");

myStore.clear();
myStore.getItem("expired");
myStore.getItem("isLoggedIn");

/*
    Assignment 2
    Geolocation API:
    Use overloading.
*/
interface GeolocationAPI {
    getCurrentPosition(successFn: Function, errorFn?: Function, optionsObj?: Object): void;

    watchPosition(success: Function, error?: Function, options?: Object): void;

    clearWatch: (id: string) => void;
}