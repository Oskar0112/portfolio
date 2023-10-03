import Image from 'next/image'

export const CardImage = ({ src, className, imageClassName, alt }) => {
    return (
        <div className={`card--image ${className && className}`}>
            <Image
                src={src}
                width={600}
                height={420}
                alt={alt}
                className={`w-full h-full ${imageClassName && imageClassName}`}
            />
        </div>
    );
};
