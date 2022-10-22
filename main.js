

// déclaration des variables 

let btn, allPages, zIndexArray;

btn = document.querySelector('#action');
allPages = document.querySelectorAll('.page');
zIndexArray = [];

// passer un  zIndex incrémentiel pour chaque élément "page" 

for (let i = 0 ; i < allPages.length; i++){
    let item = allPages[i].style.zIndex = i;
    zIndexArray.push(item);
}

console.log(zIndexArray);
let index = 0;

// fonction de reaffectation de zIndex

const test = () => {

    // methode splice pour shift un element (decaler la position des elements)

    const fromIndex = zIndexArray.indexOf(zIndexArray.length); // 👉️ 0
    const toIndex = 0;
    const element = zIndexArray.splice(fromIndex, 1)[0];
    zIndexArray.splice(toIndex, 0, element);
    console.log(zIndexArray);

    for (let i = 0 ; i < zIndexArray.length; i++){
        allPages[i].style.zIndex = zIndexArray[i];
    }
} 

// test();

btn.addEventListener('click',function(){
    test();
    if(index < allPages.length){
        switch(true){
            case (index == allPages.length - 1):
                allPages[index].classList.add('flipped');
                setTimeout(function(){
                    allPages.forEach(element => {
                        element.classList.remove('flipped');
                    });
                    index = 0;
                },1000)
                break;
            default:
                allPages[index].classList.add('flipped');
                index++;
                break;
        }
    }
})

// recuperation de tous les éléments pages 

