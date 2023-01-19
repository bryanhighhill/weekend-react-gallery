//Gallery of images here

function GalleryList ({galleryProp}) {

    
    return (
        // console.log('in gallery list with: ', galleryProp);
        /* Iterate the list of gallery data */
        
        <div>
            {galleryProp.map(image =>
                (<img src={image.path}/>)
                
            )}
        </div>
            
    );
}

export default GalleryList;