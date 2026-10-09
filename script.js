// Изчакваме цялата страница да зареди безопасно
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Промяна на навигационната лента при скролиране (за визуален ефект)
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Логика за бутоните "Избери"
    const buyButtons = document.querySelectorAll('.buy-btn');
    const checkoutSection = document.getElementById('checkout-section');
    const prodNameElement = document.getElementById('selected-product-name');
    const prodPriceElement = document.getElementById('selected-product-price');

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Взимаме данните за продукта от самия бутон
            const name = e.target.getAttribute('data-name');
            const price = e.target.getAttribute('data-price');
            
            // Вмъкваме името и цената във формата за плащане
            prodNameElement.innerText = name;
            prodPriceElement.innerText = price + " лв.";
            
            // Правим формата видима (понеже първоначално е скрита в HTML кода)
            checkoutSection.style.display = 'flex';
            
            // Плавна анимация, която превърта екрана до формата за плащане
            checkoutSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 3. Обработка на формата при изпращане ("Плати и Изтегли")
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Спира презареждането на браузъра
            
            const clientName = document.getElementById('client-name').value;
            const clientEmail = document.getElementById('client-email').value;
            const product = prodNameElement.innerText;
            
            // Показваме успешно съобщение до клиента
            alert(`🎉 Честито, ${clientName}!\n\nПлащането премина успешно. Линкът за изтегляне на твоя дигитален пакет "${product}" е изпратен на имейл: ${clientEmail}.\n\nБлагодарим ти за покупката! 🚀`);
            
            // Изчистваме полетата във формата след успешно плащане
            paymentForm.reset();
        });
    }
});
