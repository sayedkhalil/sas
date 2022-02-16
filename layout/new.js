import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useAppContext } from "../AppContext";
import { useRouter } from "next/router";

const NEw = (props) => {
    let storage=[]
    const mob =props.data? props.data:[]
    const mob1= mob.length>4?mob.slice(0,4):mob
    const desk =props.data? props.data:[]
    const desk1= desk.length>4?desk.slice(0,4):desk
    const [appState, setAppState] = useAppContext();
    const router = useRouter()
    const handelrouter=(e,path)=>{
        e.preventDefault() 
        router.push(`product/${path}`)
    }
    const oncart =async(x,y,z)=> {
    const myArrayFromLocalStorage = localStorage.getItem('mycart')
    if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
    var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
         myArray.push({"code":x,"title":y,"img":z})
        localStorage.setItem("mycart", JSON.stringify(myArray))
        setAppState(myArray)
        }  
     useEffect(()=>{
     const myArrayFromLocalStorage = localStorage.getItem('mycart')
    if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
    var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
    setAppState(myArray)    
    return myArrayFromLocalStorage
    },[])
 
  
    return (  
        <div className="mt-5">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<div className="row w-100">
    <h4 className="col-12 col-lg-3 title ms-auto"> أحدث العروض</h4>

</div>
<div  >
    <div className="row  d-block d-lg-none">
        {
        mob1.map((item)=>(
            <div className="col-12 col-lg-3 p-4 " key={item.code} >
             <Image className="col-12 col-lg-3 border border-info p-1 pointer1" onClick={(e)=>handelrouter(e,item.code)}  loader={() => `${item.imges}?w=500px`} src={item.imges} unoptimized="false"    width={"500px"}
      height={"400px"}/>
            <h6 className=" ms-auto m-3 title-img"> {item.title} </h6>
            <button type="button" className="btn btn-success" onClick={()=>oncart(item.code,item.title,item.imges)} >إضافة لطلب التسعير</button>
        </div>
        ))
    }

    </div>
    <div className="d-none d-lg-block d-xl-block">
    <div className="row ">
        {
       desk1.map((item)=>(
            <div className="col-3" key={item.code} >
             <Image className="border border-info p-1 pointer1" onClick={(e)=>handelrouter(e,item.code)} unoptimized="false"  loader={() => item.imges} src={item.imges}   width={"500px"}
      height={"400px"}/>
            <h6 className=" ms-auto m-3 title-img"> {item.title} </h6>
            <button type="button" className="btn btn-success" onClick={()=>oncart(item.code,item.title,item.imges)} >إضافة لطلب التسعير</button>
        </div>
        ))
    }
    </div>
    </div>

 </div>
</div>
    );
}
 
export default NEw;