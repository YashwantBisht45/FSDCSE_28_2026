
console.log("Hello world");
=======
const root = document.getElementById('root');
const btn = document.getElementById('btn');
console.log(root);

const h2 = document.createElement('h2');
const h1 = document.createElement('h1');

const img = document.createElement('img');

const loader = document.createElement('h1');
loader.innerHTML = "Loading Data...";

async function showData() {
    try{
        root.appendChild(loader);

        const srvrData = await fetch('https://fakestoreapi.com/products');
        // console.log(srvrData);

        const jsonData = await srvrData.json();

        h1.innerHTML = `<h2 style=color:red> ${jsonData[0].title}</h2>`

        

        let table = `<table border = '2px'>
                        ${
                            jsonData.map((el) => (
                                `<tr>
                                    <td><img src = ${el.image} height = 200 width = 200></img></td>
                                    <td>${el.id}</td>
                                    <td>${el.title}</td>
                                    <td>${el.price}</td>
                                </tr>`
                            ))
                        }
                        </table>`
        h1.innerHTML = table;
        root.appendChild(h1);

        // h1.innerText = 'DOM MANIPULATION';
        // root.appendChild(h1);

        // img.src = 'https://cdn1.suno.ai/c4ae2654-2ae3-4a0f-b43e-70f9bea50828_25a32f8b.png';
        
        // img.setAttribute('height',200);
        // img.setAttribute('width',200);

        // h2.innerText = 'Welcome to DOM MAnipulation';
        // root.appendChild(h2);

        // root.append(img);
    }
    catch(e){
        console.log(e);
    }
    finally{
        root.removeChild(loader);
    }
    
}

btn.addEventListener('click', showData);
