import cn from 'classnames'
import mitt from 'next/dist/shared/lib/mitt'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    coverImage ? <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage ? coverImage.sourceUrl : null}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    /> : null
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
