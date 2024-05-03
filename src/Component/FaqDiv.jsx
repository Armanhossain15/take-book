
import PropTypes from 'prop-types';

const FaqDiv = ({faq}) => {
    const {question, answer} =faq
    return (
        <div>
            <div className="collapse collapse-plus border-[1px] border-gray-400 rounded-none">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    {question}
                </div>
                <div className="collapse-content">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};
FaqDiv.propTypes = {
    faq: PropTypes.object
};



export default FaqDiv;