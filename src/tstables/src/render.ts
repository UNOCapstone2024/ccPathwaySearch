import checkedQuerySelector from './checkedQuerySelector'
import { Elements, Templates } from './types'

class Render {
    readonly attributeName: string
    readonly classInstance: string
    readonly userLocale: string
    elements: Elements
    templates: Templates

    constructor(attributeName: string, classInstance: string) {
        this.attributeName = attributeName
        this.classInstance = classInstance
        this.userLocale = navigator.languages[0]
        this.elements = {
            tableHead: checkedQuerySelector(document, `[${this.attributeName}="thead"]`),
            tableBody: checkedQuerySelector(document, `[${this.attributeName}="tbody"]`),
            entries: checkedQuerySelector(document, `[${this.attributeName}="entries"]`),
            pagination: checkedQuerySelector(document, `[${this.attributeName}="pagination"]`),
        }
        this.templates = {
            row: checkedQuerySelector(document, `[${this.attributeName}="rowTemplate"]`),
            cell: checkedQuerySelector(document, `[${this.attributeName}="itemTemplate"]`),
            header: checkedQuerySelector(document, `[${this.attributeName}="colTemplate"]`),
            pagination: checkedQuerySelector(document, `[${this.attributeName}="paginationTemplate"]`),
        }
    }

    public body(table: Record<string, string>[]): void {
        this.elements.tableBody.innerHTML = ''
        table.forEach((row: Record<string, string>) => {
            const trClone = this.templates.row.content.cloneNode(true) as DocumentFragment
            const tr = checkedQuerySelector(trClone, 'tr')
            Object.keys(row).forEach((key) => {
                const tdClone = this.templates.cell.content.cloneNode(true) as DocumentFragment
                const td = checkedQuerySelector(tdClone, 'td')
                td.innerHTML = row[key]
                tr.appendChild(td)
            })
            this.elements.tableBody.appendChild(tr)
        })
    }

    public head(keys: string[], direction: string, field: string): void {
        if (this.elements.tableHead.innerHTML === '') {
            const trClone = this.templates.row.content.cloneNode(true) as DocumentFragment
            const tr = checkedQuerySelector(trClone, 'tr')
            keys.forEach((key) => {
                const thClone = this.templates.header.content.cloneNode(true) as DocumentFragment
                const th = checkedQuerySelector(thClone, 'th')
                const icons = thClone.querySelectorAll('i')
                const span = checkedQuerySelector(thClone, 'span')
                span.innerHTML = key
                if (field === key) {
                    icons[direction === 'ascending' ? 0 : 1].classList.replace(
                        `bi-caret-${direction === 'ascending' ? 'up' : 'down'}`,
                        `bi-caret-${direction === 'ascending' ? 'up' : 'down'}-fill`
                    )
                    th.ariaSort = direction
                }
                th.setAttribute('onclick', `${this.classInstance}.sort('${key}');`)
                th.setAttribute('onkeypress', `if (event.keyCode == 13) ${this.classInstance}.sort('${key}');`)
                th.ariaLabel = `${key}: activate to sort ${direction}`
                tr.appendChild(th)
            })
            this.elements.tableHead.appendChild(tr)
        } else {
            const headers = this.elements.tableHead.querySelectorAll('th')
            headers.forEach((header) => {
                const icons = header.querySelectorAll('i')
                const span: HTMLSpanElement = checkedQuerySelector(header, 'span')
                icons.forEach((icon, key) => {
                    icon.classList.replace(
                        `bi-caret-${key === 0 ? 'up' : 'down'}-fill`,
                        `bi-caret-${key === 0 ? 'up' : 'down'}`
                    )
                    if (field === span.innerText) {
                        icon.classList.replace(
                            `bi-caret-${direction === 'ascending' ? 'up' : 'down'}`,
                            `bi-caret-${direction === 'ascending' ? 'up' : 'down'}-fill`
                        )
                    }
                })
                header.ariaSort = direction
                header.ariaLabel = `${span.innerText}: activate to sort ${direction}`
            })
        }
    }

    public entries(currentPage: number, perPage: number, total: number) {
        const first = (currentPage - 1) * perPage
        let last = first + perPage
        if (perPage === -1) {
            last = total
        }
        this.elements.entries.innerHTML = `showing ${(first + 1).toLocaleString(this.userLocale)} to ${(last <= total
            ? last
            : total
        ).toLocaleString(this.userLocale)} of <strong>${total.toLocaleString(this.userLocale)}</strong> entries`
    }

