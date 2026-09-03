// ========================================
// КАТЕГОРИЯ: САЛАТЫ
// ========================================

const additionalData = [
    {
        id: 'additional-1',
        name: 'Салат Цезарь',
        description: 'Классический салат Цезарь с курицей',
        composition: 'Пекинская капуста, помидоры черри, курица, сухари, сыр, соус Цезарь',
        volume: '300 г',
        price: '420 ₽',
        image: 'images/additional/caesar.jpg'
    },
    {
        id: 'additional-2',
        name: 'Салат Греческий',
        description: 'Свежий греческий салат с сыром фета',
        composition: 'Черри, оливки, красный лук, сыр фета, микс салата',
        volume: '280 г',
        price: '380 ₽',
        image: 'images/additional/greek.jpg'
    },
    {
        id: 'additional-3',
        name: 'Овощная нарезка',
        description: 'Свежие сезонные овощи',
        composition: 'Огурцы, помидоры, перец, зелень',
        volume: '200 г',
        price: '250 ₽',
        image: 'images/additional/vegetables.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = additionalData;
}