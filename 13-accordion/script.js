const accordion = document.querySelector('[data-accordion]');
const items = Array.from(accordion.querySelectorAll('.accordion__item'));

const onlyOneOpen = true; // поставь false, если можно открывать несколько

function closeItem(item) {
    const btn = item.querySelector('.accordion__header');
    const panel = item.querySelector('.accordion__panel');

    item.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
    panel.style.maxHeight = '0px';
}

function openItem(item) {
    const btn = item.querySelector('.accordion__header');
    const panel = item.querySelector('.accordion__panel');

    item.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');

    // чтобы анимация max-height была корректной, выставляем реальную высоту контента
    panel.style.maxHeight = panel.scrollHeight + 'px';
}

accordion.addEventListener('click', (e) => {
    const btn = e.target.closest('.accordion__header');
    if (!btn) return;

    const item = btn.closest('.accordion__item');
    const isOpen = item.classList.contains('is-open');

    if (onlyOneOpen) {
        items.forEach((it) => {
            if (it !== item) closeItem(it);
        });
    }

    if (isOpen) closeItem(item);
    else openItem(item);
});

// если контент внутри открыток меняется/переносится при ресайзе — обновим maxHeight
window.addEventListener('resize', () => {
    items.forEach((item) => {
        if (!item.classList.contains('is-open')) return;
        const panel = item.querySelector('.accordion__panel');
        panel.style.maxHeight = panel.scrollHeight + 'px';
    });
});