    public pagination(currentPage: number, perPage: number, lastPage: number) {
        if (perPage === -1) {
            this.elements.pagination.innerHTML = ''
            return false
        } else if (currentPage === 1 && lastPage === 1) {
            this.elements.pagination.innerHTML = ''
            return false
        }
        const buttons = [
            {
                text: 'Next',
                class: currentPage === lastPage ? 'd-none' : '',
                action: `${this.classInstance}.page.next();`,
                order: 'last',
                label: `Current page is ${currentPage}, Activate for next page`,
            },
            {
                text: 'Previous',
                class: currentPage === 1 ? 'd-none' : '',
                action: `${this.classInstance}.page.previous();`,
                order: 'first',
                label: `Current page is ${currentPage}, Activate for previous page`,
            },
            {
                text: String(
                    currentPage !== lastPage ? (currentPage === 1 ? currentPage : currentPage - 1) : currentPage - 2
                ),
                class: lastPage === 2 && currentPage === 2 ? 'd-none' : currentPage === 1 ? 'active' : '',
                action: `${this.classInstance}.page.goTo(event);`,
                order: 3,
            },
            {
                text: String(
                    currentPage !== lastPage ? (currentPage === 1 ? currentPage + 1 : currentPage) : currentPage - 1
                ),
                class: currentPage === 1 || currentPage === lastPage ? '' : 'active',
                action: `${this.classInstance}.page.goTo(event);`,
                order: 3,
            },
            {
                text: String(
                    currentPage !== lastPage ? (currentPage === 1 ? currentPage + 2 : currentPage + 1) : currentPage
                ),
                class: lastPage === 2 && currentPage === 1 ? 'd-none' : currentPage === lastPage ? 'active' : '',
                action: `${this.classInstance}.page.goTo(event);`,
                order: 3,
            },
            {
                text: '1',
                class: lastPage <= 3 ? 'd-none' : currentPage <= 2 ? 'd-none' : '',
                action: `${this.classInstance}.page.first();`,
                order: 1,
                label: 'Activate for first page',
            },
            {
                text: String(lastPage),
                class: lastPage <= 3 ? 'd-none' : lastPage - 2 < currentPage ? 'd-none' : '',
                action: `${this.classInstance}.page.last();`,
                order: 5,
                label: 'Activate for last page',
            },
            {
                text: '...',
                class: currentPage <= 3 ? 'd-none' : 'disabled',
                action: '',
                order: 2,
                label: ' ',
            },
            {
                text: '...',
                class: lastPage - 3 < currentPage ? 'd-none' : 'disabled',
                action: '',
                order: 4,
                label: ' ',
            },
        ]
        if (this.elements.pagination.innerHTML === '') {
            buttons.forEach((button) => {
                const liClone = this.templates.pagination.content.cloneNode(true) as DocumentFragment
                const li = checkedQuerySelector(liClone, 'li')
                const link = checkedQuerySelector(liClone, 'a')
                const span: HTMLSpanElement = checkedQuerySelector(liClone, 'span')
                span.innerText = button.text
                link.ariaLabel = button.label ? button.label : `Page ${button.text}`
                li.classList.add(`order-${button.order}`)
                if (button.class) {
                    li.classList.add(button.class)
                }
                if (button.action) {
                    link.setAttribute('onclick', button.action)
                    link.setAttribute('onkeypress', `if (event.keyCode == 13) ${button.action};`)
                }
                if (button.class === 'd-none' || button.class === 'active' || button.text === '...') {
                    link.removeAttribute('tabindex')
                }
                if (button.class === 'active') {
                    li.ariaCurrent = 'true'
                }
                if (button.text === '...') {
                    li.ariaHidden = 'true'
                }
                this.elements.pagination.appendChild(li)
            })
        } else {
            buttons.forEach((button, key) => {
                const li = this.elements.pagination.querySelectorAll('li')[key]
                const link = checkedQuerySelector(li, 'a')
                const span: HTMLSpanElement = checkedQuerySelector(li, 'span')
                span.innerText = button.text
                link.ariaLabel = button.label ? button.label : `Page ${button.text}`
                ;[...li.classList].forEach((entry: string) => {
                    if (entry === 'd-none' || entry === 'active') {
                        li.classList.remove(entry)
                    }
                })
                if (button.class) {
                    li.classList.add(button.class)
                }
                link.setAttribute('tabindex', '0')
                if (button.class === 'd-none' || button.class === 'active' || button.text === '...') {
                    link.removeAttribute('tabindex')
                }
                if (button.class === 'active') {
                    li.ariaCurrent = 'true'
                }
            })
        }
    }
}

export default Render
