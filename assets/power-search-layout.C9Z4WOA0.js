var e=document.createElement(`style`);e.id=`cxScoutPowerSearchLayout`,e.textContent=`
#cxScout .cx-power-search-suggest{
  top:calc(100% + 4px);
  margin-top:0;
}
@media(max-width:700px){
  #cxScout .cx-power-search-suggest{
    top:calc(100% + 6px);
    max-height:min(42vh,260px);
    overflow:auto;
  }
}
`,document.getElementById(e.id)||document.head.appendChild(e);