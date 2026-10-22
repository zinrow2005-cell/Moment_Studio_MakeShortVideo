/* V5.33 integrated edge-tab theme sidebar. Keep the existing collapse state. */
(()=>{'use strict';
 const workspace=document.querySelector('.workspace');
 const catalog=workspace?.querySelector('.catalog');
 if(!workspace||!catalog)return;
 const old=document.getElementById('toggleThemes');
 old?.remove();
 const tab=document.createElement('button');
 tab.id='themeEdgeTab';tab.type='button';tab.className='theme-edge-tab';
 tab.setAttribute('aria-controls','cards');tab.title='收合主題側欄';
 tab.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 6-6 6 6 6"/></svg>';
 workspace.append(tab);
 const isClosed=()=>document.body.classList.contains('collapse-themes');
 function refresh(){const closed=isClosed();tab.classList.toggle('is-closed',closed);tab.setAttribute('aria-expanded',String(!closed));tab.setAttribute('aria-label',closed?'展開主題側欄':'收合主題側欄');tab.title=closed?'展開主題':'收合主題';
   // When closed the entire theme column shrinks to a narrow visible rail.
 if(closed){workspace.style.setProperty('--theme-edge-x','0px');return;}
   const w=workspace.getBoundingClientRect(),c=catalog.getBoundingClientRect();workspace.style.setProperty('--theme-edge-x',Math.round(c.right-w.left-11)+'px');}
 tab.addEventListener('click',()=>{document.body.classList.toggle('collapse-themes');refresh()});
 window.addEventListener('resize',refresh,{passive:true});
 const observer=new MutationObserver(refresh);observer.observe(document.body,{attributes:true,attributeFilter:['class']});
 if('ResizeObserver' in window){new ResizeObserver(refresh).observe(catalog)}
 refresh();
})();
