"use client"

import type React from "react"
import { useState } from "react"
import { Search } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface InvestorFAQSectionProps {
  faqData: FAQItem[]
}

const InvestorFAQSection: React.FC<InvestorFAQSectionProps> = ({ faqData }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const toggleItem = (question: string) => {
    if (expandedItems.includes(question)) {
      setExpandedItems(expandedItems.filter((item) => item !== question))
    } else {
      setExpandedItems([...expandedItems, question])
    }
  }

  const filteredFaqData = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Investor FAQs</h2>

        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={handleSearchChange}
            required
          />
        </div>

        <div className="space-y-4">
          {filteredFaqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="flex items-center justify-between w-full py-3 px-4 text-left font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => toggleItem(item.question)}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${expandedItems.includes(item.question) ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {expandedItems.includes(item.question) && <div className="py-2 px-4 text-gray-700">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InvestorFAQSection
