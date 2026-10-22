(function(root){
'use strict';
function sceneAt(time,duration,pace,theme,count,seed=0){
 const scenes=Math.max(4,Math.round(5*pace),count);
 const length=duration/scenes, index=Math.min(scenes-1,Math.floor(Math.max(0,time)/length));
 const mode=(index+theme)%5, slots=[1,2,3,4,2][mode];
 const ids=Array.from({length:slots},(_,i)=>count?((index+i+seed)%count+count)%count:i%4);
 return {index,length,local:Math.max(0,time-index*length),mode,ids};
}
function envelope(t,duration,fade){
 if(!fade)return 1;
 const start=Math.min(.85,duration*.12),end=Math.min(1.8,duration*.18);
 const smooth=x=>{x=Math.min(1,Math.max(0,x));return x*x*(3-2*x)};
 return Math.min(smooth(t/Math.max(.01,start)),smooth((duration-t)/Math.max(.01,end)));
}
function audioOffset(time,start,length,loop){const available=length-start;if(available<=0)return null;if(!loop&&time>=available)return null;return start+(loop?time%available:time);}
function formatTime(t){t=Math.max(0,Math.floor(t));return String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0');}
function curve(x,type='gentle'){x=Math.max(0,Math.min(1,x));if(type==='snappy')return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;if(type==='cinema')return x<.25?.08*Math.pow(x/.25,2):x>.75?1-.08*Math.pow((1-x)/.25,2):.08+.84*((x-.25)/.5);return x*x*(3-2*x);}
function detectOnsets(channels,sampleRate){const hop=Math.max(1,Math.round(sampleRate*.01)),frames=Math.floor(channels[0].length/hop),energy=new Float32Array(frames);for(let f=0;f<frames;f++){let sum=0,n=0;for(let ch of channels)for(let j=f*hop;j<(f+1)*hop;j+=4){sum+=ch[j]*ch[j];n++}energy[f]=Math.sqrt(sum/Math.max(1,n))}let flux=new Float32Array(frames),peak=0;for(let i=1;i<frames;i++){flux[i]=Math.max(0,energy[i]-energy[i-1]);peak=Math.max(peak,flux[i])}if(peak<.002)return [];let candidates=[];for(let i=2;i<frames-2;i++){let sum=0,n=0;for(let j=Math.max(1,i-20);j<=Math.min(frames-1,i+20);j++){sum+=flux[j];n++}if(flux[i]>Math.max(.002,peak*.12,sum/n*2.2)&&flux[i]>=flux[i-1]&&flux[i]>=flux[i+1]){let candidate={time:i*hop/sampleRate,strength:flux[i]/peak},last=candidates[candidates.length-1];if(last&&candidate.time-last.time<.22){if(candidate.strength>last.strength)candidates[candidates.length-1]=candidate}else candidates.push(candidate)}}return candidates;}
function projectOnsets(onsets,start,audioDuration,loop,duration){let available=audioDuration-start;if(available<=0)return [];let base=onsets.filter(x=>x.time>=start&&x.time<audioDuration).map(x=>({...x,time:x.time-start})),out=[];for(let offset=0;offset<duration;offset+=available){for(let x of base)if(x.time+offset>0&&x.time+offset<duration)out.push({...x,time:x.time+offset});if(!loop)break}return out.sort((a,b)=>a.time-b.time);}
function makeCuts(duration,count,pace,beats=[]){let n=Math.max(4,Math.round(5*pace),count),step=duration/n,cuts=[0];for(let i=1;i<n;i++){let target=i*step,range=Math.min(.6,step*.32),nearest=beats.filter(b=>Math.abs(b.time-target)<=range).sort((a,b)=>Math.abs(a.time-target)-Math.abs(b.time-target))[0];cuts.push(nearest?nearest.time:target)}cuts.push(duration);return cuts;}
function plannedScene(time,cuts){let i=0;while(i<cuts.length-2&&time>=cuts[i+1])i++;return {index:i,start:cuts[i],length:cuts[i+1]-cuts[i],local:Math.max(0,Math.min(time-cuts[i],cuts[i+1]-cuts[i]))};}
const api={sceneAt,envelope,audioOffset,formatTime,curve,detectOnsets,projectOnsets,makeCuts,plannedScene};if(typeof module==='object')module.exports=api;else root.MomentEngine=api;
})(typeof window!=='undefined'?window:globalThis);
