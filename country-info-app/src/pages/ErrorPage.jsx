import { useRouteError } from "react-router-dom"

function ErrorPage() {
    
    const error = useRouteError();

    return(
        <div>
            <h1>Oops! An error occurred</h1>
            {error && <p>{error.data}</p>}
        </div>
    );
}

export default ErrorPage