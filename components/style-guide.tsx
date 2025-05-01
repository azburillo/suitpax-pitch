"use client"

import { motion } from "framer-motion"

export default function StyleGuide() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <section>
          <h2 className="text-3xl font-medium tracking-tighter mb-6">Typography</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Main Title</h3>
              <p className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-none">
                Main Title Example
              </p>
              <p className="text-xs mt-2 text-gray-500">
                <code>text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-none</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Section Title</h3>
              <p className="text-3xl md:text-4xl font-medium tracking-tighter">Section Title Example</p>
              <p className="text-xs mt-2 text-gray-500">
                <code>text-3xl md:text-4xl font-medium tracking-tighter</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Primary Text</h3>
              <p className="text-base font-medium tracking-tighter">
                This is an example of primary text used for important information.
              </p>
              <p className="text-xs mt-2 text-gray-500">
                <code>font-medium tracking-tighter</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Secondary Text</h3>
              <p className="text-base font-light">
                This is an example of secondary text used for less important information.
              </p>
              <p className="text-xs mt-2 text-gray-500">
                <code>font-light</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Label Text</h3>
              <p className="text-xs font-medium">THIS IS AN EXAMPLE OF LABEL TEXT</p>
              <p className="text-xs mt-2 text-gray-500">
                <code>text-xs font-medium</code>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-medium tracking-tighter mb-6">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-24 bg-white border border-gray-200 rounded-md mb-4"></div>
              <h3 className="font-medium">White</h3>
              <p className="text-sm font-light">Main backgrounds and cards</p>
              <p className="text-xs mt-2 text-gray-500">
                <code>bg-white</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-24 bg-gray-50 border border-gray-200 rounded-md mb-4"></div>
              <h3 className="font-medium">Gray-50</h3>
              <p className="text-sm font-light">Section backgrounds</p>
              <p className="text-xs mt-2 text-gray-500">
                <code>bg-gray-50</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-24 bg-gray-200 border border-gray-200 rounded-md mb-4"></div>
              <h3 className="font-medium">Gray-200</h3>
              <p className="text-sm font-light">Interface elements, borders, accents</p>
              <p className="text-xs mt-2 text-gray-500">
                <code>bg-gray-200, border-gray-200</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-24 bg-black border border-gray-200 rounded-md mb-4"></div>
              <h3 className="font-medium text-white -mt-16 ml-4">Black</h3>
              <h3 className="font-medium">Black</h3>
              <p className="text-sm font-light">Important text</p>
              <p className="text-xs mt-2 text-gray-500">
                <code>text-black</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-24 bg-gray-600 border border-gray-200 rounded-md mb-4"></div>
              <h3 className="font-medium">Gray-600</h3>
              <p className="text-sm font-light">Secondary text</p>
              <p className="text-xs mt-2 text-gray-500">
                <code>text-gray-600</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-24 bg-gray-500 border border-gray-200 rounded-md mb-4"></div>
              <h3 className="font-medium">Gray-500</h3>
              <p className="text-sm font-light">Tertiary text, labels</p>
              <p className="text-xs mt-2 text-gray-500">
                <code>text-gray-500</code>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-medium tracking-tighter mb-6">UI Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Cards</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h4 className="font-medium">Card Title</h4>
                <p className="text-sm font-light mt-2">Card content goes here</p>
              </div>
              <p className="text-xs mt-4 text-gray-500">
                <code>bg-white border border-gray-200 rounded-lg shadow-sm</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Buttons</h3>
              <button className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium">Primary Button</button>
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium ml-4">
                Secondary Button
              </button>
              <p className="text-xs mt-4 text-gray-500">
                <code>Primary: bg-black text-white rounded-md</code>
                <br />
                <code>Secondary: bg-white border border-gray-200 rounded-md</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Badges</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                Badge
              </span>
              <p className="text-xs mt-4 text-gray-500">
                <code>bg-gray-200 text-gray-800 rounded-full text-xs font-medium</code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Inputs</h3>
              <input
                type="text"
                placeholder="Input example"
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm"
              />
              <p className="text-xs mt-4 text-gray-500">
                <code>border border-gray-200 rounded-md</code>
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
