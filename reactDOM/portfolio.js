const container = document.getElementById('root')
console.log(container)

const root = ReactDOM.createRoot(container);

const h1 = React.createElement('h1', {}, 'RESUME')
const img = React.createElement('img', {src: "./yashwant.jpg", style: {height: '200px', width: '200px', paddingLeft: '50px'}})

const p1 = React.createElement('p', {}, 'Skills: HTML, CSS, JS')
const p2 = React.createElement('p', {}, 'Course: BTEch')
const p3 = React.createElement('p', {}, 'Branch: CSE')

const div = React.createElement('div', {style: {height: "500px", width: "500px", border: "dotted"}}, h1, img, p1,p2,p3);

root.render(div)