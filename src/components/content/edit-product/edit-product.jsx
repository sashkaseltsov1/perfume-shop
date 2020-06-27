import React, {useState} from "react";
import styles from './edit-product.module.css';
import Button from "../../templates/button/button";
import normalizeNumber from "./normalize-number";
import Image from "../../templates/image/image";
import Checkboxes from "./checkboxes/checkboxes";
import emptyImage from '../../../images/loading-image.jpg';

const EditProduct = ({product,isEdit,isFetching, ...props}) => {

    const [file, setFile]=useState({
        file: '',
        imagePreviewUrl: ''
    });

    const handleImageChange = (e)=> {
        e.preventDefault();
        let reader = new FileReader();
        let img = e.target.files[0];
        reader.onloadend = () => {
            props.setImageActionCreator(reader.result);
            setFile({
                file: img,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(img)
    };
    return (
        <>
            <div className={styles.product}>
                <div className={styles.left}>
                    <div>
                        <div className={styles.title}>Загрузить изображение:</div>
                        <div style={{color:'#9a9a9a', fontSize:'small', marginBottom:'5px'}}>Рекомендуемый размер: 360х430px</div>
                        <input type={'file'} onChange={handleImageChange} style={{marginBottom:'10px'}}/>
                    </div>
                    <div className={styles.image}>
                        {product.image? <Image image={product.image}/>:<Image image={emptyImage}/>}
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.id}>Product ID: {product._id}</div>
                    <div className={styles.title}>Название:</div>
                    <input placeholder={'Введите название...'} type={'text'} value={product.name} onChange={e => {
                        props.setNameActionCreator(e.target.value)
                    }}/>
                    <div className={styles.title}>Объем, мл.:</div>
                    <input placeholder={'Введите объем...'} type={'text'} value={product.amount} onChange={e => {
                        props.setAmountActionCreator(normalizeNumber(e.target.value))
                    }}/>
                    <div className={styles.title}>Цена, руб.:</div>
                    <input placeholder={'Введите цену...'} type={'text'} value={product.fullPrise} onChange={e => {
                        props.setFullpriseActionCreator(normalizeNumber(e.target.value))
                    }}/>
                    <div className={styles.title}>Кол-во товаров на складе:</div>
                    <input placeholder={'Введите кол-во...'} type={'text'} value={product.count} onChange={e => {
                        props.setCountActionCreator(normalizeNumber(e.target.value))
                    }}/>
                    <div className={styles.title}>Описание:</div>
                    <textarea style={{
                        width: '80%',
                        minWidth: 0,
                        height: '60px',
                        resize: 'none'
                    }} placeholder={'Введите описание...'} value={product.description} onChange={e => {
                        props.setDescriptionActionCreator(e.target.value)
                    }}/>
                </div>
                <div className={styles.bottom}>
                    <div>
                        <div className={styles.title}>Специальные предложения:</div>
                        <div>
                            <label>
                                <input type="checkbox"
                                       value={product.isNovelty}
                                       checked={product.isNovelty}
                                       onChange={() => {
                                           if (!product.isNovelty) {
                                               props.setNoveltyActionCreator(true);
                                           } else {
                                               props.setNoveltyActionCreator(false);
                                           }
                                       }}
                                />
                                Новинка
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox"
                                       value={product.isDiscount}
                                       checked={product.isDiscount}
                                       onChange={() => {
                                           if (!product.isDiscount) {
                                               props.setDiscountActionCreator(true);
                                           } else {
                                               props.setDiscountActionCreator(false);
                                           }
                                       }}
                                />
                                Скидка
                            </label>
                        </div>
                    </div>

                    <div>
                        <div className={styles.title}>Аромат:</div>
                        <div>
                            {product.fragrance.map((option) => {
                                return <div key={option._id}>
                                    <label>
                                        <input type="checkbox"
                                               value={option.state}
                                               checked={option.state}
                                               onChange={() => {
                                                   if (!option.state) {
                                                       props.appendFragranceActionCreator({
                                                           _id: option._id,
                                                           type: option.type
                                                       })
                                                   } else {
                                                       props.removeFragranceActionCreator(option._id)
                                                   }
                                               }}
                                        />
                                        {option.type}
                                    </label>
                                </div>
                            })}
                        </div>
                    </div>
                    <Checkboxes title={'Брэнд'} category={product.brand} callback={props.setBrandActionCreator}/>
                    <Checkboxes title={'Пол'} category={product.gender} callback={props.setGenderActionCreator}/>
                    <Checkboxes title={'Тип парфюма'} category={product.perfumeType} callback={props.setTypeActionCreator}/>
                </div>
            </div>
            <div className={styles.button}>
                <Button type={'submit'}  disabled={isFetching} title={isEdit?'Редактировать':'Создать'}
                        style={{backgroundColor: 'seagreen'}} callback={
                            ()=>{
                                if(isEdit){
                                    props.updateProductActionCreator(file.file)
                                }else{
                                    props.createProductActionCreator(file.file)
                                }
                            }
                        }/>
            </div>
            {isEdit && <div className={styles.remove}>
                <span onClick={()=>{
                    props.removeProductActionCreator(product._id)}}>Удалить продукт</span>
            </div>}

        </>

    )
};

export default EditProduct;