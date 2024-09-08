//  Dom   => Document object model
/**
 * Control page html , change
 * select Element in html
 * 
 * // get  => get element
 * 
 */
// Select Element
/**
 * id
 * class name
 * tag name
 * querySelector
 * querySelectorAll
 */


// var pag=document.getElementById("pg")  // single element 
// var pag2=document.getElementsByClassName("p1") // htmlcollection(array)=> index  =>  pag2[0]
// var pag3=document.getElementsByTagName("p") htmlcollection(array)=> index  =>  pag2[0]
// console.log(pag3[0]);


// var pq=document.querySelector('p')  // tagName
// var pq=document.querySelector('#pg')// id
// var pq=document.querySelector('.p1')// class
// var pq=document.querySelectorAll('p')[0]
// // console.log(pq);

// var t=document.title
// console.log(t);

// var img=document.images // collection => []
//     // var link=document.links
//     // console.log(link[0]);
//     img[0].removeAttribute('alt')
//     console.log(img[0]);
    
    // console.log(img[0].getAttribute('alt'));

// var body=document.body
// console.log(body);

// var form =document.forms
// console.log(form[0]);



/*************  get , set */

// var imgs=document.images
// var img=imgs[0]
// console.log(img.src); // get attribute


// => set attribute
// img.src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600"


// get attribute


// setAttribute
// img.setAttribute('alt','canaba')
// var alt=img.getAttribute('alt')
// console.log(alt);



// style
// var pag=document.getElementById("pg")  
// pag.style.color="red"

// pag.style.cssText=`
// color:blue;
// text-align:center;
// margin-top:5px
// `


// classes

// add ,remove

// var pag=document.getElementById("pg")  
// pag.classList.add('pgg')

// pag.classList.remove('pgg')

// toggle => exist =>remove ,not exist =>add
// pag.classList.toggle('pgg')


/** innerhtml , innertext */
// let contain=container.innerHtML
// console.log(container.innerHtML);
//  var cont= document.getElementById('container')
// console.log(cont.innerHTML);
// console.log(cont.innerText);



/**********  Create element in html */





function createCard(imgSrc,title="test",description="test",productPrice="10$")
{
    var contain=document.getElementById('container')
    // card 
    var card=document.createElement('div')
    
    card.classList.add('con')
    // img
    var img=document.createElement('img')
    img.setAttribute('src',`${imgSrc}`)
    img.classList.add('mg')
    img.alt="chair"
    img.title="chair"
    
    // title of product
    var title=document.createElement('h5')
    title.innerText="Chair"
    title.style.cssText=`
    color:#3f974b;
    `
    
    
    // descrition 
    var description=document.createElement('p')
    description.innerText="Chair  sdjhalsjdhshfkhgsdahf sadhsakhdfghefg"
    
    description.style.cssText=`
    color:gray;
    font-size:10px;
    font-family: sans-serif;
    margin:auto
    `
    
    // price
    var price=document.createElement('p')
    price.innerText=`${productPrice}`
    price.style.cssText=`color:#3f974b;
    font-size:10px
    `
    // price.textContent=`${productPrice}`

    contain.appendChild(card)
    card.append(img,title,description,price)
}


// createCard("https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600","chair","","20$")
// createCard("https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600","chair","","25$")
// createCard("https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600","chair","","50$")


// var product={
//     "title":"product1",
//     "price":'15$',

// }
// console.log(products["title"]);

var products=[
    {
        "title":"product1",
        "price":'15$',
    
    },
    {
        "title":"product2",
        "price":'15$',
    
    },{
        "title":"product3",
        "price":'15$',
    
    }
]
for (let index = 0; index < products.length; index++) {
    console.log(products[index]["title"]);
    
    
}

























