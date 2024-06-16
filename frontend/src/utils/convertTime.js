const convertTime = (time) => {
    const timeParts = time.split(':');
    let hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    // Преобразование времени в 24-часовой формат
    return (
        hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0')
    );
};

export default convertTime;