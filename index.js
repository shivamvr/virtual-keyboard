const keyboard = document.createElement('div')
const row1 = document.createElement('div')
const row2 = document.createElement('div')
const row3 = document.createElement('div')
const row4 = document.createElement('div')
const row5 = document.createElement('div')
const container = document.querySelector('.container')

keyboard.classList.add('keyboard')

const row1data = '1234567890'
const row2data = 'qwertyuiop'
const row3data = 'asdfghkl'
const row4data = 'zxcvbnm'
const row5data = ', .'

// Created a function for assigning key to element
const assignkeys = (keys,row)=>{
 
 for(var key=0; key<keys.length; key++){
    let button = document.createElement('div')
     button.classList.add('key')
     button.innerHTML = keys[key]
     row.appendChild(button)
 }
 row.classList.add('row')
 keyboard.appendChild(row)
 container.appendChild(keyboard)
}

assignkeys(row1data, row1)
assignkeys(row2data, row2)
assignkeys(row3data, row3)
assignkeys(row4data, row4)
assignkeys(row5data, row5)

