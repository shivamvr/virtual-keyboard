const keyboard = document.createElement('div')
const row1 = document.createElement('div')
const row2 = document.createElement('div')
const row3 = document.createElement('div')
const row4 = document.createElement('div')
const row5 = document.createElement('div')
const container = document.querySelector('.container')
const input = document.querySelector('.text-input')

keyboard.classList.add('keyboard')

const row1data = '1234567890'
const row2data = 'qwertyuiop'
const row3data = 'asdfghkl'
const row4data = 'zxcvbnm'
const row5data = ', .'

// Created a function for assigning key to element

const assignkeys = (keys, row) => {

    for (var key = 0; key < keys.length; key++) {
        let button = document.createElement('div')
        let preview = document.createElement('div')
        preview.innerHTML = keys[key]
        preview.classList.add('preview')
        preview.classList.add('display-none')
        button.appendChild(preview)
        button.classList.add('key')
        button.innerHTML += keys[key]
        if(keys[key]===' '){
            preview.classList.add('width-m')
            button.classList.add('width-m')
        }
        row.appendChild(button)
    }
    row.classList.add('row')
    keyboard.appendChild(row)
    container.appendChild(keyboard)
}

const preveiwKey = (key) => {
        console.log('key:', key)
        let preview;
        let element = document.querySelectorAll('.preview');
        for (var i=0; i<element.length; i++) {
            if (element[i].textContent == key) {
                preview = element[i];
                break;
            }
        }
        preview.classList.remove('display-none')
        setTimeout((e)=>{
            preview.classList.add('display-none')
        },250)
    }

//  Adding click event on keys

const addClick = ()=>{
    window.onload = ()=>{
    const keys = document.querySelectorAll('.key')
    keys.forEach(key => {
        key.addEventListener('click',()=>{
            input.focus();
            input.value += key.textContent[0]
            preveiwKey(key.textContent[0])
        })
    });
   }
}

addClick()

assignkeys(row1data, row1)
assignkeys(row2data, row2)
assignkeys(row3data, row3)
assignkeys(row4data, row4)
assignkeys(row5data, row5)


