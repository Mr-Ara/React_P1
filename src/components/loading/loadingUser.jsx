import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingUser = () => {
    return Array(6).fill({}).map((use,index)=>{
    
        return(
            
            <div className="col-4 p-5 text-center" key={index} >
                <Skeleton className= 'mb-4' circle={true} height={100} width={100}/>
                <Skeleton className= 'mb-2'  height={30} count={2}/>
            </div>
        )
    })
}
 
export default LoadingUser;