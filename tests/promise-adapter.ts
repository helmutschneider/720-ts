import {Promise} from "../src/promise";

export function resolved(value: any) {
    return new Promise((resolve, reject) => {
        resolve(value)
    })
}
export function rejected(value: any) {
    return new Promise((resolve, reject) => {
        reject(value)
    })
}
export function deferred() {
    let a
    let b
    const promise = new Promise((resolve, reject) => {
        a = resolve
        b = reject
    })

    return {
        promise: promise,
        resolve: a,
        reject: b,
    }
}
