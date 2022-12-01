import './leftbar.scss'

export const LeftBar = () => (
  <div className="leftBar">
    <div className="container">
      <div className="menu">
        <div className="item">
          <img
            src={
              'http://localhost:4000/api/user/image?path=/server/media/profile_pictures/main_page.png'
            }
            alt=""
          />
          <span>Main Page</span>
        </div>
        <div className="item">
          <img
            src={
              'http://localhost:4000/api/user/image?path=/server/media/profile_pictures/groups.png'
            }
            alt=""
          />
          <span>groups</span>
        </div>
        <div className="item">
          <img
            src={
              'http://localhost:4000/api/user/image?path=/server/media/profile_pictures/clock.png'
            }
            alt=""
          />
          <span>history</span>
        </div>
      </div>
    </div>
  </div>
)
