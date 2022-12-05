import {plus} from './plus'
import './style.css';
import tiger from './tiger.png';
import android from './android.png';

console.log(plus(3,7));

document.addEventListener('DOMcontentLoaded',()=>{
    document.body.innerHTML=`<img src="${tiger}"><img src="${android}">`
})