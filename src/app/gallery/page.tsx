
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Play } from "lucide-react";

export default function GalleryPage() {
  const photos = PlaceHolderImages.filter(p => p.id.startsWith('gallery-') || p.id.startsWith('event-'));

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Memories in Frames</h1>
        <p className="text-lg text-muted-foreground">
          Take a look at the vibrant life of SQAT Club through our events, workshops, and achievements.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((photo, i) => (
          <div key={i} className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 break-inside-avoid">
            <img
              src={photo.imageUrl}
              alt={photo.description}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              data-ai-hint={photo.imageHint}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
              <p className="text-white font-medium text-lg">{photo.description}</p>
            </div>
            {i === 2 && (
              <div className="absolute top-4 right-4 bg-accent p-2 rounded-full shadow-lg">
                <Play className="h-5 w-5 text-white fill-white" />
              </div>
            )}
          </div>
        ))}
        {/* Fill more placeholders for masonry effect */}
        {[1,2,3,4,5].map((_, i) => (
          <div key={`extra-${i}`} className="relative group rounded-3xl overflow-hidden shadow-lg break-inside-avoid">
            <img
              src={`https://picsum.photos/seed/sqat-extra-${i}/${i % 2 === 0 ? '600/800' : '800/600'}`}
              alt="Extra gallery content"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
