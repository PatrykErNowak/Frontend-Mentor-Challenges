!function(){function e(e,c,t){var a;return(c="symbol"==typeof(a=function(e,c){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,c||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===c?String:Number)(e)}(c,"string"))?a:a+"")in e?Object.defineProperty(e,c,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[c]=t,e}System.register([],(function(c,t){"use strict";return{execute:function(){var c=document.createElement("style");c.textContent="*{box-sizing:border-box;margin:0;padding:0}html{font-size:62.5%}.calc{align-items:center;display:flex;font-family:League Spartan,sans-serif;justify-content:center;min-height:100vh;padding:2rem}.calc .calc-wrapper{display:flex;flex-direction:column;gap:2rem;max-width:40rem;width:100%}.calc__top-s{display:flex;justify-content:space-between;padding:1.5rem 0 .5rem}.calc__display-s{border-radius:1rem;padding:2.5rem 2rem}.calc__keypad-s{border-radius:1rem;display:grid;font-size:3rem;gap:1.2rem;grid-auto-rows:1fr;grid-template-columns:repeat(4,1fr);padding:2rem}.calc__name{font-size:3.2rem}.calc__theme-toggle-box{align-items:center;display:flex;gap:2.5rem}.calc__theme-toggle-box .name{font-size:1.1rem;letter-spacing:1px;text-transform:uppercase}.calc__theme-toggle-box .inputs-box{border:transparent;border-radius:100px;display:flex;gap:.5rem;padding:.4rem .5rem}.calc__theme-toggle-box .inputs-box legend{opacity:0;position:absolute;top:-1200px}.calc__theme-toggle-box .inputs-box .input-wrapper{align-items:center;display:flex;position:relative}.calc__theme-toggle-box .inputs-box .input-wrapper label{bottom:120%;left:50%;position:absolute;transform:translate(-50%,-50%)}.calc__theme-toggle-box .inputs-box .input-wrapper input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:50%;cursor:pointer;height:1.4rem;width:1.4rem}.calc__output{font-size:3.2rem;line-height:1;margin-left:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content}.calc__key,.calc__key--func,.calc__key--math,.calc__key--sum{border:transparent;border-radius:1rem;cursor:pointer;font-family:inherit;font-size:inherit;line-height:1;min-height:5rem;min-width:4.5rem}.calc__key--func,.calc__key--sum{font-size:.6em;text-transform:uppercase}.calc__key.reset,.reset.calc__key--func,.reset.calc__key--math,.reset.calc__key--sum{aspect-ratio:unset;grid-column:1/3}.calc__key.sum,.sum.calc__key--func,.sum.calc__key--math,.sum.calc__key--sum{aspect-ratio:unset;grid-column:3/5}.calc:has(#th-default:checked){background-color:#3a4764;color:#fff}.calc:has(#th-default:checked) .calc__display-s{background-color:#182034}.calc:has(#th-default:checked) .calc__keypad-s{background-color:#232c43}.calc:has(#th-default:checked) .calc__theme-toggle-box .inputs-box{background-color:#232c43}.calc:has(#th-default:checked) .calc__theme-toggle-box .inputs-box input:checked{background-color:#d03f2f}.calc:has(#th-default:checked) .calc__theme-toggle-box .inputs-box input:focus,.calc:has(#th-default:checked) .calc__theme-toggle-box .inputs-box input:hover{background-color:#d96659}.calc:has(#th-default:checked) .calc__key--math{background-color:#eae3dc;box-shadow:inset 0 -4px #b4a597;color:#444b5a}.calc:has(#th-default:checked) .calc__key--math:focus,.calc:has(#th-default:checked) .calc__key--math:hover{background-image:linear-gradient(180deg,rgba(255,255,255,.95),rgba(255,255,255,.95)),linear-gradient(180deg,#eae3dc,#eae3dc)}.calc:has(#th-default:checked) .calc__key--func,.calc:has(#th-default:checked) .calc__key--sum{color:#fff}.calc:has(#th-default:checked) .calc__key--func{background-color:#637097;box-shadow:inset 0 -4px #404e72}.calc:has(#th-default:checked) .calc__key--func:focus,.calc:has(#th-default:checked) .calc__key--func:hover{background-color:#90a0d0}.calc:has(#th-default:checked) .calc__key--sum{background-color:#d03f2f;box-shadow:inset 0 -4px #93261a}.calc:has(#th-default:checked) .calc__key--sum:focus,.calc:has(#th-default:checked) .calc__key--sum:hover{background-color:#d96659}.calc:has(#th-light:checked){background-color:#e6e6e6;color:#35352c}.calc:has(#th-light:checked) .calc__display-s{background-color:#ededed}.calc:has(#th-light:checked) .calc__keypad-s{background-color:#d1cccc}.calc:has(#th-light:checked) .calc__theme-toggle-box .inputs-box{background-color:#d1cccc}.calc:has(#th-light:checked) .calc__theme-toggle-box .inputs-box input:checked{background-color:#ca5502}.calc:has(#th-light:checked) .calc__theme-toggle-box .inputs-box input:focus,.calc:has(#th-light:checked) .calc__theme-toggle-box .inputs-box input:hover{background-color:#fc6b03}.calc:has(#th-light:checked) .calc__key--math{background-color:#e5e4e1;box-shadow:inset 0 -4px #a69d91;color:#35352c}.calc:has(#th-light:checked) .calc__key--math:focus,.calc:has(#th-light:checked) .calc__key--math:hover{background-image:linear-gradient(180deg,rgba(255,255,255,.95),rgba(255,255,255,.95)),linear-gradient(180deg,#e5e4e1,#e5e4e1)}.calc:has(#th-light:checked) .calc__key--func,.calc:has(#th-light:checked) .calc__key--sum{color:#fff}.calc:has(#th-light:checked) .calc__key--func{background-color:#377f86;box-shadow:inset 0 -4px #1b5f65}.calc:has(#th-light:checked) .calc__key--func:focus,.calc:has(#th-light:checked) .calc__key--func:hover{background-color:#46a2aa}.calc:has(#th-light:checked) .calc__key--sum{background-color:#ca5502;box-shadow:inset 0 -4px #893901}.calc:has(#th-light:checked) .calc__key--sum:focus,.calc:has(#th-light:checked) .calc__key--sum:hover{background-color:#fc6b03}.calc:has(#th-dark:checked){background-color:#160628;color:#ffe53d}.calc:has(#th-dark:checked) .calc__display-s{background-color:#1d0934}.calc:has(#th-dark:checked) .calc__keypad-s{background-color:#1d0934}.calc:has(#th-dark:checked) .calc__theme-toggle-box .inputs-box{background-color:#1d0934}.calc:has(#th-dark:checked) .calc__theme-toggle-box .inputs-box input:checked{background-color:#00e0d1}.calc:has(#th-dark:checked) .calc__theme-toggle-box .inputs-box input:focus,.calc:has(#th-dark:checked) .calc__theme-toggle-box .inputs-box input:hover{background-color:#14ffef}.calc:has(#th-dark:checked) .calc__key--math{background-color:#341c4f;box-shadow:inset 0 -4px #871c9c;color:#ffe53d}.calc:has(#th-dark:checked) .calc__key--math:focus,.calc:has(#th-dark:checked) .calc__key--math:hover{background-color:#7e47bd}.calc:has(#th-dark:checked) .calc__key--func{background-color:#58077d;box-shadow:inset 0 -4px #bc15f4;color:#fff}.calc:has(#th-dark:checked) .calc__key--func:focus,.calc:has(#th-dark:checked) .calc__key--func:hover{background-color:#9c0dde}.calc:has(#th-dark:checked) .calc__key--sum{background-color:#00e0d1;box-shadow:inset 0 -4px #6cf9f2;color:#1b2428}.calc:has(#th-dark:checked) .calc__key--sum:focus,.calc:has(#th-dark:checked) .calc__key--sum:hover{background-color:#14ffef}\n",document.head.appendChild(c);!function(){const e=document.querySelector("#th-default"),c=document.querySelector("#th-light"),t=document.querySelector("#th-dark"),a=function(){const e=window.matchMedia("(prefers-color-scheme: dark)").matches,c=window.matchMedia("(prefers-color-scheme: light)").matches;return e?"Dark":c&&"Light"}();e.checked=!0,"Dark"===a&&(t.checked=!0),"Light"===a&&(c.checked=!0)}(),new class{constructor(){e(this,"score",void 0),e(this,"currentNumber",0),e(this,"activeOperation",0),e(this,"typedNumberKey",!1),e(this,"screen",document.querySelector('[data-js="screen"]')),e(this,"keypad",document.querySelector('[data-js="keypad"]')),this.score=null,this.displayResult(),this.keypadHandler()}clearScreen(){this.screen.textContent="0"}clearCurrentNumb(){this.currentNumber=0}clearStuff(){this.clearCurrentNumb(),this.score=null,this.activeOperation=0}displayResult(){this.screen.textContent=null!==this.score?String(this.score):"0"}typeNumber(e){"."===e&&(this.currentNumber="0"),0!==this.currentNumber&&"0"!==this.currentNumber||(this.currentNumber=""),this.currentNumber=String(this.currentNumber)+e,this.screen.textContent=String(this.currentNumber),this.typedNumberKey=!0}sumAction(e=!1){const c=this.activeOperation;1===c&&this.addAction(!1),2===c&&this.subtractAction(!1),3===c&&this.multiplytAction(!1),4===c&&this.divideAction(!1),e&&(this.activeOperation=0)}mathAction(e,c,t=!0){(this.typedNumberKey||t)&&(0===this.activeOperation||this.activeOperation===e?(c(),this.displayResult(),this.clearCurrentNumb(),this.typedNumberKey=!1):this.sumAction(!1),t&&(this.activeOperation=e))}addAction(e=!0){this.mathAction(1,(()=>{this.currentNumber=+this.currentNumber,"number"==typeof this.score&&(this.score=this.score+this.currentNumber),null===this.score&&(this.score=this.currentNumber)}),e)}subtractAction(e=!0){this.mathAction(2,(()=>{this.currentNumber=+this.currentNumber,"number"==typeof this.score&&(this.score=this.score-this.currentNumber),null===this.score&&(this.score=this.currentNumber)}),e)}multiplytAction(e=!0){this.mathAction(3,(()=>{this.currentNumber=+this.currentNumber,"number"==typeof this.score&&(this.score=this.score*this.currentNumber),null===this.score&&(this.score=this.currentNumber)}),e)}divideAction(e=!0){this.mathAction(4,(()=>{this.currentNumber=+this.currentNumber,0===this.score||null===this.score||"number"!=typeof this.score||0===this.currentNumber?0===this.score||null===this.score||0!==this.currentNumber?0!==this.score||0===this.currentNumber?null===this.score&&(this.score=this.currentNumber):this.score=0:this.score="You can't divide by zero":this.score=this.score/this.currentNumber}),e)}deleteAction(){this.clearScreen(),this.clearCurrentNumb()}resetAction(){this.clearStuff(),this.clearScreen()}keypadHandler(){this.keypad.addEventListener("click",function(e){const{target:c}=e;if(c instanceof HTMLElement&&c.hasAttribute("data-action")){const e=c.dataset.action;"delete"===e&&this.deleteAction(),"reset"===e&&this.resetAction(),"numb"!==e&&"dot"!==e||this.typeNumber(c.textContent),"add"===e&&this.addAction(),"subtract"===e&&this.subtractAction(),"multiply"===e&&this.multiplytAction(),"divide"===e&&this.divideAction(),"sum"===e&&this.sumAction(!0)}}.bind(this))}}}}}))}();
