import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css';

//Gallery of images here
const GalleryList = ({addLikes, gallery, deleteImage}) => (
    /* Iterate the list of gallery data */
    <div className="img-grid">
        {gallery.map(image =>
            <GalleryItem image={image} addLikes={addLikes} deleteImage={deleteImage}/>
        )}
    </div>
        
);

export default GalleryList;