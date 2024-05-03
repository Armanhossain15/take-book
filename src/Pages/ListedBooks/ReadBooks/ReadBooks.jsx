import PropTypes, {  } from 'prop-types';
import BookCard from "../../../Component/BookCard/BookCard";


const ReadBooks = ({ showBooks }) => {


    return (
        <div className="space-y-10 mt-8">
            {
                showBooks.map((book, i) => <BookCard key={i} book={book}></BookCard>)
            }
        </div>
    );
};
ReadBooks.propTypes = {
    showBooks: PropTypes.array
}
export default ReadBooks;