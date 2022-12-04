import { SportMap } from 'features/map/map'
import { Navbar } from 'features/profile/navbar/navbar'
import { TViewPortSetting } from 'features/types/map.types'

interface IViewState {
  initial: TViewPortSetting[]
}

const INITIAL_VIEW_STATE: IViewState = {
  initial: [
    {
      longitude: 121.55759,
      latitude: 25.04257,
      zoom: 12,
      pitch: 0,
      bearing: 0,
    },
  ],
}
export const MapPage: React.FC = () => (
  <div>
    <Navbar />
    <div style={{ display: 'flex' }}>
      <SportMap initial={INITIAL_VIEW_STATE.initial} />
    </div>
  </div>
)

export default MapPage
