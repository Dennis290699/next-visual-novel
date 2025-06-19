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
    id: "arrival-quito-night",
    title: "Llegada a Quito de Noche",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: true,
    description: "La capital ecuatoriana iluminada por neones mientras Lilith llega con su misión en mente.",
    category: "Escenarios",
    unlockCondition: "Iniciar capítulo 1",
  },
  {
    id: "casa-sagrado-corazon",
    title: "Casa del Sagrado Corazón",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: true,
    description: "El convento donde Lilith creció y comenzó su entrenamiento como exorcista.",
    category: "Escenarios",
    unlockCondition: "Completar capítulo 1",
  },
  {
    id: "balberith-revelado",
    title: "Balberith Revelado",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "La verdadera forma del Toro, protector de Lilith y antiguo siervo rebelde.",
    category: "Personajes",
    unlockCondition: "Completar capítulo 3",
  },
  {
    id: "kruster-desquiciado",
    title: "Kruster Desquiciado",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "Kruster en su obsesión por la tradición del pan eterno y su conexión con el Horno.",
    category: "Personajes",
    unlockCondition: "Completar capítulo 5",
  },
  {
    id: "el-horno-rojo",
    title: "El Horno Rojo",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "El horno ceremonial debajo de El Panecillo, centro de la energía maldita.",
    category: "Escenarios",
    unlockCondition: "Entrar a la escena final",
  },
  {
    id: "lilith-sacrificio",
    title: "El Sacrificio de Lilith",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "Lilith entrega su vida para sellar el mal y proteger Quito para siempre.",
    category: "Finales",
    unlockCondition: "Final 1 alcanzado",
  },
  {
    id: "balberith-redencion",
    title: "Redención de Balberith",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "El Toro canaliza el poder oscuro en sí mismo para contenerlo eternamente.",
    category: "Finales",
    unlockCondition: "Final 2 alcanzado",
  },
  {
    id: "nick-destierro",
    title: "El Destierro de Nick",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "Nick canaliza la energía hacia un desierto andino, aislándola del mundo humano.",
    category: "Finales",
    unlockCondition: "Final 3 alcanzado",
  },
  {
    id: "despertar-granjero",
    title: "El Despertar del Granjero",
    thumbnail: "/placeholder.svg?height=300&width=400",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "El mal ancestral despierta y Quito cae bajo un velo de sangre y desesperanza.",
    category: "Finales",
    unlockCondition: "Final 4 alcanzado",
  }
]

export const getUnlockedCount = (): number => {
  return galleryImages.filter((image) => image.unlocked).length;
}

export const getTotalCount = (): number => {
  return galleryImages.length;
}

export const getImagesByCategory = (category: string): GalleryImage[] => {
  return galleryImages.filter((image) => image.category === category);
}

export const getCategories = (): string[] => {
  const categories = galleryImages.map((image) => image.category || "Sin categoría")
  return [...new Set(categories)]
}
