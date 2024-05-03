import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setbooks] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    return (
        <div className="mx-5 md:mx-0 mb-10">
            <h1 className="text-4xl font-bold text-center py-8">Books : {books.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    books.map(book=> <Book key='bookId' book={book}></Book>)
                }
            </div>
        </div>

    );
};

export default Books;