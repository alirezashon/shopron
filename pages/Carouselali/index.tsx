import { useEffect, useState } from 'react'
import styles from './index.module.css'
import Image from 'next/image'

interface ImageStructure {
  src: string
}

const Carouselali = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [images, setImages] = useState<ImageStructure[]>([
    { src: '/images/Gerdachala.webp' },
    { src: '/images/jaraghalesquer.jpg' },
    { src: '/images/Akbar.jpg' },
  ])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data/Post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          products: '',
          category: '@L$L%O%F#D%M^',
          authType: 'G&E!T*P^R$O#D$U^C@T*S',
        }),
      })
      const data = await response.json()
      setImages(data.products)
      console.log(data)
    }
    // fetchData()
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, 4444)
    return () => clearInterval(interval)
  }, [currentIndex, images])

  const handleImageClick = (index: number) => {
    setCurrentIndex(index)
  }

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  const previousImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carouselali}>
          <div className={styles.imageContainer}>
            {images.map((img, index) => (
              <div key={index} className={styles.imageContainerItem}>
                <Image
                  className={`${styles.image} ${index === currentIndex ? styles.active : ''}`}
                  src={img.src}
                  width={4444}
                  height={4444}
                  alt={'carousell'}
                />
                <div
                  onClick={() => handleImageClick(index)}
                  className={`${styles.circali} ${
                    index === currentIndex ? styles.circaliActive : ''
                  }`}
                ></div>
              </div>
            ))}
          </div>
          <div className={styles.toolBar}></div>
        </div>
      </div>
      {currentIndex}
      <button onClick={previousImage}>previousalim</button>

      <button onClick={nextImage}>nextalim</button>
      {images?.map((image, index) => (
        <button onClick={() => setCurrentIndex(index)}>kalim</button>
      ))}
    </>
  )
}

export default Carouselali
