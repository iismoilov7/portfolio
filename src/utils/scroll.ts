
export const scrollTo = (selector: string) => {
    const element = document.querySelector(selector) as HTMLElement; 
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
