import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mx-3 md:mx-0">
            <div className="hero  bg-base-200 rounded-2xl py-5">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img className="w-4/12 mb-9 md:mb-0" src="https://i.ibb.co/yStzj29/pngwing-1.png" />
                    <div className="max-w-full md:max-w-2xl space-y-9">
                        <h1 className="text-3xl md:text-5xl font-bold md:w-2/3 w-full leading-tight">Books to freshen up your bookshelf</h1>
                        <Link to='/listedbook'>
                        <button className="btn mt-8 bg-[#23BE0A] text-white">View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;