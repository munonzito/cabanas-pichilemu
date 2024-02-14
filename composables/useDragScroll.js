// composables/useDragScroll.js

export default function useDragScroll() {
    const startDragging = (event, element) => {
        let startX = event.type.includes('mouse') ? event.pageX : event.touches[0].pageX;
        let scrollLeft = element.scrollLeft;
        let isDragging = false;

        const onMouseMove = (e) => {
            isDragging = true;
            e.preventDefault();
            const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
            const walk = (x - startX) * 2; // Factor de desplazamiento
            element.scrollLeft = scrollLeft - walk;
        };

        const onMouseUpOrLeave = () => {
            element.removeEventListener('mousemove', onMouseMove);
            element.removeEventListener('mouseup', onMouseUpOrLeave);
            element.removeEventListener('mouseleave', onMouseUpOrLeave);
            element.removeEventListener('touchmove', onMouseMove);
            element.removeEventListener('touchend', onMouseUpOrLeave);
            isDragging && event.preventDefault();
            isDragging = false;
        };

        element.addEventListener('mousemove', onMouseMove);
        element.addEventListener('mouseup', onMouseUpOrLeave);
        element.addEventListener('mouseleave', onMouseUpOrLeave);
        element.addEventListener('touchmove', onMouseMove);
        element.addEventListener('touchend', onMouseUpOrLeave);

        // Para evitar el inicio del arrastre con el evento touchstart
        element.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) {
                onMouseUpOrLeave();
            }
        }, {passive: false});
    };

    return { startDragging };
}
