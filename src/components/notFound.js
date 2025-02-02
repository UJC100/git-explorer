import { Link } from "react-router-dom"

const NotFound = () => {
    return <div>
        <h1>Page Not Found</h1>
        <Link  to={"/"}>Go back to home page</Link>
    </div>
}

export default NotFound