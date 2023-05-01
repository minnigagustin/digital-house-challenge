import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => width / guidelineBaseWidth * size;
const verticalScale = (size: number) => height / guidelineBaseHeight * size;
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const months = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
    ];
    const formattedDate = `${date.getDate()} de ${months[date.getMonth()]
        }, ${date.getFullYear()}`;

    return formattedDate;
};

export { scale, verticalScale, moderateScale, formatDate };
