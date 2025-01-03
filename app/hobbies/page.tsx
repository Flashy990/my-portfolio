import PageTransition from '../components/PageTransition'

const hobbies = [
  {
    name: 'Go Karting and Sim Racing',
    description: 'I love racing in general.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    name: 'Hiking and Travelling',
    description: 'Exploring nature trails and enjoying the great outdoors.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    name: 'Reading',
    description: 'Diving into books on technology, science fiction, and personal development.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    name: 'Custom PC and Keyboard Building',
    description: '',
    image: '/placeholder.svg?height=200&width=300',
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

