const checkedQuerySelector = <Type extends Element>(
    parent: Element | Document | DocumentFragment,
    selector: string
): Type => {
    const element = parent.querySelector<Type>(selector)
    if (!element) {
        throw new Error(`Selector ${selector} didn't match any elements.`)
    }
    return element
}

export default checkedQuerySelector
