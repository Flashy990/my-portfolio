import PageTransition from '../components/PageTransition'

const hobbies = [
  {
    name: 'Hardware Hacking',
    description: 'I love tinkering with hardware, from microcontrollers to FPGA boards, turning ideas into tangible projects.',
    image: '/placeholder.svg',
  },
  {
    name: 'Go Karting and Sim Racing',
    description: 'I love racing in general.',
    image: '/go_karting_at_yas_kartzone.png',
  },
  {
    name: 'Hiking and Traveling',
    description: 'Exploring nature trails and enjoying the great outdoors.',
    image: '/White_Mountains.JPEG',
  },
  {
    name: 'Reading',
    description: 'Diving into books on technology, science fiction, and personal development.',
    image: '/reading_img.jpg',
  },
  {
    name: 'Custom PC and Keyboard Building',
    description: 'I love tinkering with things.',
    image: '/pc_img_1.png',
  },
  {
    name: 'Movies and Anime',
    description: 'Marvel, DC, and One Piece are my favorites.',
    image: '/straw_hat.jpg',
  },
]

export default function Hobbies() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">My Hobbies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
              <img
                src={hobby.image}
                alt={hobby.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{hobby.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

