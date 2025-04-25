import { ImageField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'

interface IBackGroundImage {
  backgroundImage: ImageField<never>
}

const BackGroundImage = ({ backgroundImage }: IBackGroundImage) => {
  return (
    <div className='absolute top-0 -z-10 h-full w-full'>
      <PrismicNextImage field={backgroundImage} className='h-full w-full object-cover object-center' />
    </div>
  )
}

export default BackGroundImage
