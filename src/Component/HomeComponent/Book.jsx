
import { AiOutlineStar } from "react-icons/ai";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId, bookName, author, image, rating, tags } = book
    return (
        <div className="card bg-base-100 border-2 py-4">
            <Link to={`/book/${bookId}`}>
                <div className="bg-gray-100 mx-5 rounded-2xl py-5">
                    <figure><img src={image} alt="" /></figure>
                </div>
            </Link>
            <div className="card-body">
                <div className="flex gap-4 mb-4">
                    {
                        tags.map((tag, i) => <div key={i} className="badge badge-outline text-[#23BE0A]">{tag}</div>)
                    }
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p>By : {author}</p>
                <div className="border-2 border-dashed"></div>
                <div className="flex justify-between items-center mt-5">
                    <div>Fiction</div>
                    <div><p className="flex items-center gap-2">{rating} <AiOutlineStar /></p></div>
                </div>

            </div>
        </div>
    );
};
Book.propTypes = {
    book: PropTypes.object
}
export default Book;