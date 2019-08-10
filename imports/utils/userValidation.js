import validator from "validator";

export function unescapeUser(userObject) {
    let exportUser = {};
    for (const key of Object.keys(userObject)) {
        let value = userObject[key];
        if (value) {
            if (!Array.isArray(value) && !(value instanceof Date)) {
                exportUser[key] = validator.unescape(value);
            }
        }
    }
    return exportUser;
}

export function userValidation(userObject) {
    for (const key of Object.keys(userObject)) {
        let value = userObject[key];
        if (value) {
            let keyUpper = key.charAt(0).toUpperCase() + key.substring(1);
            switch (key) {
                case 'username':
                case 'prefParty': {
                    if (validator.isAlphanumeric(value)) {
                        continue;
                    } else {
                        return {isValid: false, error: `${keyUpper}` + ' is not alphanumeric [0-9, A-Z]'};
                    }
                }
                case 'name':
                case 'userBio':
                case 'occupation':
                case 'politicalLeaning':
                    if (validator.isLength(value, {min: 0, max: 140})) {
                        continue;
                    } else {
                        return {isValid: false, error: `${keyUpper}` + ' is too long! Max: 140 characters'};
                    }
                default:
                    break;
            }
        }
    }
    return {isValid: true};
}