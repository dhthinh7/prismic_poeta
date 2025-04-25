'use client'

import React, { Fragment, ReactNode, useMemo } from 'react'
import NotFound from '@/app/(system)/not-found'
import { ICategory } from '@/lib/model/index.type.'
import { usePathname } from 'next/navigation'

interface IHierarchyLayoutProps {
  categories: ICategory[]
  children: ReactNode
}

const HierarchyLayout = ({ categories, children }: IHierarchyLayoutProps) => {
  const pathName = usePathname()

  const isValid = useMemo<boolean>(() => {
    if (categories.length !== pathName.split('/').filter(Boolean).length) return false

    const pathSegments = pathName.split('/').filter(Boolean)

    return categories.every((category, index) => category.uid === pathSegments[index])
  }, [categories, pathName])

  if (!isValid) return <NotFound />

  return <Fragment>{children}</Fragment>
}

export default HierarchyLayout
