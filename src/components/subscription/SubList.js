import React,{useEffect, useState} from 'react'
import Sub from "./Sub"

import "./SubList.css"

const SubList = () => {

  const [basic, setBasic] = useState(9.99)
  const [pro, setPro] = useState(18.99)
  const [master, setMaster] = useState(29.99)
  const [yearly, setYearly] = useState(false)


  const handleClick = () =>{
    setYearly(!yearly)
  };

  // calculate the percentage
  const calculate = (num,per) =>{
    return(
      (num * 12) / 100 ) * per;
  }


  useEffect(()=>{
    if(yearly){
      setBasic(calculate(basic, 70).toFixed(0))
      setPro(calculate(basic, 70).toFixed(0))
      setMaster(calculate(basic, 70).toFixed(0))
    }else{
      setBasic(9.99)
      setPro(18.99)
      setMaster(29.99)
    }

  },[yearly])





  return (
    <section className='main'>
      <div className='container --center-all'>

        <div className="title">

          <h1>Pricing</h1>
          
          <div className="--line"></div>

          <div className='--flex-center --my2'>
            <p>Monthly</p>
            <div className='--mx2'>
              <span className={yearly ? "toggle-btn toggled" : "toggle-btn"} onClick={handleClick}>
                <div className={yearly ? "ball move" : "ball"}></div>
              </span>
            </div>
            <p>yearly</p>
          </div>

        </div>


        <div className="sub-plans">
          <Sub price={basic} plan = {"Basic"} theme ={"theme1"}
           isBasic={true}  yearly={yearly} onBuy={()=> alert(basic)} />
          <Sub price={pro} plan = {"Pro"} theme ={"theme2"} 
          isPro={true} yearly={yearly} onBuy={()=> alert(pro)}/>
          <Sub price= {master}  plan = {"Master"} 
          theme ={"theme3"} isMaster={true} yearly={yearly} onBuy={()=> alert(master)}/>
        </div>


      
      </div>

    </section>
  )
}

export default SubList
