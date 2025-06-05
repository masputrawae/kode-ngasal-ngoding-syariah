// ============= ARRAY ============= //
const colors = [
    { name: 'Sky Blue', color: '#87CEEB' },
    { name: 'Coral', color: '#FF7F50' },
    { name: 'Lime Green', color: '#32CD32' },
    { name: 'Goldenrod', color: '#DAA520' },
    { name: 'Orchid', color: '#DA70D6' },
    { name: 'Tomato', color: '#FF6347' },
    { name: 'Turquoise', color: '#40E0D0' },
    { name: 'Slate Gray', color: '#708090' },
    { name: 'Dark Orange', color: '#FF8C00' },
    { name: 'Medium Purple', color: '#9370DB' },
    { name: 'Mint Cream', color: '#F5FFFA' },
    { name: 'Steel Blue', color: '#4682B4' },
    { name: 'Salmon', color: '#FA8072' },
    { name: 'Aquamarine', color: '#7FFFD4' },
    { name: 'Sienna', color: '#A0522D' },
    { name: 'Khaki', color: '#F0E68C' },
    { name: 'Dodger Blue', color: '#1E90FF' },
    { name: 'Plum', color: '#DDA0DD' },
    { name: 'Firebrick', color: '#B22222' },
    { name: 'Sea Green', color: '#2E8B57' },
]

// ============= VARIABELS ============= //
const body = document.body
const buttons = document.querySelectorAll('[data-button]')
const historyColor = document.getElementById('historyColor')
const nameColor = document.getElementById('nameColor')
const nameHex = document.getElementById('nameHex')

const histories = []

// ============= FUNCTIONS ============= //

// Tampilkan riwayat warna terbaru di atas
function showHistory(name, color) {
    const li = document.createElement('li')
    li.textContent = `${name}: ${color}`
    historyColor.prepend(li)
}

// Pilih warna acak dari array
function shuffleColor(list) {
    return list[Math.floor(Math.random() * list.length)]
}

// Update tampilan dan simpan ke riwayat
function updateDisplay({ name, color }) {
    body.style.backgroundColor = color
    nameColor.textContent = name
    nameHex.textContent = color
    showHistory(name, color)
}

// Ganti warna acak dan simpan ke riwayat
function changeColor() {
    const bgShuffle = shuffleColor(colors)
    histories.push(bgShuffle)
    updateDisplay(bgShuffle)
}

// Reset ke warna awal dan bersihkan riwayat
function resetColor() {
    histories.length = 0
    historyColor.innerHTML = ''
    updateDisplay(colors[0])
}

// ============= MAIN ============= //
function main() {
    resetColor() // Set warna awal

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const btnTarget = btn.getAttribute('data-button')
            if (btnTarget === 'shuffleColor') changeColor()
            if (btnTarget === 'resetColor') resetColor()
        })
    })
}

main()
