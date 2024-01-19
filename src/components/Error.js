import { useRouteError } from "react-router-dom";


const Error = () =>{
    const err = useRouteError();
    return(
        <div className="error">

        <h1>Oops !!!</h1>
        <h1>Something went wrong ......</h1>
        <h1>{err.status}:{err.statusText}</h1>
        <h2>Try to change url ...</h2>
        
        </div>

    )
}
export default Error;