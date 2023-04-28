import image1 from "../assets/images/items/image1.jpeg";
import image2 from "../assets/images/items/image2.jpeg";
import image3 from "../assets/images/items/image3.jpeg";
import image4 from "../assets/images/items/image4.jpeg";
import image5 from "../assets/images/items/image5.jpeg";
import image6 from "../assets/images/items/image6.jpeg";
// import image7 from "../assets/images/items/image7.jpeg";
import image8 from "../assets/images/items/image8.jpeg";
import image9 from "../assets/images/items/image9.jpeg";
import image10 from "../assets/images/items/image10.jpeg";
import image11 from "../assets/images/items/image11.jpeg";
import image12 from "../assets/images/items/image12.jpeg";
import image13 from "../assets/images/items/image13.jpeg";
import image14 from "../assets/images/items/image14.jpeg";
import image15 from "../assets/images/items/image15.jpeg";
import image16 from "../assets/images/items/image16.jpeg";
import image17 from "../assets/images/items/image17.jpeg";
import image18 from "../assets/images/items/image18.jpeg";
import image19 from "../assets/images/items/image19.jpeg";
import image20 from "../assets/images/items/image20.jpeg";
import image21 from "../assets/images/items/image21.jpeg";
import image22 from "../assets/images/items/image22.jpeg";
import image23 from "../assets/images/items/image23.jpeg";
import image24 from "../assets/images/items/image24.jpeg";
import image25 from "../assets/images/items/image25.jpeg";
import image26 from "../assets/images/items/image26.jpeg";
import image27 from "../assets/images/items/image27.jpeg";
import image28 from "../assets/images/items/image28.jpeg";
import image29 from "../assets/images/items/image29.jpeg";
import image30 from "../assets/images/items/image30.jpeg";
import image31 from "../assets/images/items/image31.jpeg";
import image32 from "../assets/images/items/image32.jpeg";
import image33 from "../assets/images/items/image33.jpeg";
import image34 from "../assets/images/items/image34.jpeg";
import image35 from "../assets/images/items/image35.jpeg";
import image36 from "../assets/images/items/image36.jpeg";
import image37 from "../assets/images/items/image37.jpeg";
import image38 from "../assets/images/items/image38.jpeg";
import image39 from "../assets/images/items/image39.jpeg";
import { Rating } from "@mui/material";


  


