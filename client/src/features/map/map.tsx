import { TViewPortSetting } from 'features/types/map.types'
import React, { useEffect, useState } from 'react'
import Map, { useControl, Layer, Popup } from 'react-map-gl'

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
  const paintLayer = {
    'fill-extrusion-color': '#9ed7f8',
    // 'fill-extrusion-height': {
    //   type: 'identity' as 'identity',
    //   property: 'height'
    // },
    // 'fill-extrusion-base': {
    //   type: 'id0.0ty' as 'identity',
    //   property: 'min_height'
    // },
    'fill-extrusion-opacity': 0.6,
  }
  return (
    <>
      <Map
        initialViewState={INITIAL_VIEW_STATE.initial[0]}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle={mapStyles.bulePrint}
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        doubleClickZoom={false}
      >
        {/* <Layer
          id="3d-buildings"
          source="mapbox://justincqz.89yzu3ms"
          // source-layer="mapbox://justincqz.89yzu3ms"
          // filter={['==', 'extrude', 'true']}
          type="fill-extrusion"
          minzoom={14}
          paint={paintLayer}
        /> */}
      </Map>
    </>
  )
}
