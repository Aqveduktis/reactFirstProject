import React from 'react'
import { NewsCard } from 'components/NewsCard'
import { Information } from 'components/Information'

export const Grid = () => {
  return (
    <div className="grid-box">
      {Information.map((item) => {
        return (
          <>
            <NewsCard anchor={item.anchor} title={item.title} picture={item.picture} />
          </>
        )

      })}

    </div>
  )
}