// ========================================
// НАВИГАЦИЯ (дополнительные функции)
// ========================================

// Вспомогательная функция для плавного скролла к верху страницы
function scrollToTop() {
    const content = document.querySelector('.content');
    if (content) {
        content.scrollTop = 0;
        content.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Обработка нажатия кнопки "Назад" в браузере (для десктопа)
window.addEventListener('popstate', function(event) {
    if (navigationHistory.length > 0) {
        const lastPage = navigationHistory.pop();
        if (lastPage === 'detail') {
            // Возврат к категории - нужно восстановить контекст
            // Для простоты просто показываем главную
            showMainPage();
        } else {
            showMainPage();
        }
    }
});

// Добавляем обработку всех навигационных кнопок через делегирование
document.addEventListener('click', function(e) {
    const target = e.target.closest('.nav-btn');
    if (!target) return;
    
    // Если это кнопка "Назад" - обрабатываем отдельно
    if (target.classList.contains('back-btn')) {
        // Уже обработано в app.js
        return;
    }
    
    if (target.classList.contains('home-btn') || target.classList.contains('categories-btn')) {
        showMainPage();
        e.preventDefault();
    }
});

// Экспортируем функции, если используется модульная система
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { scrollToTop };
}