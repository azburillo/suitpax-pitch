import type React from "react"

interface Agent {
  id: string
  name: string
  image: string
  specialty: string
}

const agents: Agent[] = [
  {
    id: "alice",
    name: "Alice",
    image: "/ai-agents/agent-alice.jpeg",
    specialty: "Customer Service",
  },
  {
    id: "bob",
    name: "Bob",
    image: "/ai-agents/agent-bob.jpeg",
    specialty: "Sales Representative",
  },
  {
    id: "charlie",
    name: "Charlie",
    image: "/ai-agents/agent-charlie.jpeg",
    specialty: "Technical Support",
  },
  {
    id: "david",
    name: "David",
    image: "/ai-agents/agent-david.jpeg",
    specialty: "Marketing Specialist",
  },
  {
    id: "eve",
    name: "Eve",
    image: "/ai-agents/agent-eve.jpeg",
    specialty: "Financial Advisor",
  },
  {
    id: "frank",
    name: "Frank",
    image: "/ai-agents/agent-frank.jpeg",
    specialty: "Project Manager",
  },
  {
    id: "grace",
    name: "Grace",
    image: "/ai-agents/agent-grace.jpeg",
    specialty: "Human Resources",
  },
  {
    id: "heidi",
    name: "Heidi",
    image: "/ai-agents/agent-heidi.jpeg",
    specialty: "Data Analyst",
  },
  {
    id: "ivan",
    name: "Ivan",
    image: "/ai-agents/agent-ivan.jpeg",
    specialty: "Software Engineer",
  },
  {
    id: "judy",
    name: "Judy",
    image: "/ai-agents/agent-judy.jpeg",
    specialty: "Legal Counsel",
  },
  {
    id: "emma-new",
    name: "Emma",
    image: "/ai-agents/agent-emma-new.jpeg",
    specialty: "Executive Assistant",
  },
  {
    id: "sofia-new",
    name: "Sofia",
    image: "/ai-agents/agent-sofia-new.jpeg",
    specialty: "Travel Coordinator",
  },
]

const AIAgentsInteractiveShowcase: React.FC = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Meet Our AI Agents</h2>
        </div>

        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
          {agents.map((agent) => (
            <div key={agent.id} className="flex flex-col items-center">
              <img
                src={agent.image || "/placeholder.svg"}
                alt={agent.name}
                className="w-10 h-10 rounded-full object-cover mb-2 filter grayscale"
              />
              <p className="text-gray-600 text-sm text-center">{agent.name}</p>
              <p className="text-gray-500 text-xs text-center">{agent.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AIAgentsInteractiveShowcase
