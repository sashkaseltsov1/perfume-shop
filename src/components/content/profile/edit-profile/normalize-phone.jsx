
const normalizePhone = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (!previousValue || value.length > previousValue.length) {
        if (onlyNums.length === 1) {
            return onlyNums + '-'
        }
        if (onlyNums.length === 4) {
            return onlyNums.slice(0, 1) + '-'
                + onlyNums.slice(1) + '-'
        }
        if (onlyNums.length === 7) {
            return onlyNums.slice(0, 1) +'-'
                + onlyNums.slice(1, 4) + '-'
                + onlyNums.slice(4) + '-'
        }
        if (onlyNums.length === 9) {
            return onlyNums.slice(0, 1) +'-'
                + onlyNums.slice(1, 4) + '-'
                + onlyNums.slice(4, 7) + '-'
                + onlyNums.slice(7) + '-'
        }
    }
    if (onlyNums.length <= 1) {
        return onlyNums
    }
    if (onlyNums.length <= 4) {
        return onlyNums.slice(0, 1) + '-'
            + onlyNums.slice(1)
    }
    if (onlyNums.length <= 7) {
        return onlyNums.slice(0, 1) + '-'
            +onlyNums.slice(1, 4) + '-'
            + onlyNums.slice(4)
    }
    if (onlyNums.length <= 9) {
        return onlyNums.slice(0, 1) + '-'
            +onlyNums.slice(1, 4) + '-'
            +onlyNums.slice(4, 7) + '-'
            + onlyNums.slice(7)
    }
    return onlyNums.slice(0, 1) + '-'
        + onlyNums.slice(1, 4) + '-'
        + onlyNums.slice(4, 7) + '-'
        + onlyNums.slice(7, 9)+ '-'
        + onlyNums.slice(9, 11)
};

export default normalizePhone
