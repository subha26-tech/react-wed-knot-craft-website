import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function Carousel({items}){
    const [i,setI]=useState(0); 
    const item=items[i]; 
    console.log(item)
    const prev=()=>setI((i-1+items.length)%items.length), next=()=>setI((i+1)%items.length);
    return <>
    <div className="carousel">
        <button onClick={prev}><ChevronLeft/></button>
        <img src={item.image} alt={item.title}/>
        <div className="carousel-copy">
            <b>{item.title}</b>
            <button className="mini-btn">Shop Now</button>
        </div>
        <button onClick={next}><ChevronRight/></button>
    </div>
    </>
}
