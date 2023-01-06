import './postSend.scss'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { SyntheticEvent, useRef, useState } from 'react'
import { userSlice, userActions } from 'features/store/user.slice'
import Env from 'config/env'

const Share = () => {
  const postContent = useRef<HTMLInputElement | null>(null)
  const currentUser = useAppSelector(state => state.user)
  const [picture, setPicture] = useState<FileList | null>(null)
  const dispatch = useAppDispatch()
  const onUploadImg = (e: SyntheticEvent) => {
    setPicture(current => (e.target as HTMLInputElement).files)
  }
  const onSubmitPost = (e: SyntheticEvent) => {
    // dispatch(
    //   // userActions.submitPostSaga(postContent.current?.value, picture === null ? null : picture[0]),
    //   userActions.submitPostSaga(token),
    // )
    // if (picture !== null) dispatch(userSlice.actions.modifyUserImage(picture[0].name))
    dispatch(userActions.sharePostSaga(picture === null ? null : picture[0], currentUser.token))
    setPicture(null)
  }
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={
              'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
            }
            alt=""
          />
          <input
            type="text"
            ref={postContent}
            placeholder={`What's on your mind ${currentUser.username}?`}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
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
                <span>Add Image</span>
              </div>
            </label>
          </div>
          <div className="right">
            <button onClick={onSubmitPost}>Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share
