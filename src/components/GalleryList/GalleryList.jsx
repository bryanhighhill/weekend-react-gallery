import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css';

//Gallery of images here
function GalleryList ({galleryProp}) {

    
    return (
        /* Iterate the list of gallery data */
        <div class="img-grid">
            {galleryProp.map(image =>
                <GalleryItem image={image}/>
                
            )}
        </div>
            
    );
}

export default GalleryList;