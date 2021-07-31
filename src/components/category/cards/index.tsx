import React from 'react'
import Card from './card'

const Cards = (): JSX.Element => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 md:mt-16">
      <Card
        title="まーじゃんのようなもの、ぷち"
        desc="ここに簡単な説明を記述します"
        image="mj-3ds-1.png"
      />
      <Card
        title="まーじゃんのようなもの、ぷち"
        desc="ここに簡単な説明を記述します"
        image="mj-3ds-2.png"
      />
      <Card
        title="まーじゃんのようなもの、ぷち"
        desc="ここに簡単な説明を記述します"
        image="mj-3ds-1.png"
      />
      <Card
        title="まーじゃんのようなもの、ぷち"
        desc="ここに簡単な説明を記述します"
        image="mj-3ds-1.png"
      />
      <Card
        title="まーじゃんのようなもの、ぷち"
        desc="ここに簡単な説明を記述します"
        image="mj-3ds-1.png"
      />
      <Card
        title="まーじゃんのようなもの、ぷち"
        desc="ここに簡単な説明を記述します"
        image="mj-3ds-1.png"
      />
    </div>
  )
}

export default Cards
