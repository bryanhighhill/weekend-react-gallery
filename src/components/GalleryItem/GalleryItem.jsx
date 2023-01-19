//Single image in the gallery

function GalleryItem({image}) {
    return(
        (<>
            <img src={image.path}/>
            <br />
            "{image.description}"
            <br />
            likes: {image.likes}
            <br />
            <br />
        </>)
    )
}

export default GalleryItem;