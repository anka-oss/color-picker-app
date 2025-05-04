const colorInput = document.getElementById("color-input");
const hexContainer = document.getElementById("hex-value");
const rgbContainer = document.getElementById("rgb-value");
const favoriteButton = document.getElementById("add-to-favorites");

function hexToRgb (colorValue) {
    const hex = colorValue.slice(1);
    const redHex = hex.slice(0, 2);
    const greenHex = hex.slice(2, 4);
    const blueHex = hex.slice(4, 6);

    const r = parseInt(redHex, 16);
    const g = parseInt(greenHex, 16);
    const b = parseInt(blueHex, 16);

    return[r, g, b];
}

function addTofavorites () {
    const colorValue = colorInput.value;
    const stored = localStorage.getItem('favorites');
    const favs = stored ? JSON.parse(stored) : [];

    favs.push(colorValue);
    localStorage.setItem('favorites', JSON.stringify(favs));
}

colorInput.addEventListener('input', () => {
    let colorValue = colorInput.value;

    const taskItemHex = document.createElement('div');
    const taskItemRgb = document.createElement('div');

    taskItemHex.classList.add('flex', 'items-center', 'justify-center', 'space-x-2');
    taskItemRgb.classList.add('flex', 'items-center', 'justify-center', 'space-x-2');
    favoriteButton.classList.remove('text-gray-400');
    favoriteButton.classList.add('text-black', 'md:hover:cursor-pointer', 'md:hover:text-gray-400');

    addTofavorites();

    taskItemHex.innerHTML = `
        <p>HEX: ${colorValue}</p>
        <button type="submit" class="m-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>                      
        </button>
    `;

    const [r, g, b] = hexToRgb(colorValue);

    taskItemRgb.innerHTML = `
        <p>RGB: rgb(${r}, ${g}, ${b})</p>
        <button type="submit" class="m-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>                      
        </button>
    `;

    hexContainer.appendChild(taskItemHex);
    rgbContainer.appendChild(taskItemRgb);
});