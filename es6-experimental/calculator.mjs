//import  { checkedSubtract, uncheckedSubtract }  from './subtract-module.mjs'
import * as subtractModule from './subtract-module'

let diff = subtractModule.checkedSubtract(123467, 989676767675);
console.log(diff);

let diff2 = subtractModule.uncheckedSubtract(1,2)
console.log(diff2);