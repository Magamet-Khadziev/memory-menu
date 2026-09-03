// ========================================
// ОСНОВНОЙ ФАЙЛ ПРИЛОЖЕНИЯ
// ========================================

// Все данные категорий собраны в один объект
const menuData = {
    breakfasts: typeof breakfastsData !== 'undefined' ? breakfastsData : [],
    coffee: typeof coffeeData !== 'undefined' ? coffeeData : [],
    teas: typeof teasData !== 'undefined' ? teasData : [],
    lemonades: typeof lemonadesData !== 'undefined' ? lemonadesData : [],
    cocktails: typeof cocktailsData !== 'undefined' ? cocktailsData : [],
    main: typeof mainData !== 'undefined' ? mainData : [],
    desserts: typeof dessertsData !== 'undefined' ? dessertsData : [],
    salads: typeof saladsData !== 'undefined' ? saladsData : []   // ← ИЗМЕНЕНО
};

// Список всех категорий с их отображением
const categories = [
    { 
        id: 'breakfasts', 
        name: 'ЗАВТРАКИ', 
        icon: '🍳', 
        data: menuData.breakfasts,
        image: 'images/categories/breakfasts.jpg'
    },
    { 
        id: 'coffee', 
        name: 'КОФЕ', 
        icon: '☕', 
        data: menuData.coffee,
        image: 'images/categories/coffee.jpg'
    },
    { 
        id: 'teas', 
        name: 'ЧАЙ', 
        icon: '🍵', 
        data: menuData.teas,
        image: 'images/categories/teas.jpg'
    },
    { 
        id: 'lemonades', 
        name: 'ЛИМОНАДЫ', 
        icon: '🍋', 
        data: menuData.lemonades,
        image: 'images/categories/lemonades.jpg'
    },
    { 
        id: 'cocktails', 
        name: 'КОКТЕЙЛИ', 
        icon: '🍹', 
        data: menuData.cocktails,
        image: 'images/categories/cocktails.jpg'
    },
    { 
        id: 'main', 
        name: 'ОСНОВНОЕ МЕНЮ', 
        icon: '🍽️', 
        data: menuData.main,
        image: 'images/categories/main.jpg'
    },
    { 
        id: 'desserts', 
        name: 'ДЕСЕРТЫ', 
        icon: '🍰', 
        data: menuData.desserts,
        image: 'images/categories/desserts.jpg'
    },
    { 
        id: 'salads',              // ← ИЗМЕНЕНО
        name: 'САЛАТЫ',
        icon: '🥗',
        data: menuData.salads,     // ← ИЗМЕНЕНО
        image: 'images/categories/salads.jpg'   // ← ИЗМЕНЕНО
    }
];

// История навигации - сохраняем категорию и текущую страницу
let navigationHistory = [];
let currentCategoryId = null;

// Функция для показа главной страницы
function showMainPage() {
    navigationHistory = [];
    currentCategoryId = null;
    const app = document.getElementById('app');
    if (!app) return;
    
    // Добавляем класс с фоном для главной
    app.className = 'page-with-bg';
    
    app.innerHTML = renderMainPage();
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoryId = this.dataset.category;
            if (categoryId) showCategoryPage(categoryId);
        });
    });
}

// Функция для показа страницы категории
function showCategoryPage(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;
    
    const app = document.getElementById('app');
    if (!app) return;
    
    // Убираем класс с фоном (на других страницах фон не нужен)
    app.className = 'page-without-bg';
    
    // Сохраняем текущую категорию
    currentCategoryId = categoryId;
    
    // Добавляем в историю (если последний элемент не категория)
    if (navigationHistory.length === 0 || navigationHistory[navigationHistory.length - 1] !== 'category') {
        navigationHistory.push('category');
    }
    
    app.innerHTML = renderCategoryPage(category);
    
    document.querySelectorAll('.item-card').forEach(card => {
        card.addEventListener('click', function() {
            const itemId = this.dataset.itemId;
            const catId = this.dataset.category;
            if (itemId && catId) showItemDetailPage(catId, itemId);
        });
    });
    
    setupNavButtons();
}

// Функция для показа страницы отдельного блюда
function showItemDetailPage(categoryId, itemId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;
    
    const item = category.data.find(i => i.id === itemId);
    if (!item) return;
    
    const app = document.getElementById('app');
    if (!app) return;
    
    // Убираем класс с фоном
    app.className = 'page-without-bg';
    
    // Сохраняем категорию для возврата
    currentCategoryId = categoryId;
    
    // Добавляем в историю
    navigationHistory.push('detail');
    
    app.innerHTML = renderItemDetailPage(item);
    
    setupNavButtons();
}

// Функция для настройки кнопок навигации
function setupNavButtons() {
    // Кнопка "Назад" - теперь работает правильно!
    const backBtn = document.querySelector('.nav-btn.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            goBack();
        });
    }
    
    // Кнопка "Главная"
    const homeBtn = document.querySelector('.nav-btn.home-btn');
    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            showMainPage();
        });
    }
    
    // Кнопка "Категории" - теперь тоже на главную
    const categoriesBtn = document.querySelector('.nav-btn.categories-btn');
    if (categoriesBtn) {
        categoriesBtn.addEventListener('click', function() {
            showMainPage();
        });
    }
}

// Функция "Назад" - ИСПРАВЛЕНА!
function goBack() {
    // Если история пуста - идём на главную
    if (navigationHistory.length === 0) {
        showMainPage();
        return;
    }
    
    // Убираем последний шаг из истории
    const lastPage = navigationHistory.pop();
    
    // Если последний шаг был детальной страницей - возвращаемся в категорию
    if (lastPage === 'detail') {
        if (currentCategoryId) {
            showCategoryPage(currentCategoryId);
        } else {
            showMainPage();
        }
        return;
    }
    
    // Если последний шаг был категорией - идём на главную
    if (lastPage === 'category') {
        showMainPage();
        return;
    }
    
    // На всякий случай - на главную
    showMainPage();
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Кафе MEMORY запущено!');
    console.log('📊 Загружено категорий:', categories.length);
    
    // Добавляем класс фона для главной
    const app = document.getElementById('app');
    app.classList.add('page-with-bg');
    
    showMainPage();
});

// Обработка кнопки "Назад" в браузере
window.addEventListener('popstate', function() {
    goBack();
});