export const formateDate = (date, config) => {
    const defaultOptions = {
        day: 'numeric',
        month: 'long', // Используем 'long' для полного названия месяца
        year: 'numeric',
        weekday: 'long' // Добавляем день недели
    };
    const options = config ? config : defaultOptions;

    return new Date(date).toLocaleDateString("ru-RU", options);
};