import {useParams} from "react-router-dom" ; 
import {useState , useEffect} from "react"
import axios from "axios";
import SingleCompoDesign from "./SingleCompoDesign" ;
// import ProductSkeleton from "./ProductSkeleton" ;

function SingleComponents(){
    const {id} = useParams() 
    const [num , changeNum] = useState(+(id))
    const [singleData , updateSingleData] = useState({})
    

    // console.log(id)   

    const GetSinglePageData = (num) =>{
        axios.get(`https://tan-real-buffalo.cyclic.app/Fish&SeaFood/${num}`)
        .then((res)=> updateSingleData(res.data))
        .catch((err)=> console.log(err))
    }
   
        
       
        
    
    const handleChangeAdd = ()=>{
        // num = Number(num)
        changeNum(num+1)
   }

   const handleChangeRemove= ()=>{
    changeNum(num-1)
   }

   useEffect(()=>{
    GetSinglePageData(num)
},[num])
   
//    console.log(loadingSingle)
  
  


// console.log(singleData)
   

    return (
        <div>
            {/* <img src={singleData.imgUrl} alt="name" />
            <button onClick={handle}> click {num}</button> */} 
            <SingleCompoDesign DisableRight={num} item={singleData} handleChangeAdd={handleChangeAdd} handleChangeRemove={handleChangeRemove} src={singleData.imgUrl} name={singleData.name} price={singleData.price} type={singleData.type} bone={singleData.bone} size={singleData.size} description={singleData.description}    />
            
        </div>
    )
}

export {SingleComponents}