import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="padding: 20px; font-family: Arial">
    <h1 style="color: #e91e63">Zaalima - Ecommerce</h1>
    <h2>Our Products</h2>
    <div id="products" style="display:flex; gap:20px; flex-wrap:wrap; margin-top:20px">Loading...</div>
  </div>
`

fetch('http://localhost:5000/api/products')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('products')!
    container.innerHTML = products.map((p: any) => `
      <div style="border:1px solid #ddd; padding:15px; width:250px; border-radius:10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1)">
        <img src="${p.image}" style="width:100%; height:200px; object-fit:cover; border-radius:8px" />
        <h3>${p.name}</h3>
        <p style="font-weight:bold">₹${p.price}</p>
        <p style="color:gray">${p.category}</p>
        <button style="background:#e91e63; color:white; padding:8px 15px; border:none; border-radius:5px; cursor:pointer">Add to Cart</button>
      </div>
    `).join('')
  })