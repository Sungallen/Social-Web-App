// export default function uploadImageButton() {
//   return <div>uploadImageButton</div>
// }
import 'features/postSend/postSend.scss'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { SyntheticEvent, useRef, useState } from 'react'
import { userActions } from 'features/store/user.slice'
import Env from 'config/env'

export const UploadImageButton = () => {
  const postContent = useRef<HTMLInputElement | null>(null)
  const currentUser = useAppSelector(state => state.user)
  const [picture, setPicture] = useState<FileList | null>(null)
  const dispatch = useAppDispatch()
  const onUploadImg = (e: SyntheticEvent) => {
    setPicture(current => (e.target as HTMLInputElement).files)
  }
  const onSubmitPost = (e: SyntheticEvent) => {
    dispatch(
      userActions.submitPostSaga(postContent.current?.value, picture === null ? null : picture[0]),
    )
  }
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={`${Env.API_BASE_URL}/api/user/image?path=${currentUser.image}`} alt="" />
          <input
            type="text"
            ref={postContent}
            placeholder={`What's on your mind ${currentUser.username}?`}
          />
        </div>
        <hr />
        {/* <div className="bottom"> */}
        <div className="">
          <input
            type="file"
            id="file"
            accept="image/png, image/gif, image/jpeg"
            style={{ display: 'none' }}
            onChange={onUploadImg}
          />
          <label htmlFor="file">
            <div className="item">
              {picture !== null ? (
                <img
                  src={
                    'http://localhost:4000/api/user/image?path=/server/media/profile_pictures/Img.png'
                  }
                  alt=""
                />
              ) : (
                <img
                  src={
                    'http://localhost:4000/api/user/image?path=/server/media/profile_pictures/selectedImg.png'
                  }
                  alt=""
                />
              )}
              {/* <span>Add Image</span> */}
            </div>
          </label>
        </div>
        {/* <div className="right">
            <button onClick={onSubmitPost}>Share</button>
          </div> */}
      </div>
    </div>
    // </div>
  )
}

export default UploadImageButton
