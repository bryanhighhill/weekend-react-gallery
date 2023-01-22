import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css';

//Gallery of images here
const GalleryList = ({addLikesProp, galleryProp}) => (
    /* Iterate the list of gallery data */
    <div class="img-grid">
        {galleryProp.map(image =>
            <GalleryItem image={image} addLikesProp={addLikesProp}/>
        )}
    </div>
        
);

export default GalleryList;