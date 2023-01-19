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
                    likes: {image.likes}
                    <br />
                    <br />
                </div>
            </>)
        )
    } else {
        return (
            (<>
                <div 
                    onClick={
                        () => {toggleDescription(image.description)}     
                    }
                    class="img-clicked">
                        {image.description}
                    <br />
                    likes: {image.likes}
                    <br />
                    <br />
                </div>
            </>)
        )
    }
}

export default GalleryItem;