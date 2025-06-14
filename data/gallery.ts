export interface GalleryImage {
  id: string
  title: string
  thumbnail: string
  fullImage: string
  unlocked: boolean
  description: string
  category?: string
  unlockCondition?: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: "ravenshollow-mansion",
    title: "Mansión Ravenshollow",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: true,
    description: "La imponente mansión donde todo comenzó. Sus ventanas parecen observarte incluso en la oscuridad.",
    category: "Escenarios",
    unlockCondition: "Completar prólogo",
  },
  {
    id: "eleanor-portrait",
    title: "Retrato de Eleanor",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: true,
    description:
      "Un retrato que captura la esencia melancólica de Eleanor. Sus ojos parecen seguirte por la habitación.",
    category: "Personajes",
    unlockCondition: "Conocer a Eleanor",
  },
  {
    id: "marcus-study",
    title: "Estudio de Marcus",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: true,
    description: "El santuario personal de Marcus, lleno de libros antiguos y secretos por descubrir.",
    category: "Escenarios",
    unlockCondition: "Visitar el estudio",
  },
  {
    id: "victoria-garden",
    title: "Victoria en el Jardín",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "Victoria entre las rosas marchitas del jardín. La belleza y la decadencia en perfecta armonía.",
    category: "Personajes",
    unlockCondition: "Ruta de Victoria - Capítulo 3",
  },
  {
    id: "library-secret",
    title: "Biblioteca Secreta",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "Los pasillos ocultos de la biblioteca guardan los secretos más oscuros de la familia.",
    category: "Escenarios",
    unlockCondition: "Descubrir el pasaje secreto",
  },
  {
    id: "final-revelation",
    title: "La Revelación Final",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "El momento de la verdad. Cuando todas las piezas del rompecabezas finalmente encajan.",
    category: "Momentos Clave",
    unlockCondition: "Completar cualquier final",
  },
  {
    id: "moonlight-scene",
    title: "Encuentro a la Luz de la Luna",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "Un momento íntimo bajo la luz plateada de la luna. Algunos secretos solo se revelan en la oscuridad.",
    category: "Momentos Clave",
    unlockCondition: "Ruta romántica - Capítulo 5",
  },
  {
    id: "family-portrait",
    title: "Retrato Familiar",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "El último retrato de la familia Ravenshollow antes de que todo cambiara para siempre.",
    category: "Historia",
    unlockCondition: "Descubrir la historia familiar",
  },
]

export const getUnlockedCount = (): number => {
  return galleryImages.filter((image) => image.unlocked).length
}

export const getTotalCount = (): number => {
  return galleryImages.length
}

export const getImagesByCategory = (category: string): GalleryImage[] => {
  return galleryImages.filter((image) => image.category === category)
}

export const getCategories = (): string[] => {
  const categories = galleryImages.map((image) => image.category || "Sin categoría")
  return [...new Set(categories)]
}
