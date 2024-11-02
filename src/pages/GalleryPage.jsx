import img1 from '../assets/img-1.webp';
import img2 from '../assets/img-2.webp';
import img3 from '../assets/img-3.webp';
import img4 from '../assets/img-4.webp';
import img5 from '../assets/img-5.webp';
import img6 from '../assets/img-6.webp';
import img7 from '../assets/img-7.webp';
import img8 from '../assets/img-8.webp';
import img9 from '../assets/img-9.webp';

function GalleryPage() {
    return (
        <article className='gallery-page'>
            <h1>Our Work in Focus</h1>
            <section className="gallery">
                <div className="img-container">
                    <img src={img1} alt="Image 1" />
                </div>
                <div className="img-container">
                    <img src={img2} alt="Image 2" />
                </div>
                <div className="img-container">
                    <img src={img3} alt="Image 3" />
                </div>
                <div className="img-container">
                    <img src={img4} alt="Image 4" />
                </div>
                <div className="img-container">
                    <img src={img5} alt="Image 5" />
                </div>
                <div className="img-container">
                    <img src={img6} alt="Image 6" />
                </div>
                <div className="img-container">
                    <img src={img7} alt="Image 7" />
                </div>
                <div className="img-container">
                    <img src={img8} alt="Image 8" />
                </div>
                <div className="img-container">
                    <img src={img9} alt="Image 9" />
                </div>
            </section>
        </article>
    )
}

export default GalleryPage;