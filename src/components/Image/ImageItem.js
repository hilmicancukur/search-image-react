import style from './ImageItem.module.css'

function ImageItem({item}) {
    const image = item.urls.small;
    const alt_description = item.alt_description;
    return ( 
        <img src={image} alt={alt_description} className={style.image__item}/>
     );
}

export default ImageItem;