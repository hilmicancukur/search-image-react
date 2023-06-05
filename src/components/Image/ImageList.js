import ImageItem from './ImageItem';
import style from './ImageList.module.css'

function ImageList({datas}) {
    if (datas.length > 0) {
        return ( 
            <div className={style.image__wrapper}>
                {datas.map((data,i)=>{
                    return <ImageItem key={i} item={data}/>
                })}
            </div>
        );
    }
}

export default ImageList;