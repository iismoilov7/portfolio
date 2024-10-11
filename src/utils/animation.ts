interface AnimateOptions {
    display?: string;
    animation: string;
    duration?: number;
    className?: string | null;
    is_show: boolean;
}

const animate = (element: HTMLElement, options: AnimateOptions) => {
    const { display = "block", animation, duration=300, className = null, is_show } = options;

    if (is_show) {
        if (display) {
            element.style.display = display;
        }
        if (className) {
            element.classList.add(className);
        }
        element.classList.add(animation);
        element.style.setProperty('--animate-duration', duration+"ms");

        setTimeout(() => {
            element.classList.remove(animation);
        }, duration);
    } else {
        element.classList.add(animation);
        if (className) {
            element.classList.add(className);
        }
        element.style.setProperty('--animate-duration', duration+"ms");
        setTimeout(() => {
            element.classList.remove(animation);
            element.style.display = "none";
        }, duration);
    }
}

export default animate;