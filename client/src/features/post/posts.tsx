import { IPost } from '../../pages/types'
import Post from './post'
import './posts.scss'

const Posts = () => {
  const posts: IPost[] = [
    {
      id: 1,
      content: 'stinres',
      image:
        'http://localhost:4000/api/user/image?path=/server/media/profile_pictures/main_page.png',
      timestamp: '123156',
      numlike: 0,
      title: 'sport',
      type: 'basketball',
      userId: 123,
    },
    {
      id: 1,
      content: 'stinres',
      image:
        'http://localhost:4000/api/user/image?path=/server/media/profile_pictures/main_page.png',
      timestamp: '123156',
      numlike: 0,
      title: 'sport',
      type: 'basketball',
      userId: 123,
    },
  ]
  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts
