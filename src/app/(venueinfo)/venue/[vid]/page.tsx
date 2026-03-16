import Image from "next/image"

const venueMap: Record<string, { name: string; imgSrc: string }> = {
  "001": { name: "The Bloom Pavilion", imgSrc: "/img/cover3.jpg" },
  "002": { name: "Spark Space",        imgSrc: "/img/cover4.jpg" },
  "003": { name: "The Grand Table",    imgSrc: "/img/grandtable.jpg" },
}

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>
}) {
  const { vid } = await params
  const venue = venueMap[vid]

  if (!venue) return <div className="p-8">Venue not found</div>

  return (
    <main className="p-8 flex flex-row items-center gap-6">
      <div className="relative w-48 h-48 rounded-xl overflow-hidden shrink-0">
        <Image src={venue.imgSrc} alt={venue.name} fill className="object-cover" />
      </div>
      <h1 className="text-2xl font-bold text-gray-800">{venue.name}</h1>
    </main>
  )
}