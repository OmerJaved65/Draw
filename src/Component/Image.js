import * as React from "react"
import './image.css'
function SvgComponent(props) {
  return (
    <svg  viewBox={"0 0 "+(parseInt(props.HH*4)+parseInt(props.LL)+20)+" "+((props.HH*3)+(props.WW*2)+20)} id="Layer_1"><defs><style>{".cls-1{fill:#fff;}.cls-1,.cls-2{stroke:#231f20;stroke-miterlimit:10;}.cls-2{fill:#fff;}"}</style></defs><title>boxes</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
        <rect class="cls-1" x={props.HH*2+0.5} y="0.5" width={props.LL} height={props.HH}/>
        {/* <rect class="cls-1" x={props.HH*2+0.5} y={props.HH*1+0.5} width={props.LL} height={props.WW}/> */}
        {/* <rect class="cls-1" x={props.HH*2+0.5} y={props.WW*1+(props.HH*1)+0.5} width={props.LL} height={props.HH}/>
        <rect class="cls-1" x={props.HH*2+0.5} y={props.HH*2+(props.WW*1)+0.5} width={props.LL} height={props.WW}/> */}
        {/* <rect class="cls-1" x={props.HH*2+0.5} y={props.HH*2+(props.WW*2)+0.5} width={props.LL} height={props.HH}/> */}
        
        <line class="curve" x1={(props.HH*2+0.5)+props.LL*1+props.HH*1+0.5} y1={props.HH*0.20} x2={(props.HH*2+0.5)+props.LL*1+props.HH*1+0.5} y2={props.HH*0.80}/>
        <line class="cls-2" x1={(props.HH*2+0.5)+props.LL*1+0.5} y1="0.5" x2={(props.HH*2+0.5)+props.LL*1+(props.HH*1)+0.5} y2={props.HH*0.20}/>
        
        <line class="cls-2" x1={(props.HH*2+0.5)+props.LL*1+0.5} y1={props.HH*1+0.5} x2={(props.HH*2+0.5)+props.LL*1+(props.HH*1)+0.5} y2={props.HH*0.80}/>
        
        <line class="cls-2" x1={props.HH*1+0.5} y1={props.HH*0.20} x2={props.HH*1+0.5} y2={props.HH*0.80}/>
        <line class="cls-2" x1={props.HH*2+0.5} y1="0.5" x2={props.HH*1+0.5} y2={props.HH*0.20}/>
        <line class="cls-2" x1={props.HH*2+0.5} y1={props.HH*1+0.5} x2={props.HH*1+0.5} y2={props.HH*0.80} />
{/*         
        <rect class="cls-1" x={props.HH*1+0.5} y={props.HH*1+0.5} width={props.HH} height={props.WW}/>
         */}

        {/* <line class="cls-2" x1={props.HH*1+0.5} y1={props.HH*1.20} x2={props.HH*1+0.5} y2={props.HH*0.80+(props.WW*1)}/>
        <line class="cls-2" x1={props.HH*2+0.5} y1={props.HH*1+0.5} x2={props.HH*1+0.5} y2={props.HH*1.20}/>
        <line class="cls-2" x1={props.HH*2+0.5} y1={props.HH*1+(props.WW*1)+0.5} x2={props.HH*1+0.5} y2={props.HH*0.80+(props.WW*1)}/> */}

        {/* <rect class="cls-1" x={(props.LL*1)+(props.HH*2)+0.5} y={props.HH*1+0.5} width={props.HH} height={props.WW}/> */}

        {/* <line class="cls-2" x1={(props.LL*1)+props.HH*3+0.5} y1={props.HH*1.20} x2={(props.LL*1)+props.HH*3+0.5} y2={props.HH*0.80+(props.WW*1)}/>
        <line class="cls-2" x1={(props.LL*1)+props.HH*3+0.5} y1={props.HH*1.20+0.5} x2={(props.LL*1)+props.HH*2+0.5} y2={props.HH*1}/>
        <line class="cls-2" x1={(props.LL*1)+props.HH*3+0.5} y1={props.HH*0.80+(props.WW*1)+0.5} x2={(props.LL*1)+props.HH*2+0.5} y2={props.HH*1+(props.WW*1)}/>

        <rect class="cls-1" x={(props.HH*0.40)+0.5} y={(props.WW*1)+props.HH*1+0.5} width={props.HH*1.60} height={props.HH}/>
        <rect class="cls-1" x={(props.LL*1)+(props.HH*2)+0.5} y={(props.WW*1)+props.HH*1+0.5} width={props.HH*1.60} height={props.HH}/>

        <rect class="cls-1" x={0.5} y={(props.WW*1)+props.HH*2+0.5} width={props.HH*2} height={props.WW}/>
        <rect class="cls-1" x={(props.LL*1)+(props.HH*2)+0.5} y={(props.WW*1)+props.HH*2+0.5} width={props.HH*2} height={props.WW}/> */}

        <rect class="cls-1" x={(props.HH*0.40)+0.5} y={(props.WW*2)+props.HH*2+0.5} width={props.HH*1.60} height={props.HH}/>
        <rect class="cls-1" x={(props.LL*1)+(props.HH*2)+0.5} y={(props.WW*2)+props.HH*2+0.5} width={props.HH*1.60} height={props.HH}/>
        </g></g></svg>
  )
}

export default SvgComponent
