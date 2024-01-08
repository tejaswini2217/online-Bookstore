let cart = [];

let total = 0;

function addToCart(bookName, price) {

    cart.push({ name: bookName, price: price });

    total += price;

    updateCart();
}

function removeFromCart(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    updateCart();
}

function updateCart() {

  let cartItemsElement = document.getElementById("cart-items");

  let totalElement = document.getElementById("total");

  cartItemsElement.innerHTML = '';

  cart.forEach((item, index) => {

      let itemElement = document.createElement("tr");

      itemElement.innerHTML = `+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

          <td>${item.name}</td>

          <td>${item.price.toFixed(2)} Rs</td>

          <td><button class="remove-button" onclick="removeFromCart(${index})">Remove</button></td>
      `;
      cartItemsElement.appendChild(itemElement);
  });

  totalElement.textContent = `Total: ${total.toFixed(2)} Rs`;

}
const books = [

  { title: "The little leaf ", author: "Clove Griffith", price: 200, image: "https://static.storyweaver.org.in/illustration_crops/99508/size2/2a551b9353131eff1cbbd72774fa8d32.jpg" },

  { title: "who is it?", author: "J.R.R.Tolkien", price: 299, image: "https://static.storyweaver.org.in/illustration_crops/34997/size2/65a5a02ef778f95e582ebb23ecddc4e6.jpg" },

  { title: "The little kittens", author: "Top Maloney", price: 300, image: "https://static.storyweaver.org.in/illustration_crops/101318/size2/a997546bf81a177c22005e6474cb2c66.jpg" },

  { title: "The Journey Of Dreams", author: "John Creasey", price: 250, image: "https://getcovers.com/wp-content/uploads/2020/12/image35.jpg" },

  { title: "Typography", author: "Michelle De Generes", price: 400, image: "https://assets.visme.co/templates/banners/thumbnails/i_Creative-Book-Cover_full.jpg" },

  { title: "Perfection", author: "Rav Dov Katz", price: 350, image: "https://blogs.yu.edu/revel/wp-content/uploads/sites/17/2014/08/book_cover.jpg" },

  { title: "When i go back home", author: "Matt Weiss", price: 250, image: "https://static.storyweaver.org.in/illustration_crops/527518/size2/51104c8b31934a61c03e889db36c5644.jpg" },

  { title: "A Thousand Pieces Of You", author: "Claudia Gray", price: 220, image: "http://ecx.images-amazon.com/images/I/91zZB9SzsIL.jpg" },

  { title: "The Last Four Things", author: "Paul Hoffman", price: 180, image: "https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" },

  { title: "Awake", author: "Jaison Black", price: 299, image: "http://4.bp.blogspot.com/-ayh32CF1HrY/UCt4sQzqBqI/AAAAAAAAAB0/iseG9EYmXp8/s1600/cover2.jpg" },

  { title:"wings of fire" ,author:"T.sutherland",price:520,image:"https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/05/21035708/51QSrQDru9L._SX342_BO1204203200_-207x300.jpg"},
  
  {title:"ping",author:"m.clast",price:120,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDvEwSVazqyqgz3wVSyt3hPx1Ea1x7AsnlQ&usqp=CAU"},
  
  {title:"is it a mermaid",author:"gourlay",price:150,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7d9yIuzGcjmHWSO4_SCjx_Pz2k4xe4qQHQ&usqp=CAU"},

  {title:"gorgeous lies",author:"martha ms phee",price:300,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GizntvK4D0FBDC7RhBW0lU541KcgI91xjw&usqp=CAU"},

  {title:"harry potter",author:"j.k rowling",price:120,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HdxW4IjNxw5W5SPt4uH8lfs-QwyAX44nnA&usqp=CAU"},

  {title:"charlotties web",author:"E.B white",price:320,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl9pq738_kqVvYIU-XOGaXKyirKuvfTDcnA&usqp=CAU"},

  {title:"court if mist fury",author:"sarah j.maas",price:122,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4UhAOF7JJHSEA6QNYBzj6PzEFcMyuAl-aQ&usqp=CAU"},

  {title:"the kite runner",author:"khaled hosseini",price:500,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGX0GYlyfn8uSrq800-047o-6pQbM_3vt5Q&usqp=CAU"},

  {title:"the good turn",author:"sharna jackson",price:390,image:"https://cdn.penguin.co.uk/dam-assets/books/9780241523599/9780241523599-jacket-large.jpg"},

  {title:"the roughest draft",author:"austin",price:125,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHQJfQOtfKKu3FurhRqhaXEsBZJhOOxoolA&usqp=CAU"},
  
  {title:"timmi in tangles",author:"shiths margin",price:220,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9VlgQ5x6XDcLOPkj-eFRijzPxc4y1_IzTg&usqp=CAU"},

  {title:"the paris daughter",author:"kristin harmel",price:680,image:"https://kristinharmel.com/wp-content/uploads/2023/05/THE-PARIS-DAUGHTER-final-cover-scaled.jpg"},

  {title:"bridgerto",author:"julia quinn",price:230,image:"https://juliaquinn.com/WP/wp-content/uploads/2022/03/JQ_Viscount_tie-in-299x450.jpg"},

  {title:"bridgertoni",author:"julia quinn",price:230,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZhI-K6WR5Tju2lXIPkKNUrCM8WjnmD3gENxYfhEHGuHnuTklhh7s-K0qZD0AhCO0E5-g&usqp=CAU"}
];

function initializeBookstore() {

  let bookContainer = document.getElementById("book-container");

  books.forEach(book => {

      let bookElement = document.createElement("div");

      bookElement.classList.add("book");

      bookElement.innerHTML = `

          <img src="${book.image}" alt="${book.title}">

          <h3>${book.title}</h3>

          <p>${book.author}</p>

          <p> ${book.price.toFixed(2)} Rs</p>

          <button onclick="addToCart('${book.title}', ${book.price})">Add to Cart</button>

      `;

      bookContainer.appendChild(bookElement);

  });

}

window.onload = function() {

  initializeBookstore();

};

 

 
