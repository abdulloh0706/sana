var frm = document.querySelector('.frm')

var inp1 = document.querySelector('.inp1')
var inp2 = document.querySelector('.inp2')
var inp3 = document.querySelector('.inp3')

var spn1 = document.querySelector('.spn1')
var spn2 = document.querySelector('.spn2')
var spn3 = document.querySelector('.spn3')


frm.addEventListener('submit', ()=>{
    if(inp1.value >= 2020){
        inp1.classList.toggle('rigth')
    }
    else{
        inp1.classList.toggle('err')
    }
    if(inp1.value == 2020){
        spn1.textContent = 'Ikki ming yigirmanchi yilning '
    }
    else if(inp1.value == 2021){
        spn1.textContent = 'Ikki ming yigirma birinchi yilning '
    }
    else if(inp1.value == 2022){
        spn1.textContent = 'Ikki ming yigirma ikkinchi yilning '
    }
    else{
        spn1.textContent = 'Yil kiriting |'
        inp1.classList.toggle('err')
    }


// 
})

var btn1 = document.querySelector('.btn1')

btn1.addEventListener('click', ()=>{
    // let oy = Math.floor(inp2.value % 10)
    // let oy1 = inp2.value + 0

    
    // oy == 1 ? nat1 = 'Yanvarning |' : oy == 2 ? nat1 = 'Fevralning |' : oy == 3 ? nat1 = 'Martning |' : oy == 4 ? nat1 = 'Aprelning |'  
    // : oy == 5 ? nat1 = 'Mayning |' : oy == 6 ? nat1 = 'Iyunning |' : oy == 7 ? nat1 = 'Iyulning |' : oy == 8 ? nat1 = 'Avgustning |'  
    // : oy == 9 ? nat1 = 'Sentyabirning |' : inp2.value == 10 ? nat1 = 'Oktyabirning |' : inp2.value == 11 ? nat1 = 'Noyabrning |' : inp2.value == 12 ? nat1 = 'Dekabrning |'  
    // : nat1 = 'buncha oy soni y`oq |'

    
    // spn2.textContent = nat1
    
    // if(oy <= 12){
    //     spn2.classList.toggle('rigth')
    //     inp2.classList.toggle('rigth')
    // }
    // else{
    //     spn2.classList.toggle('err')
    //     inp2.classList.toggle('err')
    // }
    
    var array = ['Yanvar','Fevral','Mart','Aprel',
    'May','Iyun','Iyul','Avgust','Sentyabr',
    'Oktyabr','Noyabr','Dekabr']

    var right = inp2.classList.toggle('rigth')

    if(inp2.value == 1){
        spn2.textContent = array[0] + ' Oyining'
        right
    }
    else if(inp2.value == 2){
        spn2.textContent = array[1] + ' Oyining'
        right
    }
    else if(inp2.value == 3){
        spn2.textContent = array[2] + ' Oyining'
        right
    }
    else if(inp2.value == 4){
        spn2.textContent = array[3] + ' Oyining'
        right
    }
    else if(inp2.value == 5){
        spn2.textContent = array[4] + ' Oyining'
        right
    }
    else if(inp2.value == 6){
        spn2.textContent = array[5] + ' Oyining'
        right
    }
    else if(inp2.value == 7){
        spn2.textContent = array[6] + ' Oyining'
        right
    }
    else if(inp2.value == 8){
        spn2.textContent = array[7] + ' Oyining'
        right
    }
    else if(inp2.value == 9){
        spn2.textContent = array[8] + ' Oyining'
        right
    }
    else if(inp2.value == 10){
        spn2.textContent = array[9] + ' Oyining'
        right
    }
    else if(inp2.value == 11){
        spn2.textContent = array[10] + ' Oyining'
        right
    }
    else if(inp2.value == 12){
        spn2.textContent = array[11] + ' Oyining'
        right
    }
    else if(inp2.value == ''){
        spn2.textContent = 'Oy kiriting |'
        inp2.classList.toggle('err')
    }
    else{
        spn2.textContent = 'Bunaqa oy yo`q |'
        inp2.classList.toggle('err')
    }
})


btn1.addEventListener('click',()=>{
    
    let ikki = Math.floor(inp3.value / 10)
    let bir = inp3.value % 10

    ikki == '' ? nat1 = '' : ikki == 1 ? nat1 = 'O`n' : ikki == 2 ? nat1 = 'Yigirma' : ikki == 3 ? nat1 = 'O`ttiz' : nat1 = ' 1 oyda buncha kun yo`q'
    bir == 0 ? nat2 = '' : bir == 1 ? nat2 = ' Birinchi' : bir == 2 ? nat2 = ' Ikkinchi' : bir == 3 ? nat2 = ' Uchinchi' : bir == 4 ? nat2 = ' To`rtinchi'
    : bir == 5 ? nat2 = ' Beshinchi' : bir == 6 ? nat2 = ' Oltinchi' : bir == 7 ? nat2 = ' Yettinchi' : bir == 8 ? nat2 = ' Sakkizinchi' : nat2 = ' T`oqqizinchi'

    spn3.textContent = ''
    spn3.textContent = nat1 + nat2 + ' Kuni'

    if(inp3.value == ''){
        spn3.textContent = 'Kun kiriting'
        inp3.classList.toggle('err')
    }
    else if(inp3.value >= 32){
        spn3.textContent = '1 oyda buncha kun yo`q'
        inp3.classList.toggle('err')
    }
    else{
        inp3.classList.toggle('rigth')
    }

    var array = ['Yanvar','Fevral','Mart','Aprel',
    'May','Iyun','Iyul','Avgust','Sentyabr',
    'Oktyabr','Noyabr','Dekabr']

    if(inp2.value == array[1] && inp3.value >= 30){
        spn2.textContent = ' '
        spn3.textContent = ' Fevral oyida buncha kun yo`q'
        inp3.classList.toggle('err')
    }
    else if(inp2.value > 12 || inp3.value > 30){
        spn3.textContent = 'Bunaqa kun y`oq'
    }
    else{
        console.log(nat1 + nat2);
    }
})