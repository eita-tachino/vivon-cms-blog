import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="pg-12 mb-8  rounded-lg bg-zinc-400 bg-opacity-60 p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold text-slate-200">
        categories
      </h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className="mb-3 block cursor-pointer pb-3 text-white">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
