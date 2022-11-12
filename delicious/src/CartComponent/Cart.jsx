import { 
  Box,
  Button,
  Center,
  CloseButton,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton, 
  DrawerContent, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerOverlay, 
  Heading, 
  HStack, 
  Image, 
  SimpleGrid, 
  Text, 
  useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import { useState1 } from "./Hooks"
import { OrderBox } from "./OrderBox";
import metopiaImg from "./Metopia3.png"
import { Calc } from "./Calc";
import { useEffect } from "react";
import {InfoIcon} from '@chakra-ui/icons'
import {useDispatch,useSelector} from 'react-redux'
import { get_data_request, get_data_success } from "./Redux/action";

export const Cart=()=>{
 
// const data=
// [
//     {
//             "id": 41 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4d08a6f1-998d-66c8-16e7-fb9efec195ed/original/Afghani-Murgh-Seekh-Kebab(1).jpg?format=webp" , 
//             "name" :"Afghani Murgh Seekh Kebab" ,  
//             "weight" :"300gms" , 
//             "price" :"375" ,
//             "type" :"Kebab" ,
//             "bone" :"withoutBone" ,
//             "size" :"medium" ,
//             "suited" :"grill" ,
//             "des" :"Flavourful minced chiken crafted by our Nakhrebaaz" ,
//             "description" : "Enjoy Afghani flavours at home with our ready-to-cook Afghani Murgh Seekh Kebabs! The Nakhrebaaz experts of Licious present minced boneless chicken with a blend of spices and herbs, shaped into delicious, juicy kebabs."
//         },

//         {
//             "id": 42 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6422e17b-9af5-e6c6-35b1-6ef4ae0692bc/original/Chicken-Malai-Tikka-Tag.jpg?format=webp" , 
//             "name" :"Chikan Malai Tikka" ,  
//             "weight" :"350gms" , 
//             "price" :"299" ,
//             "type" :"Kebab" ,
//             "bone" :"withoutBone" ,
//             "size" :"medium" ,
//             "suited" :"panfry" ,
//             "des" :"creamy boneless chicken tikka by our Nakhrebaaz" ,
//             "description" : "Licious Chicken Malai Tikka is a delicious appetiser made by our dedicated team of Nakhrebaaz experts. Boneless pieces of chicken marinated in a creamy curd base with spices like cardamom & mace, and then pre-smoke in a tandoor. It isn't too spicy and is a big hit among kids."
//         },

//         {
//             "id": 43 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/715d4156-cae5-f3c5-ef78-a6e5c129ed5c/original/Lucknowi-Mutton-Galouti-Kebab-Hero-Shot-Uncooked_(1).jpg?format=webp" , 
//             "name" :"Lucknowi Mutton Galouti Kebab" ,  
//             "weight" :"500gms" , 
//             "price" :"399" ,
//             "type" :"Kebab" ,
//             "bone" :"withoutBone" ,
//             "size" :"large" ,
//             "suited" :"bake" ,
//             "des" :"Fresh Nakhare, fresh meat & fresh ingredients" ,
//             "description" : "Our Nakhrebaaz team of experts is very particular, that's why our ready-to-cook Lucknowi Mutton Galouti Kebabs are made with boneless, cut & cleaned lamb pieces that are then ground to perfection. This fine-grained mince is then mixed in with fried onions, cashew paste, Bengal gram, kewara flavouring and other spices."
//         },
        
//         {
//             "id": 44 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7a72cb59-4ca0-87b6-7fa1-d8f925f6cdbc/original/Purani-Dilli-ki-Mutton-Seekh-Kebab-.jpg?format=webp" , 
//             "name" :"Purani Dilli ki Mutton Seekh Kebab" ,  
//             "weight" :"250gms" , 
//             "price" :"375" ,
//             "type" :"Kebab" ,
//             "bone" :"withoutBone" ,
//             "size" :"small" ,
//             "suited" :"grill" ,
//             "des" :"The classic mutton seekh kebab" ,
//             "description" : "The ready-to-cook Mutton Seekh Kebabs from Licious are a blend of the finest minced meat from the best cuts of a Lamb with fresh, authentic spices. These medium-spicy kebabs are made with a host of ingredients and spices such as onion, ginger, green chilli, mint leaves and cilantro. The Kebabs are ideal for pan-frying or grilling and are ready in just 8 minutes."
//         },

//         {
//             "id": 45 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e7144ec8-d3cf-73a3-6515-4720d3bcf449/original/Hariyali-Murgh-Tikka_Tag.jpg?format=webp" , 
//             "name" :"Hydrabadi Mutton Shami Kabab" ,  
//             "weight" :"250gms" , 
//             "price" :"369" ,
//             "type" :"Kebab" ,
//             "bone" :"withoutBone" ,
//             "size" :"small" ,
//             "suited" :"bake" ,
//             "des" :"Hydrabads favourite & delicious kebab" ,
//             "description" : "Super easy to cook, the Hyderabadi Mutton Shami Kebabs offered from Licious are prepared using perfectly ground mutton and generous seasoning of herbs and spices. The concentrated amount of meat in these kebabs makes them a rich source of protein and iron. These medium-spicy kebabs are ideal for grilling or pan-frying, and can be perfect starters for any occasion."
//         },

//         {
//             "id": 46 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4b684f04-8b02-68b8-5e43-eea7f2560af4/original/500gms_(2).jpg?format=webp" , 
//             "name" :"Awadhi Chiken Biryani" ,  
//             "weight" :"500gms" , 
//             "price" :"356" ,
//             "type" :"Biryani" ,
//             "bone" :"withbone" ,
//             "size" :"large" ,
//             "suited" :"biryani" ,
//             "des" :"Fragrant, delicately flavourful & meaty" ,
//             "description" : "Delightfully fragrant and delicately flavourful, the Awadhi Biryani originated in Lucknow and slowly won the hearts of Biryani lovers across the world. Bring the flavours of this classic offering from Lucknow to your home with the Licious ready-to-cook Awadhi Chicken Biryani."
//         },

//         {
//             "id": 47 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/554185e9-185d-3c66-e059-5459e8a0741a/original/Kolkata-CB-500-cooked_(1).jpg?format=webp" , 
//             "name" :"Kolkata Chiken Biryani" ,  
//             "weight" :"500gms" , 
//             "price" :"359" ,
//             "type" :"Biryani" ,
//             "bone" :"withbone" ,
//             "size" :"large" ,
//             "suited" :"biryani" ,
//             "des" :"Fragrant, meaty, subtly spiced & meaty" ,
//             "description" : "The subtle flavours of the Kolkata biryani has won the hearts of many and this delectable offering can now be easily made at home with Licious ready-to-cook Kolkata Chicken Biryani."
//         },

//         {
//             "id": 48 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b0c9d487-f007-28e2-94a5-44498a258110/original/250gms.jpg?format=webp" , 
//             "name" :"Awadhi Mutton Biryani (Mini)" ,  
//             "weight" :"350gms" , 
//             "price" :"314" ,
//             "type" :"Biryani" ,
//             "bone" :"withbone" ,
//             "size" :"medium" ,
//             "suited" :"biryani" ,
//             "des" :"Aromatic, spicy, rich and meaty Biryani",
//             "description" : "Lucknow is known for its Nawabi specialities and no trip to this famed city is complete without its delicious Biryanis. With the Licious ready-to-cook Awadhi Mutton Biryani, you can now bring this classic home."
//         },

//         {
//             "id": 49 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b0c9d487-f007-28e2-94a5-44498a258110/original/250gms.jpg?format=webp" , 
//             "name" :"Hydrabadi Chiken Biryani(Mini)" ,  
//             "weight" :"300gms" , 
//             "price" :"189" ,
//             "type" :"Biryani" ,
//             "bone" :"withbone" ,
//             "size" :"medium" ,
//             "suited" :"biryani" ,
//             "des" :"Biryani as easy as 1,2,3 by our nakharebaaz chefs " ,
//             "description" : "1, 2, 3, biryani ready! Enjoy delicious, juicy chicken marinated in aromatic spices in this Hyderabadi classic. The Licious ready-to-cook Hyderabadi Chicken Biryani is all you need to bring the flavours of this southern city to your table."
//         },

//         {
//             "id": 50 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3245abd9-1ee3-f536-4006-d11d2e3b2261/original/Mini.jpg?format=webp" , 
//             "name" :"Hyderabadi Mutton Biryani" ,  
//             "weight" :"250gms" , 
//             "price" :"329" ,
//             "type" :"Biryani" ,
//             "bone" :"withbone" ,
//             "size" :"small" ,
//             "suited" :"biryani" ,
//             "des" :"A meaty, rich & spicy biryani" ,
//             "description" : "Aromatic, spicy & rich with juicy mutton cuts, the Hyderabadi biryani is a jewel from the Nizam's kitchen. Bring the flavours of this classic to your table with the Licious ready-to-cook Hyderabadi Mutton Biryani.            "
//         },

//         {
//             "id": 51 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e7144ec8-d3cf-73a3-6515-4720d3bcf449/original/Hariyali-Murgh-Tikka_Tag.jpg?format=webp" , 
//             "name" :"Haryali Murgh Tikka" ,  
//             "weight" :"300gms" , 
//             "price" :"269" ,
//             "type" :"Tandoor" ,
//             "bone" :"withoutBone" ,
//             "size" :"medium" ,
//             "suited" :"roast" ,
//             "des" :"Boneless chiken kabab marinated in green herbs base" ,
//             "description" : "Inspired by it's beautiful colour, you can now enjoy the flavours of Punjab with this spicy, flavourful and fresh tikka that can be cooked under 8 minutes."
//         },

//         {
//             "id": 52 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6422e17b-9af5-e6c6-35b1-6ef4ae0692bc/original/Chicken-Malai-Tikka-Tag.jpg?format=webp" , 
//             "name" :"Chikan Malai Tikka" ,  
//             "weight" :"350gms" , 
//             "price" :"299" ,
//             "type" :"Tandoor" ,
//             "bone" :"withoutBone" ,
//             "size" :"medium" ,
//             "suited" :"panfry" ,
//             "des" :"creamy boneless chicken tikka by our Nakhrebaaz" ,
//             "description" : "Licious Chicken Malai Tikka is a delicious appetiser made by our dedicated team of Nakhrebaaz experts. Boneless pieces of chicken marinated in a creamy curd base with spices like cardamom & mace, and then pre-smoke in a tandoor. It isn't too spicy and is a big hit among kids."
//         },


//         {
//             "id": 53 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/be022d48-6380-3945-b9d1-7a6e3c34a051/original/Angara-Murgh-Tikka.jpg?format=webp" , 
//             "name" :"Angara Murgh Tikka" ,  
//             "weight" :"300gms" , 
//             "price" :"269" ,
//             "type" :"Tandoor" ,
//             "bone" :"withoutBone" ,
//             "size" :"medium" ,
//             "suited" :"panfry" ,
//             "des" :"Boneless chiken marinated in a spicy curd base." ,
//             "description" : "Boneless pieces of chicken are marinated in a spicy curd base that has spices such as red kashmiri chilli powder and more. It's mildly spiced, easy to make and perfect for an evening snack, appetiser or an accompaniment for your meal."
//         },

//         {
//             "id": 54 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3cd0d9ca-ff11-d031-a5c2-bf1653579c3d/original/Tandoori-Chicken-_-Ready-in-8-Minutes.jpg?format=webp" , 
//             "name" :"Tandoori Chicken" ,  
//             "weight" :"400gms" , 
//             "price" :"249" ,
//             "type" :"Tandoor" ,
//             "bone" :"withbone" ,
//             "size" :"large" ,
//             "suited" :"grill" ,
//             "des" :"Smokey & marinated chicken curated by our Nakharebaaz" ,
//             "description" : "Loved all over India for its spicy flavour, our ready-to-cook Tandoori Chicken is pre-smoked by our Nakhrebaaz experts and can be cooked in just 8 minutes!"
//         },

//         {
//             "id": 55 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/51a18a68-acc0-f766-e8a3-10529ac374ec/original/Chicken-Tangdi-Kebab-Tag.jpg?format=webp" , 
//             "name" :"Chiken Tangdi Kebab" ,  
//             "weight" :"250gms" , 
//             "price" :"269" ,
//             "type" :"Tandoor" ,
//             "bone" :"withbone" ,
//             "size" : "small" ,
//             "suited":"grill" ,
//             "des" :"chicken drumsticks in a smoky, spicy marinate." ,
//             "description" : "Bring the flavours of the streets of Delhi home with the Chicken Tangdi Kebab that can be rustled up just 8 minutes. Chicken drumsticks are marinated in spices such as mace, fennel and cardamom."
//         },

//         {
//             "id": 56 , 
//             "imgUrl":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15ckn5pzo5x/1/prod_display_image/1634616842.1144--2021-10-1909:44:02--1818" , 
//             "name" :"Assorted Kebab Platter" ,  
//             "weight" :"500gms" , 
//             "price" :"887" ,
//             "type" :"Combo" ,
//             "bone" :"withoutBone" ,
//             "size" :"large" ,
//             "suited" : "roast" ,
//             "des" :"Tender & juicy our platter of kebabs is perfect for parties!" ,
//             "description" : "Indulge in our Nawabi-style kebabs during game days or get-togethers with friends or family. The platter consists of Afghani Murgh Seekh Kebab, Purani Dilli Mutton Seekh Kebab & Lucknowi Galouti Kebab - each ready within 8 minutes! "
//         },

//         {
//             "id": 57 , 
//             "imgUrl":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15ckn5inh87/1/prod_display_image/1622089748.3833--2021-05-2709:59:08--472" , 
//             "name" :"Assorted Tandoori Platter" ,  
//             "weight" :"500gms" , 
//             "price" :"776" ,
//             "type" :"Combo" ,
//             "bone" :"withbone" ,
//             "size" :"large" ,
//             "suited" :"grill" ,
//             "des" :"Pre-marinated tandoori treats, ready-in-8 mins!" ,
//             "description" : "The perfect set for any game-viewing party - all our smoky Tandoori treats in one platter! Celebrate your team’s win with spicy Tandoori Chicken, creamy Chicken Malai Tikka and juicy Chicken Tangdi Kebab. Each ready to eat in 8 minutes!"
//         },

//         {
//             "id": 58 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f48fba5-6c40-9f3a-b0dd-a2f7d4157a16/original/motton.jpg?format=webp" , 
//             "name" :"Mutton Biryani & Tikka Combo" ,  
//             "weight" :"450gms" , 
//             "price" :"448" ,
//             "type" :"Combo" ,
//             "bone" :"withbone" ,
//             "size" :"large" ,
//             "suited" :"biryani" ,
//             "des" :"Delicious Mutton Biryani & Tikka Combo" ,
//             "description" : "A meaty meal is always in demand, and what better than the Hyderabadi Mutton Biryani & Tikka Combo! Get the spicy goodness of the ready-to-cook Hyderabadi Mutton Biryani (Mini) Meat & Masala Mix with the delicious Chicken Tikka (Mini)."
//         },

//         {
//             "id": 59 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/467fc795-de40-e455-e8b2-2270b039dd5c/original/combo.jpg?format=webp" , 
//             "name" :"Chiken Kebab & Hydrabadi Chiken Biryani" ,  
//             "weight" :"350gms" , 
//             "price" :"398" ,
//             "type" :"Combo" ,
//             "bone" :"withbone" ,
//             "size" :"medium" ,
//             "suited" :"biryani" ,
//             "des" :"Murgh Seekh Kebab & Hydrabadi Chicken Biryani" ,
//             "description" : "What’s better than a piping hot plate of Hyderabadi Chicken Biryani? Some Afghani Murgh Seekh Kebab to go with it! Try both with our Chicken Kebab & Biryani Combo."
//         },

//         {
//             "id": 60 , 
//             "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/77ab62ad-dce2-f854-2b10-e2dc987bba6d/original/Chicken-Delight-Combo---Indian-1.jpg?format=webp" , 
//             "name" :"Chiken Delight Combo - Indian" ,  
//             "weight" :"250gms" , 
//             "price" :"397" ,
//             "type" :"Combo" ,
//             "bone" :"withoutBone" ,
//             "size" :"small" ,
//             "suited" :"bake" ,
//             "des" :"Truely desi! Tandoori Chiken & Creamy Afgani Chiken" ,
//             "description" : "Licious Creamy Afghani Chicken consists of boneless pieces of chicken marinated in a mixture of cream, cheese, cashews & an assortment of spices. While the dish is creamy and rich, it's also mildly spicy - this is typical of Afghani cuisine. Easy to cook they are ready in minutes."
//         }
// ]


    const cartData=[
      {
        "id": 59 , 
        "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/467fc795-de40-e455-e8b2-2270b039dd5c/original/combo.jpg?format=webp" , 
        "name" :"Chiken Kebab & Hydrabadi Chiken Biryani" ,  
        "weight" :"350gms" , 
        "price" :"₹398" ,
        "type" :"Combo" ,
        "bone" :"withbone" ,
        "size" :"medium" ,
        "suited" :"biryani" ,
        "des" :"Murgh Seekh Kebab & Hydrabadi Chicken Biryani" ,
        "description" : "What’s better than a piping hot plate of Hyderabadi Chicken Biryani? Some Afghani Murgh Seekh Kebab to go with it! Try both with our Chicken Kebab & Biryani Combo."
    },

    {
        "id": 60 , 
        "imgUrl":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/77ab62ad-dce2-f854-2b10-e2dc987bba6d/original/Chicken-Delight-Combo---Indian-1.jpg?format=webp" , 
        "name" :"Chiken Delight Combo - Indian" ,  
        "weight" :"250gms" , 
        "price" :"₹397" ,
        "type" :"Combo" ,
        "bone" :"withoutBone" ,
        "size" :"small" ,
        "suited" :"bake" ,
        "des" :"Truely desi! Tandoori Chiken & Creamy Afgani Chiken" ,
        "description" : "Licious Creamy Afghani Chicken consists of boneless pieces of chicken marinated in a mixture of cream, cheese, cashews & an assortment of spices. While the dish is creamy and rich, it's also mildly spicy - this is typical of Afghani cuisine. Easy to cook they are ready in minutes."
    }
    ]

      const { isOpen, onOpen, onClose } = useDisclosure();
      const [size, setSize] = useState1('');
      let [subtotal, setSubtotal] = useState1(0);
      let [total, setTotal] = useState1(0);
      let [Dc, setDc] = useState1(0);

      const data=useSelector((store)=>store.cartData)
      const dispatch=useDispatch()
      
      const fetchData=(url)=>{
        dispatch(get_data_request())
         axios.get(url).then((res)=>{
          // console.log(r)
          dispatch(get_data_success(res.data))
          console.log(res.data)
         }).catch((err)=>{
          // console.log(err)
          dispatch(get_data_success(err.message))
         })
      }

      useEffect(()=>{
        fetchData('https://tan-real-buffalo.cyclic.app/Fish&SeaFood')
      },[])
    
      const handleClick = (newSize) => {
        console.log(newSize)
        setSize(newSize)
        onOpen()
      }

    //   const calc=()=>{
    //     console.log(subtotal)
    //     subtotal=cartData.map((e)=>{
    //     setSubtotal(+subtotal+(+e.price));
    //   })
    //   console.log(subtotal)
    //   return +subtotal
    // }
    let price=0;
    // const cal=calc()
    // console.log(calc())  
    const calc=()=>{
     cartData.map((e,i)=>{
      let priceArr=(e.price.split("").map(Number))
      // console.log(price)
      priceArr.shift()
       price=priceArr.join("")
      console.log(typeof(+price),price)
      // console.log((+subtotal)+(+e.price),i,e.price,subtotal)
      return (subtotal=(+price)+(+subtotal))});
      // subtotal<399?setDc(39):setDc(0)
     }

      //  let soln=Calc(subtotal,cartData,Dc,setDc)
 
      calc();
      // subtotal=398
      console.log(typeof(subtotal),subtotal);

      // const calc2=()=>{
      // subtotal=398
      // }

      // useEffect((e)=>{
      //   if(subtotal<399){
      //     setDc(39)
      //  }
      // },[Dc,subtotal])

    //   if(subtotal<399){
    //     setDc(39)
    //  }
      // calc2
  
    
     console.log(Dc)
    // else{
    //    setDc(0)
    //  }
    // let arr='123' 
  //  arr.shift()
  //   console.log(arr)

    total=subtotal+Dc

    const showCalc=()=>{
         window.location.href='#BillDetails'
    }
    
      return (
        <>
          {/* {sizes.map((size) => ( */}
            <Button
              onClick={(size={base:"xs",sm:"xs",md:"sm",lg:"sm"}) => handleClick(size)}
              key={size}
              m={4}
              bg={'green'}
            >Cart</Button>
            {/* // ))}  */}
    
          <Drawer onClose={onClose} isOpen={isOpen} size={{base:"xs",sm:"xs",md:"sm",lg:"sm"}}>
            <DrawerOverlay />
            <DrawerContent bg='white' color={'black'}>
              <DrawerCloseButton />
              <DrawerHeader bg={'white'} color={'black'} fontSize={"2xl"}>
              Order Summary
              </DrawerHeader>
              <DrawerBody  w={'100%'} bg={'white'}>
                  <Box fontSize={{base:"10px",sm:"12px",md:"14px",lg:"16px",xl:"16px",'2xl':"16px"}}
                   h={'40px'} bg={'green'} w={'100%'} color={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  {subtotal<399?"Your cart value is less than ₹399 & delivery charge applies":"Congratulations, Your delivery charge is waived off!!!"}
                  </Box>
                  <Box mt={5} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" w={'100%'}>
                  <Box color={'grey'} h={'40px'} bg="green.50"
                   border={'1px solid green'} w={'100%'}
                   fontSize={{base:"10px",sm:"12px",md:"14px",lg:"16px",xl:"16px",'2xl':"16px"}}
                   display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  Congratulations! You've saved ₹144
                  </Box>
                  {/* <OrderBox></OrderBox>
                  <OrderBox></OrderBox> */}
                  {cartData.map((e,i)=>
                    // <Text>{e.name}</Text>
                       <OrderBox data={e} index={i} subtotal={subtotal} setSubtotal={setSubtotal} total={total} setTotal={setTotal} Dc={Dc} setDc={setDc} />
                  )}
                  
                  </Box>
                  <Text color={"black"} mt={3} mb={3}>Stop paying delivery charges. Join Meatopia today!</Text>
                  <Box borderRadius={7} bg="#ff914d" pr={5} pl={5} display={'flex'} 
                  justifyContent={'space-between'} alignItems={'center'} 
                  border={'1px solid red'} h={{base:"50px",sm:"50px",md:"50px",lg:"60px",xl:"60px",'2xl':"60px"}}>
                    <Image src={metopiaImg} h={'100%'}></Image>
                    <Text fontWeight={'bold'} color={'red'} _hover={{cursor:'pointer'}}>JOIN NOW </Text>
                  </Box>
                    {/* <-----------------------------Sample products-----------------------> */}
                   
                   <Text mt='22px' mb='11px' fontWeight='semibold' fontSize='18px'>You May Want To Try</Text>
                   {/* <Box w='100%'> */}
                   <SimpleGrid columns={2} w='100%' border={'1px solid red'} spacing='5px'>
                        {data.map((e)=>{
                        let priceArr=(e.price.split("").map(Number))
                        priceArr.shift()
                        let price=priceArr.join("");
                        console.log(e.price,price)
                        return (
                          <Box border={'1px solid red'} position='relative' h='25vh'>
                              <Image w='100%' h='77px' src={e.imgUrl}></Image>
                              <Text fontSize={{base:"9px",sm:"10px",md:"11px",lg:"12px"}}>{e.name}</Text>
                              <HStack w='100%'>
                                <Text fontSize={"10px"} color='gray'>{e.weight}</Text>
                                {/* <Divider orientation="verticle" color='red'></Divider> */}
                                <Text fontSize={"10px"} color='gray'>₹`{e.price}`</Text>
                                <Text fontSize={"10px"} color='#ccc' as='del'>`₹{+price+(+price*0.1)}`</Text>
                              </HStack>
                              <Button fontSize={"12px"} border={'1px solid red'} color='red' h='15%' mt='5px' position='absolute' bottom='0px'>ADD</Button>
                          </Box>)}
                        )}
                   </SimpleGrid>
                   {/* </Box> */}
                  
                  {/* /*<-------------------------Bill Details------------------------------>/* */}
                  <Box className="Bill" id='BillDetails' h='166px' border='3px dashed #ccc' p='3%' mt='33px'>
                  <Text fontWeight='semibold' fontSize='20px'>Bill Details</Text>
                  <HStack justify='space-between' mb='3px'>
                    <Text>Subtotal</Text>
                    <Text>{subtotal}</Text>
                  </HStack>
                  <HStack justify='space-between' mb='3px'>
                    <Text>Delivery Charge</Text>
                    <Text>{Dc}</Text>
                  </HStack>
                  <HStack justify='space-between' mb='3px'>
                    <Text>Discount</Text>
                    <Text>0</Text>
                  </HStack>
                  <hr color="grey"></hr>
                  <HStack justify='space-between'>
                    <Text  fontWeight='bold'>Total</Text>
                    <Text  fontWeight='bold' color='red'> ₹{total}</Text>
                  </HStack>
                  </Box>
                  
              </DrawerBody>
              <DrawerFooter boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" 
                position='sticky' margin='auto' display='flex' 
                flexDirection='column' justifyContent='space-between' 
                mb={2} h="125px" bg={'white'} w={'96%'} borderRadius='10px'>
                <HStack  justify='space-between' w='100%'>
                <Text fontWeight='semibold' fontSize='20px'>Shipping address</Text>
                <Text color='red' _hover={{cursor:'pointer'}}>Add Address</Text>
                </HStack>
                <HStack justify='space-between' h='55%' w={{base:"120%",sm:"115%",md:"110%",lg:"111%"}} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                    <Center>
                      <Text ml='15px' fontWeight='bold'>Total : ₹{total}</Text><a href="#BillDetails"><InfoIcon onClick={showCalc()} color='red' mt='-3px' _hover={{cursor:"pointer"}}></InfoIcon></a>
                    </Center>
                      <Button bg='gray.400' _hover={{bg:'gray.400'}} w='50%' h='100%' 
                      fontSize={{base:"12px",sm:"13px",md:"16px",lg:"18px"}}>Proceed to checkout</Button>
                </HStack>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )
    }
// }