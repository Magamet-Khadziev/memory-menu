// ========================================
// КАТЕГОРИЯ: ОСНОВНОЕ МЕНЮ
// ========================================

const mainData = [
    // ===== ПИЦЦА =====
    {
        id: 'main-1',
        name: 'Пицца Ассорти',
        description: 'Пицца с разнообразными начинками',
        composition: 'Тесто, томатный соус, сыр, колбаса, ветчина, грибы, перец, лук',
        volume: '600 г',
        price: '650 ₽',
        image: 'images/main/pizza_assorti.jpg'
    },
    {
        id: 'main-2',
        name: 'Пицца Маргарита',
        description: 'Классическая пицца с томатами и сыром',
        composition: 'Тесто, томатный соус, сыр моцарелла, базилик, помидоры',
        volume: '550 г',
        price: '550 ₽',
        image: 'images/main/pizza_margarita.jpg'
    },
    {
        id: 'main-3',
        name: 'Пицца Куриная',
        description: 'Пицца с курицей и соусом песто',
        composition: 'Тесто, курица, сыр, соус песто, помидоры, лук',
        volume: '600 г',
        price: '620 ₽',
        image: 'images/main/pizza_chicken.jpg'
    },
    {
        id: 'main-4',
        name: 'Пицца Мясная',
        description: 'Сытная пицца с мясным ассорти',
        composition: 'Тесто, томатный соус, сыр, бекон, колбаса, ветчина, перец',
        volume: '650 г',
        price: '680 ₽',
        image: 'images/main/pizza_meat.jpg'
    },
    {
        id: 'main-5',
        name: 'Пицца Цезарь',
        description: 'Пицца с курицей и соусом Цезарь',
        composition: 'Тесто, курица, сыр, салат, соус Цезарь, помидоры',
        volume: '600 г',
        price: '640 ₽',
        image: 'images/main/pizza_caesar.jpg'
    },

    // ===== ТОРТИЛЬЯ =====
    {
        id: 'main-6',
        name: 'Тортилья с грибами',
        description: 'Пшеничная тортилья с грибами и яйцом',
        composition: 'Тортилья, грибы, сыр, яйцо, томаты, зелень',
        volume: '250 г',
        price: '380 ₽',
        image: 'images/main/tortilla.jpg'
    },

    // ===== ХОТ-ДОГИ =====
    {
        id: 'main-7',
        name: 'Хот-дог',
        description: 'Классический хот-дог с сосиской и свежими овощами',
        composition: 'Булочка, сосиска, горчица, кетчуп, лук, маринованные огурцы',
        volume: '200 г',
        price: '280 ₽',
        image: 'images/main/hotdog.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = mainData;
}