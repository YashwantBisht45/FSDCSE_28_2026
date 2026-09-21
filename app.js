const root = document.getElementById('container');
const btn = document.getElementById('btn');
console.log(root);
console.log(btn);

async function getData() {
    // alert("Whassap");
    const srvrData = await fetch('https://fakestoreapi.com/products');
    // console.log(srvrData);

    const jsonData = await srvrData.json();
    root.innerHTML = `<h2 style= color: red>${jsonData[0].title}</h2>`
    console.log(jsonData[0].title);
}

btn.addEventListener('click', getData);