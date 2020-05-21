
export const required = value => (value || typeof value === 'number' ? undefined : 'Это поле не может быть пустым');

const minmaxLength = (min, max) => value =>
    value && (value.length > max ||value.length < min) ? `Поле должно содержать от ${min} до ${max} символов` : undefined;

export const min6max15 = minmaxLength(6,15);

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Неверный e-mail'
        : undefined;

