import './GalleryItem.css';

//Single image in the gallery

function GalleryItem({image}) {
    return(
        (<>
            <div>
                <img 
                src={image.path}
                class="img"
                alt={image.description}/>
                <br />
                likes: {image.likes}
                <br />
                <br />
            </div>
        </>)
    )
}

export default GalleryItem;