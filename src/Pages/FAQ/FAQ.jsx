import { useEffect, useState } from "react";
import FaqDiv from "../../Component/FaqDiv";


const FAQ = () => {
    const [faqs, setFaqs] = useState([])
    useEffect(() => {
        fetch('faqdata.json')
            .then(res => res.json())
            .then(data => setFaqs(data))
    }, [])
    return (
        <div>
            <div className="  ">
                <div className=" mx-6 md:mx-0 flex flex-col md:flex-row-reverse justify-around items-center py-20">
                    <div className="w-full md:w-2/5 mb-8 md:mb-0">
                        <img src="
                                https://i.ibb.co/sHbdknB/undraw-Questions-re-1fy7.png" className=" w-full
                        md:max-w-lg rounded-lg" />
                    </div>
                    <div className="flex-1 space-y-5 md:mr-20 ">
                        {
                            faqs.map((faq, i) => <FaqDiv key={i} faq={faq}></FaqDiv>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;