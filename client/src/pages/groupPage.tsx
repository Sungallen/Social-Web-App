import { Navbar } from 'features/profile/navbar/navbar'
import { IEvent, TEventStatus } from 'features/types/group.types'
import React from 'react'

const data: IEvent[] = [
  {
    id: 'test',
    name: 'test',
    description: 'test',
    created_time: new Date(),
    owner: 'test',
    members: ['test'],
    image: 'test',
    status: TEventStatus.END,
  },
]

const Card = () => (
  <div>
    <p>foo</p>
    <p>foo</p>
    <p>foo</p>
    <p>foo</p>
  </div>
)

const Header = () => (
  <>
    <h1>Find a group to join</h1>
    <h3>Join groups to start meeting up and get suggestions based on what you join.</h3>
  </>
)

export default function groupPage() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Card />
    </div>
  )
}
