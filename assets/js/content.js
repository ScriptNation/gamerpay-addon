// CONFIG (%)
var discount = 2.5
// ----------------




var css = '.bn37 {\n' +
    '  border-color: transparent;\n' +
    '  background-color: #fff;\n' +
    '  color: #000;\n' +
    '  transition: transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95);\n' +
    '}\n' +
    '  \n' +
    '.bn37:hover {\n' +
    '  transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;\n' +
    '}';
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);


const createButtonPriceItems = () => {
    const button = document.createElement('button')
    button.classList.add('bn37');
    button.style.margin = '10px'
    button.style.display = 'inline-flex'
    button.style.alignItems = 'center'
    button.style.justifyContent = 'center'
    button.style.padding = '0.7rem 2rem'
    button.style.fontFamily = 'Poppins, sans-serif'
    button.style.fontWeight = '700'
    button.style.fontSize ='18px'
    button.style.textAlign = 'center'
    button.style.textDecoration ='none'
    button.style.color = '#000'
    button.style.backfaceVisibility ='hidden'
    button.style.border = '0.3 rem solid transparent'
    button.style.borderRadius = '3rem'

    const buttonText = document.createTextNode('PRICE')
    button.appendChild(buttonText)


    return button
}

const createSwitchBargainBtns = () => {
    const button = document.createElement('button')
    button.classList.add('bn37');
    button.style.margin = '10px'
    button.style.display = 'inline-flex'
    button.style.alignItems = 'center'
    button.style.justifyContent = 'center'
    button.style.padding = '0.7rem 2rem'
    button.style.fontFamily = 'Poppins, sans-serif'
    button.style.fontWeight = '700'
    button.style.fontSize ='18px'
    button.style.textAlign = 'center'
    button.style.textDecoration ='none'
    button.style.color = '#000'
    button.style.backfaceVisibility ='hidden'
    button.style.border = '0.3 rem solid transparent'
    button.style.borderRadius = '3rem'

    const buttonText = document.createTextNode('BARGAIN')
    button.appendChild(buttonText)
    return button
}

const priceItemsBtn = createButtonPriceItems()
const switchBargainBtn = createSwitchBargainBtns()



const intFindPlaceForButtons = setInterval(async function() {
    const mainHeader = document.querySelector("#__next > div.Page_wrapper__0NhRM > div > div > div > header.TopBar_header__ZzGiD > nav > ul.TopBar_center__0j8va")

    if (mainHeader) {
        clearInterval(intFindPlaceForButtons)
        mainHeader.appendChild(priceItemsBtn)
        mainHeader.appendChild(switchBargainBtn)

        priceItemsBtn.addEventListener('click', function(){
            // price the skins
               let skins = []
               let nodes = document.getElementsByClassName('ItemCardNew_wrapper__phLcV')

               for (i = 0; i<nodes.length;i++){
                   if(!nodes[i].innerText == ''){
                       skins.push(nodes[i])
                   }
               }

               for (let i = 0; i < skins.length; i++) {

                   let base = skins[i].getElementsByClassName('ItemCardNewBody_pricePrimary__pqq_k')[0].innerHTML
                   let editBase = base.substring(0,base.indexOf('&nbsp;')).replace(',','.')
                   let newPrice = (editBase - (editBase * discount/100)).toFixed(2)

                   var inputs =  skins[i].getElementsByTagName('input')

                   inputs[0].value = newPrice
               }

        })

        switchBargainBtn.addEventListener('click', function(){
            // switch the bargain btns
            let bragainBtns = document.getElementsByClassName('Switch_button__WH3nW')
            for (let i = 0; i < bragainBtns.length;i++){
                bragainBtns[i].click()
            }
        })
    }
}, 50)

