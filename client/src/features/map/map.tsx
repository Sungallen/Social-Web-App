import { getCourtsApi } from 'features/hooks/court.api'
import { TViewPortSetting } from 'features/types/map.types'
import React, { useEffect, useState } from 'react'
import Map from 'react-map-gl'
import { useQuery } from 'react-query'
import { useAppSelector } from 'store/hooks'
import { IconLayer } from '@deck.gl/layers/typed'
import DeckGL from '@deck.gl/react/typed'
import { ICourt } from 'features/types/court.types'
import './map.scss'
import Env from 'config/env'
import Rating from '@mui/material/Rating'
import location from './location-2955.svg'

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoianVzdGluY3F6IiwiYSI6ImNsMjRpdHM5czBjMjYzZXBzeTk1dGJhOXEifQ.xLoENXgnw2-fSKFFoYIYPQ'

// init ViewPort setting

interface IViewState {
  initial: TViewPortSetting[]
}
const mapStyles = {
  bulePrint: 'mapbox://styles/justincqz/clb1pdv6o001z14p8q4blj0gr',
  blank: 'mapbox://styles/justincqz/cl24jfcng00h515qjmusok1pv',
}

export const SportMap: React.FC<IViewState> = ({ initial }) => {
  const [courts, setCourts] = useState<ICourt[] | undefined>([])
  const [selectedCourt, setSelectedCourt] = useState<ICourt>()
  const { token } = useAppSelector(state => state.user)
  const { data, isLoading } = useQuery(['courts', token], () => getCourtsApi(token))

  useEffect(() => {
    setCourts(data)
  }, [isLoading])

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

  const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
  }

  const layer = [
    new IconLayer({
      id: 'icon-layer',
      data: courts,
      pickable: true,
      iconMapping: ICON_MAPPING,
      sizeMinPixels: 25,
      sizeScale: 2,
      getIcon: () => ({
        url: location,
        width: 24,
        height: 24,
      }),
      getPosition: d => [d.longitude, d.latitude],
      getSize: d => 5,
      updateTriggers: {
        data,
      },
      onClick: info => {
        console.log(info)
        setSelectedCourt(info.object)
      },
    }),
  ]
  return (
    <>
      <DeckGL layers={[layer]} controller={true} initialViewState={INITIAL_VIEW_STATE.initial[0]}>
        <Map
          style={{ width: '100vw', height: '100vh' }}
          mapStyle={mapStyles.bulePrint}
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        ></Map>
        {selectedCourt !== undefined ? (
          <div className="login">
            <div className="card">
              <div className="top">
                <img src={`${Env.API_BASE_URL}/api/user/image?path=${selectedCourt.image}`} />
              </div>
              <div className="bottom">
                <h1>{selectedCourt.introduction}</h1>
                <span>{selectedCourt.address}</span>
              </div>
              <div className="rating">
                <Rating className="rating" name="no-value" value={null} size="large" readOnly />
              </div>
              <div className="rating1">
                <Rating className="rating1" name="no-value" value={null} size="large" />
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </DeckGL>
    </>
  )
}
