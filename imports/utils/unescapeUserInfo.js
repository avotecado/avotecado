import validator from "validator";

export function unescapeUser(userObject) {
    let unescapedUser = {};
    for (const key of Object.keys(userObject)) {
        let value = userObject[key];
        if (value && !Array.isArray(value) && !(value instanceof Date)) {
            unescapedUser[key] = validator.unescape(value);
        }
    }
    return unescapedUser;
}
