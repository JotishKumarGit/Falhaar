import React, { useState } from 'react';

const faqData = [
    {
        question: "What types of vegetables do you offer?",
        answer: "We offer a wide variety of fresh vegetables including leafy greens, root vegetables, gourds, and seasonal produce sourced directly from local farms.",
    },
    {
        question: "Are your fruits organically grown?",
        answer: "Yes, most of our fresh fruits are organically grown without synthetic fertilizers or pesticides. We prioritize health and sustainability in our sourcing.",
    },
    {
        question: "What is makhana, and how is it healthy?",
        answer: "Makhana, also known as fox nuts or lotus seeds, is a superfood rich in protein, antioxidants, and low in calories — making it a perfect healthy snack.",
    },
    {
        question: "How do you ensure freshness during delivery?",
        answer: "We pack all produce in temperature-controlled boxes and deliver within hours of harvest to ensure maximum freshness and nutritional value.",
    },
    {
        question: "Can I schedule recurring deliveries?",
        answer: "Yes! You can subscribe for weekly or bi-weekly deliveries of your favorite vegetables, fruits, and makhana snacks at your convenience.",
    },
    {
        question: "Do you support bulk or wholesale orders?",
        answer: "Absolutely. We cater to both retail and wholesale clients. Contact us directly for special pricing on bulk orders of makhana or produce.",
    },
    {
        question: "What is your return or refund policy?",
        answer: "If you're not satisfied with the quality of any item, please contact us within 24 hours of delivery. We offer full refunds or replacements, no questions asked.",
    },
    {
        question: "How can I store makhana to keep it fresh?",
        answer: "Store makhana in an airtight container in a cool, dry place. Avoid moisture to maintain its crunch and freshness for several weeks.",
    },
];


const Faq = () => {
    const [activeIndexCol1, setActiveIndexCol1] = useState(null);
    const [activeIndexCol2, setActiveIndexCol2] = useState(null);

    const half = Math.ceil(faqData.length / 2);
    const firstHalf = faqData.slice(0, half);
    const secondHalf = faqData.slice(half);

    const renderAccordion = (items, activeIndex, setActiveIndex, columnId) => (
        items.map((item, index) => {
            const uniqueId = `${columnId}-${index}`;
            return (
                <div className="accordion-item" key={uniqueId}>
                    <h2 className="accordion-header" id={`heading-${uniqueId}`}>
                        <button
                            className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`collapse-${uniqueId}`}
                        >
                            {item.question}
                        </button>
                    </h2>
                    <div
                        id={`collapse-${uniqueId}`}
                        className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                        aria-labelledby={`heading-${uniqueId}`}
                        data-bs-parent={`#faqAccordion-${columnId}`}
                    >
                        <div className="accordion-body">{item.answer}</div>
                    </div>
                </div>
            );
        })
    );

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">❓ Frequently Asked Questions</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="accordion" id="faqAccordion-col1">
                        {renderAccordion(firstHalf, activeIndexCol1, setActiveIndexCol1, 'col1')}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="accordion" id="faqAccordion-col2">
                        {renderAccordion(secondHalf, activeIndexCol2, setActiveIndexCol2, 'col2')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
