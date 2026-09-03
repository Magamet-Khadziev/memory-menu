// ========================================
// КАТЕГОРИЯ: КОКТЕЙЛИ
// ========================================

const cocktailsData = [
    {
        id: 'cocktail-1',
        name: 'Мохито',
        description: 'Классический кубинский коктейль с мятой и лаймом',
        composition: 'Ром, мята, лайм, сахарный сироп, содовая',
        volume: '400 мл',
        price: '350 ₽',
        image: 'images/cocktails/mojito.jpg'
    },
    {
        id: 'cocktail-2',
        name: 'Мохито Китайский',
        description: 'Азиатская версия мохито с имбирём',
        composition: 'Ром, имбирь, мята, лайм, содовая',
        volume: '400 мл',
        price: '380 ₽',
        image: 'images/cocktails/chinese_mojito.jpg'
    },
    {
        id: 'cocktail-3',
        name: 'Лимонад Белый',
        description: 'Нежный коктейль с белым ромом',
        composition: 'Белый ром, лимон, сахарный сироп',
        volume: '350 мл',
        price: '320 ₽',
        image: 'images/cocktails/white_lemonade.jpg'
    },
    {
        id: 'cocktail-4',
        name: 'Масляное',
        description: 'Авторский коктейль с маслянистой текстурой',
        composition: 'Ром, сироп, специи',
        volume: '350 мл',
        price: '340 ₽',
        image: 'images/cocktails/oily.jpg'
    },
    {
        id: 'cocktail-5',
        name: 'Китайское',
        description: 'Экзотический коктейль с азиатскими нотками',
        composition: 'Водка, личи, имбирь, лайм',
        volume: '350 мл',
        price: '360 ₽',
        image: 'images/cocktails/chinese.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cocktailsData;
}