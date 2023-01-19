import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css';

//Gallery of images here

function GalleryList ({galleryProp}) {

    
    return (
        // console.log('in gallery list with: ', galleryProp);
        /* Iterate the list of gallery data */
        
        <div class="img-grid">
            {galleryProp.map(image =>
                // (<>
                //     <img src={image.path}/>
                //     <br />
                //     "{image.description}"
                //     <br />
                //     likes: {image.likes}
                //     <br />
                //     <br />
                // </>)
                <GalleryItem image={image}/>
                
            )}
        </div>
            
    );
}

export default GalleryList;