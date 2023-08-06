//get buttons
const buttons = document.querySelector(".buttons") ;
const menuArea = document.querySelector(".menuArea")

// all items 
const allItemsFoods = ["All" ,"Breakfast","Lunch","Shakes","Dinner"] ;

const myObjectMenu = [
    {
      id  :1,
      category : "breakfast",
        image : "./assets/breakfast.jpg"  ,
        itemName : "paratha anda",
        price : "150" ,
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magni." ,

      id  :2,
      category : "lunch",
        image : "./all gradiens.jpg"  ,
        itemName : "All graidents",
        price : "1500" ,
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magni." ,

      id  :3,
      category : "dinner",
        image : "./Mcdonald deal.webp"  ,
        itemName : "paratha anda",
        price : "15" ,
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magni." ,

      // id  :4,
      // category : "starter",
      //   image : "./assets/breakfast.jpg"  ,
      //   itemName : "paratha anda",
      //   price : "15" ,
      //   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magni."
    }
]



// empty array
let emptyArray =[] ;

//run foreach  function in our allitemsfoods
allItemsFoods.forEach((btns) => {
let stringCategory =  `<button> ${btns}</button>`

// console.log(stringCategory)
emptyArray.push(stringCategory)
// console.log(emptyArray)
})
buttons.innerHTML = emptyArray.join("")
// console.log(buttons)



//object

//Second Portion Empty Array
let secondEmptyArray = [] ;

// My Object  Menu Pa map Chalay ga 

myObjectMenu.forEach((menu)=>{
  let stringMenu = `<img src="${menu.image}" alt="" ></img>`
  
  // secondEmptyArray.push(stringMenu)
  // console.log(secondEmptyArray)
}) ;