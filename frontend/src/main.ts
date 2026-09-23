import './style.css'

let products: any[] = [];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="padding:20px; max-width:800px; margin:auto; font-family:sans-serif">
    <h1>Zaalima - Fashion SaaS</h1>
    <h3>Multi-Store E-Commerce Platform</h3>
    
    <div style="border:1px solid #ccc; padding:15px; margin:20px 0; border-radius:8px">
      <h3>Add Product</h3>
      <input id="pname" placeholder="Product Name (e.g. Black Kurta)" style="padding:8px; width:100%; margin:5px 0" />
      <input id="price" placeholder="Price (e.g. 1999)" type="number" style="padding:8px; width:100%; margin:5px 0" />
      <input id="img" placeholder="Image URL" value="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" style="padding:8px; width:100%; margin:5px 0" />
      <button id="addBtn" style="background:black; color:white; padding:10px 20px; cursor:pointer; margin-top:10px">Add</button>
    </div>

    <h2>Live Store Products (<span id="count">0</span>)</h2>
    <div id="list" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap:15px"></div>
  </div>
`

function render(){
  const list = document.getElementById('list')!;
  const count = document.getElementById('count')!;
  count.textContent = products.length.toString();
  list.innerHTML = products.map(p => `
    <div style="border:1px solid #ddd; border-radius:8px; overflow:hidden">
      <img src="${p.image}" style="width:100%; height:180px; object-fit:cover" />
      <div style="padding:10px">
        <b>${p.name}</b><br/>₹${p.price}
      </div>
    </div>
  `).join('');
}

document.getElementById('addBtn')!.addEventListener('click', () => {
  const name = (document.getElementById('pname') as HTMLInputElement).value;
  const price = (document.getElementById('price') as HTMLInputElement).value;
  const image = (document.getElementById('img') as HTMLInputElement).value;
  
  if(!name || !price){ alert("Enter name and price"); return; }
  
  products.push({ _id: Date.now(), name, price, image });
  render();
  (document.getElementById('pname') as HTMLInputElement).value = "";
  (document.getElementById('price') as HTMLInputElement).value = "";
});

render();