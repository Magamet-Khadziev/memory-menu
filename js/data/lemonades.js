// ========================================
// КАТЕГОРИЯ: ЛИМОНАДЫ
// ========================================

const lemonadesData = [
    {
        id: 'lemonade-1',
        name: 'Лимонад с мятой и лаймом',
        description: 'Освежающий лимонад с мятой и лаймом',
        composition: 'Мята, лайм, сахарный сироп, содовая',
        volume: '400 мл',
        price: '280 ₽',
        image: 'images/lemonades/mint_lime.jpg'
    },
    {
        id: 'lemonade-2',
        name: 'Тропический фреш',
        description: 'Освежающий микс тропических фруктов',
        composition: 'Манго, маракуйя, ананас, имбирь',
        volume: '350 мл',
        price: '320 ₽',
        image: 'images/lemonades/tropical.jpg'
    },
    {
        id: 'lemonade-3',
        name: 'Ананасовый фреш',
        description: 'Свежевыжатый ананасовый фреш',
        composition: 'Ананас, лёд',
        volume: '300 мл',
        price: '280 ₽',
        image: 'images/lemonades/pineapple.jpg'
    },
    {
        id: 'lemonade-4',
        name: 'Апельсиновый фреш',
        description: 'Свежевыжатый апельсиновый фреш',
        composition: 'Апельсин, лёд',
        volume: '300 мл',
        price: '250 ₽',
        image: 'images/lemonades/orange.jpg'
    },
    {
        id: 'lemonade-5',
        name: 'Фреш Английский',
        description: 'Освежающий ягодный фреш',
        composition: 'Ягоды, мята, лёд',
        volume: '300 мл',
        price: '300 ₽',
        image: 'images/lemonades/english.jpg'
    },
    {
        id: 'lemonade-6',
        name: 'Электрический микс',
        description: 'Яркий цитрусовый микс с имбирём',
        composition: 'Апельсин, лимон, имбирь, лёд',
        volume: '300 мл',
        price: '350 ₽',
        image: 'images/lemonades/electric.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = lemonadesData;
}