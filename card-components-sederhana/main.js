const root = document.getElementById('root')

class Card {
    constructor(title, desc, btn, btnText, img) {
        this.title = title
        this.desc = desc
        this.btn = btn
        this.btnText = btnText
        this.img = img
    }

    addImg() {
        const setImg = document.createElement('img')
        Object.assign(setImg, {
            src: this.img,
            alt: this.title,
            className: 'card-image',
        })
        return setImg
    }

    addTitle() {
        const setTitle = document.createElement('h2')
        setTitle.setAttribute('class', 'card-title')
        setTitle.innerText = this.title

        return setTitle
    }

    addDesc() {
        const setDesc = document.createElement('p')
        setDesc.setAttribute('class', 'card-description')
        setDesc.innerText = this.desc

        return setDesc
    }

    addBtn() {
        const setBtn = document.createElement('a')
        Object.assign(setBtn, {
            href: this.btn,
            className: 'card-button',
        })

        setBtn.innerText = this.btnText
        return setBtn
    }

    render(parent) {
        const wrapper = document.createElement('div')
        wrapper.className = 'card'

        const cardContent = document.createElement('div')

        cardContent.setAttribute('class', 'card-content')

        cardContent.append(this.addTitle())
        cardContent.append(this.addDesc())
        cardContent.append(this.addBtn())

        wrapper.append(this.addImg())
        wrapper.append(cardContent)

        parent.append(wrapper)
    }
}

const card1 = new Card(
    'Judul Card',
    'Deskripsi singkat tentang isi card ini.',
    '#',
    'Baca Selengkapnya',
    'https://picsum.photos/300/200'
)
const card2 = new Card(
    'Judul Card',
    'Deskripsi singkat tentang isi card ini.',
    '#',
    'Baca Selengkapnya',
    'https://picsum.photos/300/200'
)
const card3 = new Card(
    'Judul Card',
    'Deskripsi singkat tentang isi card ini.',
    '#',
    'Baca Selengkapnya',
    'https://picsum.photos/300/200'
)

card1.render(root)
card2.render(root)
card3.render(root)
