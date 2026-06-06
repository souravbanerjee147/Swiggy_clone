import { useRouteError } from 'react-router-dom'; 

function ErrorPage(){

    const error = useRouteError();
    console.log(error);

    return(
        <div>
            <h1>OOPS! Something went wrong.........
            </h1>
            <h1>{error.data}</h1>
            <h2>{error.status} : {error.statusText}</h2>
        </div>
    )
}

export default ErrorPage;