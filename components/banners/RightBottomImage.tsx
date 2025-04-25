import { ImageField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import ConditionRender from '../shared/ConditionRender'

interface IRightBottomImage {
  partnerImage: ImageField<never>
}

const RightBottomImage = ({ partnerImage }: IRightBottomImage) => {
  return (
    <ConditionRender condition={partnerImage}>
      <div className='absolute bottom-3 right-3 lg:bottom-12 lg:right-12 w-[50px] h-[50px] lg:w-[120px] lg:h-[120px]'>
        <PrismicNextImage
          field={partnerImage}
          width={120}
          height={120}
          imgixParams={{ q: 100, auto: 'format' }}
          className='w-full h-full object-cover aspect-auto object-left-center'
        />
      </div>
    </ConditionRender>
  )
}

export default RightBottomImage
