import Head from "next/head";
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
const Partener = (props) => {
  
    return (  
        <div className="mt-5">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <div className="row w-100">
    <h4 className="col-12 col-lg-3 my-2 title ms-auto"> شركاء النجاح</h4>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<div   >
    <div className="justify-content-md-center gap row">{ props.data.map((item)=>(
    <Image className="col-12 col-lg-3 border border-info p-1 rounded-circle" key={item}  loader={() => item} src={item}  unoptimized="false"  width={"250px"}
      height={"250px"}/>))}
    </div>
{/* <Carousel infiniteLoop="true"	showThumbs={false} showIndicators={false} showStatus={false} >
                  <div className="row ">
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                  </div>
                  <div className="row ">
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                  </div>
 </Carousel> */}
 </div>
</div>
    );
}
 
export default Partener;