function loadScript(emoji)
{
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.src= "emoji";
    head.appendChild(script);
}


let images = ['😁','😊','😀','😋','😘','😝','😜','🙃','🤑','👽','💀','🤥','🤖','💩','🐒','🐴','🐍','💪','🫶','⚽','🥇','🍔','🍟','❤️','💙','🖤','💫','☢️'];


document.addEventListener('mousemove', function(e){

    let body = document.querySelector('body');
    let emoji = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;

    emoji.style.left = x+'px';
    emoji.style.top = y+'px';

    let icon = images[Math.floor(Math.random() * images.length)];
    emoji.innerText = icon;

    let size = Math.random() * 50;
    emoji.style.fontSize = 5 +size+'px';

    // get random valuje for transform
    let max = 0;
    let min = 200;
    let randomValue = Math.floor((Math.random() * ((max + 1) - min)) + min);

    emoji.style.transform = 'translateX('+randomValue +'px';

    body.appendChild(emoji);

    setTimeout(function(){
        emoji.remove();
    },1000)
    })
