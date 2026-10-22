importScripts('engine.js');
onmessage=e=>{try{let {channels,sampleRate}=e.data;postMessage({onsets:MomentEngine.detectOnsets(channels,sampleRate)})}catch(error){postMessage({error:String(error)})}};
