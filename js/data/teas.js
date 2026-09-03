// ========================================
// КАТЕГОРИЯ: ЧАИ
// ========================================

const teasData = [
    {
        id: 'tea-1',
        name: 'Чёрный чай',
        description: 'Классический индийский чёрный чай',
        composition: 'Индийский чёрный чай',
        volume: '350 мл',
        price: '200 ₽',
        image: 'images/teas/black_tea.jpg'
    },
    {
        id: 'tea-2',
        name: 'Спелая вишня',
        description: 'Ароматный чай с нотками вишни',
        composition: 'Чёрный чай, вишня, специи',
        volume: '350 мл',
        price: '220 ₽',
        image: 'images/teas/cherry.jpg'
    },
    {
        id: 'tea-3',
        name: 'Граф Орлов',
        description: 'Элитный чай с бергамотом',
        composition: 'Чёрный чай, бергамот',
        volume: '350 мл',
        price: '240 ₽',
        image: 'images/teas/orlov.jpg'
    },
    {
        id: 'tea-4',
        name: 'Облепиховый чай',
        description: 'Согревающий чай с облепихой и имбирём',
        composition: 'Зелёный чай, облепиха, имбирь, мёд',
        volume: '350 мл',
        price: '260 ₽',
        image: 'images/teas/sea_buckthorn.jpg'
    },
    {
        id: 'tea-5',
        name: 'Манго-Маракуйя',
        description: 'Тропический чай с манго и маракуйей',
        composition: 'Зелёный чай, манго, маракуйя',
        volume: '350 мл',
        price: '280 ₽',
        image: 'images/teas/mango_passion.jpg'
    },
    {
        id: 'tea-6',
        name: 'Горячий шоколад',
        description: 'Насыщенный горячий шоколад со сливками',
        composition: 'Шоколад, молоко, сливки',
        volume: '300 мл',
        price: '300 ₽',
        image: 'images/teas/hot_chocolate.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = teasData;
}