(()=>{let e=e=>{try{if(window.CollectishAndroid?.openExternal){window.CollectishAndroid.openExternal(e);return}}catch{}window.open(e,`_blank`,`noopener,noreferrer`)},t=e=>`https://www.tcgplayer.com/search/magic/product?productLineName=magic&q=${encodeURIComponent(e)}&view=grid`,n=()=>(document.querySelector(`#cxSellerDrillBody .cx-seller-drill-head h3`)?.textContent||``).replace(/^Order\s+/i,``).trim(),r=e=>{let t=e?.closest(`.cx-table-wrap`)?.previousElementSibling;return/^Items\s*\(/i.test(t?.textContent?.trim()||``)};document.addEventListener(`click`,async i=>{let a=i.target.closest?.(`#cxSellerDrilldown .cx-table tbody tr`);if(!a||!r(a))return;let o=n(),s=a.querySelector(`td`)?.textContent?.trim()||``;if(!(!o||!s)){i.preventDefault(),a.classList.add(`cx-item-opening`);try{let n=(await rest(`seller_order_items?select=product_id,sku_id,product_name&order_number=eq.${encodeURIComponent(o)}&product_name=eq.${encodeURIComponent(s)}&limit=1`))?.[0]?.product_id;e(n?`https://www.tcgplayer.com/product/${encodeURIComponent(n)}`:t(s))}catch{e(t(s))}finally{a.classList.remove(`cx-item-opening`)}}},!0);let i=document.createElement(`style`);i.textContent=`
    #cxSellerDrilldown .cx-table tbody tr{cursor:pointer}
    #cxSellerDrilldown .cx-table tbody tr.cx-item-opening{opacity:.6}
    @media(max-width:980px){
      #cxSellerDrilldown .cx-order-flow{grid-template-columns:repeat(3,minmax(0,1fr))!important;overflow:visible!important;gap:7px!important}
      #cxSellerDrilldown .cx-order-flow-step{min-width:0!important;width:auto!important}
    }
    @media(max-width:430px){
      #cxSellerDrilldown .cx-order-flow{gap:6px!important}
      #cxSellerDrilldown .cx-order-flow-step{padding:9px 8px!important}
      #cxSellerDrilldown .cx-order-flow-step strong{font-size:13px!important}
      #cxSellerDrilldown .cx-order-flow-step.net strong{font-size:15px!important}
    }
  `,document.head.appendChild(i)})();