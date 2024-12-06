import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

interface SocialMediaCardProps {
  name: string
  url: string
  qrCode: string
  logo: string
  color: string
}

export function SocialMediaCard({ name, url, qrCode, logo, color }: SocialMediaCardProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="w-full">
      <Card className="w-full h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
        <CardContent className="p-6 flex flex-col items-center justify-between h-full">
          <div className="relative w-full aspect-square mb-4">
            <Image
              src={qrCode}
              alt={`${name} QR Code`}
              layout="fill"
              objectFit="contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={logo}
                alt={`${name} Logo`}
                width={50}
                height={50}
              />
            </div>
          </div>
          <h3 className={`text-xl font-bold ${color}`}>{name}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}
