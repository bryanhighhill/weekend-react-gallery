import react, { useState } from 'react';
import './GalleryItem.css';

//Single image in the gallery

const GalleryItem = ({addLikesProp, image}) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    //render whether to display image or image description
    // if (descriptionVisible === false) {
        return(
            <div class="container">
                <img 
                src={image.path}
                onClick={() => setDescriptionVisible(!descriptionVisible)}
                //conditional ternary operator - removes the need for lines 34 - 61
                class={descriptionVisible ? "img-clicked" : "img"}
                alt={image.description}/>
                <br />
                {descriptionVisible && <p class="description">{image.description}</p>}
                <div class="icon">
                    <button class="button" onClick={() => addLikesProp(image)}>
                        <img class="image-fill" src="images/heart_fill.png" alt="heart" width="20" height="20" />
                        <img class="image-no-fill" src="images/heart_no_fill.png" alt="heart" width="20" height="20" />
                    </button>
                    <div class="likes">
                        likes: {image.likes}
                    </div>
                </div>
                <br />
                <br />
            </div>
        )
    // } else {
    //     return (
    //         (<>
    //             <div class="container">
    //                 <img 
    //                 src={image.path}
    //                 onClick={
    //                     () => {toggleDescription(image.description)}     
    //                 }
    //                 class="img-clicked"
    //                 alt={image.description}/>
    //                 <br />
    //                 <p class="description">{image.description}</p>
    //                 <div class="icon">
    //                     <button class="button" onClick={() => addLikes(image)}>
    //                         <img class="image-fill" src="images/heart_fill.png" alt="heart" width="20" height="20" />
    //                         <img class="image-no-fill" src="images/heart_no_fill.png" alt="heart" width="20" height="20" />
    //                     </button>
    //                     <div class="likes">
    //                         likes: {image.likes}
    //                     </div>
    //                 </div>
    //                 <br />
    //                 <br />
    //             </div>
    //         </>)
    //     )
    // }
}

export default GalleryItem;