import Carousel from 'nuka-carousel'
import { forwardRef, useImperativeHandle, useState } from 'react'

const AppCarousel = forwardRef(({ children, settings }, ref) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const totalSlides = Array.isArray(children) ? children.length : 1
  const slidesToShow = Number(settings?.slidesToShow) || 1

  useImperativeHandle(ref, () => ({
    next: () =>
      setSlideIndex((prev) =>
        prev + slidesToShow >= totalSlides ? prev : prev + slidesToShow
      ),
    prev: () =>
      setSlideIndex((prev) =>
        prev - slidesToShow < 0 ? 0 : prev - slidesToShow
      )
  }))

  return (
    <Carousel
      afterSlide={setSlideIndex}
      slideIndex={slideIndex}
      slidesToShow={slidesToShow}
      style={{ paddingBottom: '36px' }}
      wrapAround={false}
      {...settings}
    >
      {children}
    </Carousel>
  )
})

AppCarousel.displayName = 'AppCarousel'
export default AppCarousel
