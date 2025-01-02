interface AnimateOptions {
    display?: string;
    animation: string;
    duration?: number;
    className?: string | null;
    is_show: boolean;
}

const animate = async (element: HTMLElement, options: AnimateOptions) => {
    const { display, animation, duration=300, className = null, is_show } = options;

    if (!element.classList.contains("animate__animated")) {
        element.classList.add("animate__animated");
    }

    if (is_show) {
        if (display) {
            element.style.display = display;
        }
        if (className) {
            element.classList.add(className);
        }
        element.classList.add(animation);
        element.style.setProperty('--animate-duration', duration+"ms");

        // Wait for the animation to finish
        await new Promise<void>(resolve => {
            setTimeout(() => {
                element.classList.remove(animation);
                resolve(); // Resolve the promise after the timeout
            }, duration);
        });
    } else {
        element.classList.add(animation);
        if (className) {
            element.classList.add(className);
        }
        element.style.setProperty('--animate-duration', duration+"ms");

        // Wait for the animation to finish
        await new Promise<void>(resolve => {
            setTimeout(() => {
                element.classList.remove(animation);
                element.style.display = "none";
                resolve(); // Resolve the promise after the timeout
            }, duration);
        });
    }
}

export default animate;