export const AllItems = [

  {
    id:1,
    image: image4,
    description: "Puma Serbia Soccer Jersey",
    price: 25.99,
    rating: <Rating name="half-rating-read" value={4.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 142,
    category: "Sport"
  },
 
  {
    id:2,
    image: image2,
    description: "Scented St. Sava Soy Candle",
    price: 25.99,
    rating: <Rating name="half-rating-read" value={3.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 9,
    category: "Souvenirs",
    type: "recommended"

  },
  {
    id:3,
    image: image19,
    description: "Baby/Toddler Bib with Serbian Cyrillic Alphabet ",
    price: 25.99,
    rating: <Rating name="half-rating" value={4.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 88,
    category: "Kids"
  },
  
  {
    id:4,
    image: image1,
    description: "Vintage Pocket Watch",
    price: 99.49,
    rating: <Rating name="half-rating-read" value={4.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 25,
    category: "Souvenirs",
    type: "recommended"
  },
 
  {
    id:5,
    image: image5,
    description: "Serbia National Soccer Team Drawstring Bag",
    price: 19.99,
    rating: <Rating name="half-rating-red" value={4.0} precision={0.1} size="small" readOnly/>,
    reviewsNumber: 19,
    category: "Sport"
  },
  {
    id:6,
    image: image6,
    description: "Serbia World Cup Qatar T-Shirt ",
    price: 22.99,
    rating: <Rating name="half-rating-read" value={5.0} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 155,
    category: "Sport"
  },
  {
    id:7,
    image: image8,
    description: "Serbia Flag Cap(red)",
    price: 15.99,
    rating: <Rating name="half-rating-read" value={4.0} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 5,
    category: "Souvenirs",
    type: "popular"
  },
  {
    id:8,
    image: image9,
    description: "Serbia Flag Colors",
    price: 75.49,
    rating: <Rating name="half-rating-read" value={3} precision={0.5} size="small" readOnly/>,
    reviewsNumber: 75,
    category: "Souvenirs",
    type: "popular"
  },
  {
    id:9,
    image: image10,
    description: "Smoki/Peanut Flips",
    price: 10.99,
    rating: <Rating name="no-value-read" value={5} precision={0.5} size="small" readOnly/>,
    reviewsNumber: "464",
    category: "Food",
    type: "popular"
  },
  {
    id:10,
    image: image11,
    description: "Funny Serbia T-shirt",
    price: 30.99,
    rating: <Rating name="half-rating" value={4} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 7,
    category: "Souvenirs",
    type: "popular"
  },
  {
    id:11,
    image: image12,
    description: "Serbia Eagle Necklace",
    price: 45.49,
    rating: <Rating name="half-rating" value={4.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 3,
    category: "Souvenirs",
    type: "popular"
  },
  {
    id:12,
    image: image13,
    description: "Granny's Secret Ajvar",
    price: 20.99,
    rating: <Rating name="half-rating" value={4.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 211,
    category: "Food",
    type: "popular"
  },
  {
    id:13,
    image: image14,
    description: "Slides with Serbian flag ",
    price: 25.49,
    rating: <Rating name="half-rating" value={null} precision={0.2} size="small" readOnly/>,
    reviewsNumber: "No ratings yet",
    category: "Souvenirs",
    type: "popular"
  },
  {
    id:14,
    image: image15,
    description: "Opanci- traditional shoes",
    price: 99.99,
    rating: <Rating name="half-rating" value={3.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 9,
    category: "Souvenirs",
    type: "popular"
  },
  {
    id:15,
    image: image16,
    description: "Serbia Prayer Rope(black)",
    price: 25.99,
    rating: <Rating name="half-rating" value={4} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 2,
    category: "Souvenirs"
  },
  {
    id:16,
    image: image17,
    description: "Lane Ground Biscuit ",
    price: 5.99,
    rating: <Rating name="half-rating" value={5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 343,
    category: "Food"
  },
  {
    id:17,
    image: image18,
    description: "Boy and Girl in Traditional Costumes Picture",
    price: 39.99,
    rating: <Rating name="half-rating" value={4} precision={0.5} size="small"/>,
    reviewsNumber: 21,
    category: "Souvenirs"
  },
  {
    id:18,
    image: image3,
    description: "Two Eagles Serbia Towel",
    price: 30.19,
    rating: <Rating name="no-value-read" value={null} size="small" readOnly />,
    reviewsNumber: "No ratings yet",
    category: "Souvenirs",
    type: "recommended"
  },

  {
    id:19,
    image: image20,
    description: "Chips Way Gricko",
    price: 1.99,
    rating: <Rating name="half-rating" value={4.0} precision={0.5} size="small" readOnly/>,
    reviewsNumber: 16,
    category: "Food"
  },
  {
    id:20,
    image: image21,
    description: "Lozovaca rakija(serbian brandy)",
    price: 27.99,
    rating: <Rating name="half-rating" value={4.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 59,
    category: "Alcohol"
  },

  {
    id:21,
    image: image22,
    description: "Girls Dress with Custom Serbian Name Embroidered",
    price: 52.99,
    rating: <Rating name="half-rating" value={4.0} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 5,
    category: "Kids"
  },
  {
    id:22,
    image: image23,
    description: "Serbia Winter Hat(grey)",
    price: 25.99,
    rating: <Rating name="half-rating" value={5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 31,
    category: "Souvenirs"
  },
  {
    id:23,
    image: image24,
    description: "Funny Serbia Tumbler 16 oz",
    price: 25.99,
    rating: <Rating name="half-rating" value={1} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 1,
    category: "Souvenirs"
  },
  {
    id:24,
    image: image25,
    description: "Serbia Gold Sequins Pillow",
    price: 45.09,
    rating: <Rating name="half-rating" value={3.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 19,
    category: "Kids"
  },
  {
    id:25,
    image: image26,
    description: "Serbia Wodden Cutting Board",
    price: 65.99,
    rating: <Rating name="half-rating" value={4.5} precision={0.5} size="small" readOnly/>,
    reviewsNumber: 23,
    category: "Souvenirs"
  },
  {
    id:26,
    image: image27,
    description: "Set of 5 Čokanjs(shot glasses for serbian brandy/rakija)",
    price: 25.99,
    rating: <Rating name="half-rating" value={5.0} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 94,
    category: "Alcohol"
  },
  {
    id:27,
    image: image28,
    description: "Serbian Baby Girl Folk Costume",
    price: 89.99,
    rating: <Rating name="half-rating" value={4.5} precision={0.5} size="small" readOnly/>,
    reviewsNumber: 17,
    category: "Kids"
  },
  {
    id:28,
    image: image29,
    description: "Stark Bananica",
    price: 0.49,
    rating: <Rating name="half-rating" value={5.0} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 332,
    category: "Food"
  },

  {
    id:29,
    image: image30,
    description: "Book 'Prepiska sa rodbinom'(Nikola Tesla)",
    price: 14.99,
    rating: <Rating name="half-rating" value={4.2} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 9,
    category: "Souvenirs"
  },
  {
    id:30,
    image: image31,
    description: "Teddy Bear with Custom Serbian Name",
    price: 35.99,
    rating: <Rating name="half-rating" value={4.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 28,
    category: "Kids"
  },
  {
    id:31,
    image: image32,
    description: "Burgundy Folk Apron",
    price: 55.99,
    rating: <Rating name="half-rating" value={4.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 19,
    category: "Souvenirs"
  },
  {
    id:32,
    image: image33,
    description: "Wooden Flask Saint George Light Wood 16 oz",
    price: 65.29,
    rating: <Rating name="half-rating" value={4.5} precision={0.2} size="small" readOnly/>,
    reviewsNumber: 13,
    category: "Souvenirs"
  },

  {
    id:33,
    image: image34,
    description: "Medovaca(honey flavored serbian brandy-rakija)",
    price: 25.99,
    rating: <Rating name="half-rating" value={4.6} precision={0.2} size="small"/>,
    reviewsNumber: 54,
    category: "Alcohol"
  },
  {
    id:34,
    image: image35,
    description: "FC Partizan Baby/Toddler Bib",
    price: 10.19,
    rating: <Rating name="half-rating" value={4.1} precision={0.5} size="small"/>,
    reviewsNumber: 9,
    category: "Kids"
  },
  {
    id:35,
    image: image36,
    description: "Rubinov vinjak - serbian brandy",
    price: 19.99,
    rating: <Rating name="half-rating" value={4.2} precision={0.5} size="small"/>,
    reviewsNumber: 77,
    category: "Alcohol"
  },
  {
    id:36,
    image: image37,
    description: "Sljivovica - plum serbian brandy(rakija)",
    price: 29.49,
    rating: <Rating name="half-rating" value={4.7} precision={0.2} size="small"/>,
    reviewsNumber: 291,
    category: "Alcohol"
  },
  {
    id:37,
    image: image38,
    description: "Cotton Sweatuit Serbia Navy Blue",
    price: 72.49,
    rating: <Rating name="half-rating" value={4.5} precision={0.2} size="small"/>,
    reviewsNumber: "No reviews yet",
    category: "Sport"
  },
  {
    id:38,
    image: image39,
    description: "FC Red Star Baby Pajamas Long Sleeve",
    price: 12.49,
    rating: <Rating name="half-rating" value={null} precision={0.2} size="small"/>,
    reviewsNumber: "No reviews yet",
    category: "Kids"
  },
];
