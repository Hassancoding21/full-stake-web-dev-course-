

import PropsCompt from './3-PropsCompt'

 const PropsParent = (Props) => {

   let home = "MC"
   let dg = "bs IT"


  return (

    <div>
           <PropsCompt myname1 = "mughal" degree1 = "IT"/>
              <PropsCompt myname2 = "mirza" degree2 = {dg}/>
              <PropsCompt myname3 = "hasan" degree3 = "BSSSSSS"/>
              <PropsCompt work = "full stake " place = "pakistan"/>
      

    </div>
  )
}
export default PropsParent