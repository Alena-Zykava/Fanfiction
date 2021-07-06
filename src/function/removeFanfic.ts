
import { deleteFanfic } from '../utilities/service';


export default function removeFanfic(id: number) {
    
   deleteFanfic( id ).then((res) => {
        
    }).catch((e) => console.log(e));
}