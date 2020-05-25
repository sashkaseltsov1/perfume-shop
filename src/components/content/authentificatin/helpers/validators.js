
export const required = value => (value || typeof value === 'number' ? undefined : 'Это поле не может быть пустым');

const minmaxLength = (min, max) => value =>
    value && (value.length > max ||value.length < min) ? `Поле должно содержать от ${min} до ${max} символов` : undefined;

export const min2max30 = minmaxLength(2,30);
export const min6max20 = minmaxLength(6,20);
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Неверный e-mail'
        : undefined;

