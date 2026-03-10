(async function(){

    const productId = ShopifyAnalytics.meta.product.id;
    const shop = Shopify.shop;

  fetch(`https://shop-app.kesug.com/api/purchases.php?product_id=${productId}&shop=${shop}`, {
    method: 'GET',
    credentials: 'omit'  // important: omit cookies if you don't need them
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

    let container = document.createElement("div");

    container.style.marginTop="10px";

    data.forEach(p=>{

        let timeAgo = Math.floor((Date.now()-new Date(p.purchased_at))/60000);

        let el=document.createElement("div");

        el.innerHTML =
            "✔ "+p.customer_name+
            " purchased this "+timeAgo+" minutes ago";

        container.appendChild(el);

    });

    document.querySelector('form[action="/cart/add"]').appendChild(container);


})();

