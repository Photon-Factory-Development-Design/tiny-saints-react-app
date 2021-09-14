export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

/**
 * update object-array item w/ id
 * ex:
 * const a = [{id: 1, a: 1, b: 2, c: 3}, {id: 2, a: 2, b: 3, c: 4}]
 * mergeArrayOfObjects(a, 1, {b: 3})
 * Result should be: [{id: 1, a: 1, b: 3, c: 3}, {id: 2, a: 2, b: 3, c: 4}]
 */
export const updateObjectArray = (
    array,
    id,
    obj,
    canCreate = true,
    field = 'id'
) => {
    const newArray = deepClone(array);

    const index = newArray.findIndex((item) => item[field] === id);
    if (index >= 0) {
        newArray[index] = { ...newArray[index], ...obj };
    } else {
        if (canCreate) {
            // if can create, create that obj
            newArray.push({ [field]: id, ...obj });
        }
    }

    return newArray;
};

export const checkErrorObjValidated = (error) => {
    const keys = Object.keys(error);
    for (let _i = 0; _i < keys.length; _i++) {
        if (error[keys[_i]]) return false;
    }
    return true;
};
