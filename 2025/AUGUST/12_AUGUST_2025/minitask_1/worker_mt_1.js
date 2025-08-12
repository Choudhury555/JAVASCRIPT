let count=0;
for(let i=1;i<=1000000;i++){
    count++;
}

postMessage(count);// Send result to main thread(mt_1.HTML)