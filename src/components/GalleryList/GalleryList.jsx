import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css';

//Gallery of images here
function GalleryList (props) {

    
    return (
        /* Iterate the list of gallery data */
        <div class="img-grid">
            {props.galleryProp.map(image =>
                <GalleryItem image={image} addLikesProp={props.addLikesProp}/>
                
            )}
        </div>
            
    );
}

export default GalleryList;