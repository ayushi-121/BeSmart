const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <nav class="navbar">
<div class="nav">
    <img src="img/brand.png" class="brand-logo" alt="brand-logo" >
<ul class="links-container">
    <li class="link-item"><a href="../index.html" class="link">Home</a></li>
    <li class="link-item"><a href="../clothes.html" class="link">Clothes</a></li>
    <li class="link-item"><a href="../makeup.html" class="link">Makeup</a></li>
    <li class="link-item"><a href="#" class="link">Help/Contact</a></li>
</ul>
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="img/img/user.png" alt=""></a>
        <a href="#"><img src="img/img/cart.png" alt=""></a>
    </div>
</div>
</nav>`
}
createNav();
