const container = document.getElementById('root')
console.log(container)

const root = ReactDOM.createRoot(container)
const h2 = React.createElement('h2',{style: {color: 'red'}}, 'Welcome to react');
const h1 = React.createElement('h1',{style: {color: 'brown', backgroundColor: 'white'}}, 'Welcome to React');
const img = React.createElement('img',{src:"https://cdn.magicdecor.in/com/2024/06/28144727/Nikola-Tesla-Wallpaper-for-Wall.jpg", style: {height: '150px', width: '200px'}});

const div = React.createElement('div', {style: {border:'2px dotted black', height: '300px', leftPadding: '50px'} }, h1,h2, img)

root.render(div);

