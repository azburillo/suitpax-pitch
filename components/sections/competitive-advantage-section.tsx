import { Shield, Database, Network, Lock, Lightning, TrendUp, Users, Globe } from "@phosphor-icons/react"

const CompetitiveAdvantageSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Competitive Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const advantages = [
  {
    title: "Security",
    description: "We prioritize the security of your data with advanced encryption and robust security protocols.",
    icon: <Shield className="h-8 w-8 text-emerald-400" weight="fill" />,
  },
  {
    title: "Scalability",
    description:
      "Our platform is designed to scale with your business, ensuring seamless performance even during peak times.",
    icon: <TrendUp className="h-8 w-8 text-emerald-400" weight="fill" />,
  },
  {
    title: "Reliability",
    description: "We offer a highly reliable service with minimal downtime, ensuring your operations run smoothly.",
    icon: <Lock className="h-8 w-8 text-emerald-400" weight="fill" />,
  },
  {
    title: "Global Reach",
    description: "Connect with users worldwide through our extensive network and global infrastructure.",
    icon: <Globe className="h-8 w-8 text-emerald-400" weight="fill" />,
  },
  {
    title: "Data-Driven Insights",
    description:
      "Leverage powerful analytics and data-driven insights to make informed decisions and optimize your strategies.",
    icon: <Database className="h-8 w-8 text-emerald-400" weight="fill" />,
  },
  {
    title: "Network Effects",
    description:
      "Benefit from our growing network of users and partners, creating valuable connections and opportunities.",
    icon: <Network className="h-8 w-8 text-emerald-400" weight="fill" />,
  },
  {
    title: "Speed",
    description:
      "Experience lightning-fast performance and quick response times, enhancing user satisfaction and productivity.",
    icon: <Lightning className="h-8 w-8 text-emerald-400" weight="fill" />,
  },
  {
    title: "Community",
    description: "Join our vibrant community of users and experts, fostering collaboration and knowledge sharing.",
    icon: <Users className="h-8 w-8 text-emerald-400" weight="fill" />,
  },
]

export default CompetitiveAdvantageSection
