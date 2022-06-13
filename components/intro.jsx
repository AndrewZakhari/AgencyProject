import style from '../styles/intro.module.css' 

import Circle from './Circle'

 const Intro = () => {
     return ( 
         <div className={style.container}>
             <Circle backgroundColor="#b0ff49"  top="-50vh" left="-50vh"/>
             <Circle backgroundColor="#b0ff49"  top="-40vh"/>
            <div className={style.card}>
                <h1 className={style.title}>
                   <span className={style.brand}>RELEVANT </span>DIGITAL PRODUCT AGENCY 
                </h1>
                <p className={style.desc}>
                Create Ads that reach the edges of the world 
                </p>
                <button className={style.button}>
                    DISCOVER
                </button>
            </div>
         </div> 
     )
 }


 export default Intro