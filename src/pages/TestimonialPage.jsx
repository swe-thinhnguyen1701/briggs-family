import Rating from "../components/Rating";

function TestimonialPage() {
    const REVIEW_ARRAY = [
        {
            rating: 5,
            message: "Well done job on a replacing of a roof, very friendly customer service and a very good job in cleaning up.",
            name: "Larry P.",
            date: "10/20/2024"
        },
        {
            rating: 5,
            message: "Work crew is amazing!!! Clean and efficient!",
            name: "Stacy G.",
            date: "10/17/2024"
        },
        {
            rating: 5,
            message: "Very organized! They do a good job, don't mess around! Left the lawn cleaner than when they arrived!!",
            name: "Susan E.",
            date: "10/15/2024"
        },
        {
            rating: 5,
            message: "They are super friendly and helpful company for any home owner. We are first time homeowners who needed a new roof, they answered any and all questions we had, walked us through everything, and worked right along our insurance to make sure everything was covered. We highly recommended them!",
            name: "Molli K.",
            date: "10/15/2024"
        },
        {
            rating: 5,
            message: "Alex and crew were great to work with. Efficient, organized, friendly and the clean up was outstanding!",
            name: "Lacey L.",
            date: "10/14/2024"
        },
        {
            rating: 5,
            message: "Our neighbor had a new roof put on their house this summer with your company because of hail damage. We were very impressed with your work, clean up and how nice their new roof complimented their house. Without doing any research we also hired your company to see if we too had hail damage.\nWe own a small ranch style home. it had a black roof, gray/blue siding and a bottom brown/beige brick. very cut up! After finding we had hail damage you did an awesome job in only day. You gave us a booklet of shingle styles but we couldn't narrow it down. After seeing larger samples outside in front of our home, we decided quickly!\nThanks for working with us, Briggs Family Home Development!! Wer'e so happy with your work, attention to detail, and how nice our home looks now!\nWe definitely recommend your company!!!",
            name: "Patricia C.",
            date: "10/11/2024"
        },
        {
            rating: 5,
            message: "We had our roof repaired by Alex Briggs and crew, which was nothing short of perfect. Our roof turned out better than expected. They were patient with insurance and the whole process in general. I would highly recommend Briggs Family Home Development for the high expectations we all want.",
            name: "Curt D.",
            date: "10/10/2024"
        }
    ]
    return (
        <article>
            <h1>What Our Client Says</h1>
            {
                REVIEW_ARRAY.map((review, index) => <Rating review={review} key={index} />)
            }
        </article>
    );
}

export default TestimonialPage;