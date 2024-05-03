import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="m-8">
            Error Page <br />
            <button className="btn bg-[#23BE0A] text-black"><Link to='/'>Back TO Home Page</Link></button>
        </div>
    );
};

export default ErrorPage;