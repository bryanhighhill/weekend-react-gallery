import react, { useState } from 'react';
import './GalleryItem.css';

//Single image in the gallery

function GalleryItem({image}) {
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    const toggleDescription = () => {
        console.log('clicked on image: ', image.description);

        //set state of descriptionVisible
        setDescriptionVisible(!descriptionVisible);
    }

    //render whether to display image or image description
    if (descriptionVisible === false) {
        return(
            (<>
                <div>
                    <img 
                    src={image.path}
                    onClick={
                        () => {toggleDescription(image.description)}     
                    }
                    class="img"
                    alt={image.description}/>
                    <br />
                    <div class="icon">
                        <button class="button">
                            <img class="image-fill" src="images/heart_fill.png" alt="heart" width="20" height="20" />
                            <img class="image-no-fill" src="images/heart_no_fill.png" alt="heart" width="20" height="20" />
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;likes: {image.likes}
                    </div>
                    <br />
                    <br />
                </div>
            </>)
        )
    } else {
        return (
            (<>
                <div class="container">
                    <img 
                    src={image.path}
                    onClick={
                        () => {toggleDescription(image.description)}     
                    }
                    class="img-clicked"
                    alt={image.description}/>
                    <br />
                    <p class="description">{image.description}</p>
                    likes: {image.likes}
                    <br />
                    <br />
                </div>
            </>)
        )
    }
}

export default GalleryItem;