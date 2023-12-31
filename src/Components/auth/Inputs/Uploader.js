import React from 'react'
import './Input.css'

export default function Uploader(props) {
    return (
        <div className="uploaderImg">
            <input type="file" id='ImagesUploder' style={{ display: 'none' }} onChange={(e) => props.UploadDataEvent(e)} />
            <label htmlFor="ImagesUploder" className={`ImagesUploder_box${props.Imgdata ? ' uploaded' : ''}`} style={{ backgroundImage: `url(${props.Imgdata})` }}>
                <div className="uploaded_layer">
                    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.58093 11.8089C7.30893 11.8089 6.27393 10.7739 6.27393 9.50187C6.27393 8.22787 7.30893 7.19287 8.58093 7.19287C9.85393 7.19387 10.8889 8.22987 10.8889 9.50187C10.8889 10.7739 9.85293 11.8089 8.58093 11.8089ZM8.57993 8.69287C8.13593 8.69287 7.77393 9.05487 7.77393 9.50187C7.77393 9.94687 8.13593 10.3089 8.58093 10.3089C9.02693 10.3089 9.38893 9.94687 9.38893 9.50187C9.38893 9.05587 9.02593 8.69387 8.57993 8.69287Z" />
                        <path d="M6.06878 17.604C5.95678 17.604 5.84178 17.579 5.73478 17.525C5.36478 17.34 5.21478 16.892 5.39778 16.522C5.50278 16.311 6.46278 14.468 8.06378 14.468C8.88778 14.468 9.49078 14.916 9.97578 15.278C10.4478 15.628 10.7568 15.843 11.1598 15.843C11.4448 15.839 12.1838 14.95 12.5808 14.471C13.4278 13.451 14.3048 12.395 15.4218 12.395C17.3358 12.395 18.5258 14.94 18.6548 15.23C18.8228 15.608 18.6538 16.05 18.2758 16.219C17.9008 16.39 17.4548 16.22 17.2848 15.842C16.9998 15.207 16.1678 13.895 15.4218 13.895C15.0097 13.895 14.2454 14.8147 13.7384 15.4247L13.7348 15.429C12.9178 16.414 12.1458 17.343 11.1598 17.343C10.2398 17.343 9.59678 16.865 9.08078 16.481C8.65278 16.164 8.37578 15.968 8.06378 15.968C7.52878 15.968 6.94178 16.792 6.74078 17.19C6.60878 17.453 6.34378 17.604 6.06878 17.604Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12.396C2 19.779 4.617 22.396 12 22.396C19.383 22.396 22 19.779 22 12.396C22 5.013 19.383 2.396 12 2.396C4.617 2.396 2 5.013 2 12.396ZM3.5 12.396C3.5 5.882 5.486 3.896 12 3.896C18.514 3.896 20.5 5.882 20.5 12.396C20.5 18.91 18.514 20.896 12 20.896C5.486 20.896 3.5 18.91 3.5 12.396Z" />
                    </svg>
                </div>
            </label>
            <div className="right_upload_infos">
                <p className="title_image">فقط عکس هایی با فرمت {props.formatsAllowed} مجاز می باشد و حجم عکس نباید از {props.Maxsize} بیشتر باشد </p>
                <div className="btnsUploder">
                    <label htmlFor="ImagesUploder" className='btn blue'>آپلود عکس</label>
                    {
                        props.Imgdata != '' && <div className="btn red" onClick={props.DeleteDataEvent}>حذف عکس</div>
                    }

                </div>
            </div>
        </div>
    )
}
