
// "use client"

// import type React from "react"
// import { X } from "lucide-react"
// import { useParams, useNavigate } from "react-router-dom"
// import { ArrowLeft, Download, ShoppingCart, Check } from "lucide-react"
// import { useState } from "react"
// import { productsData } from "../data/productsData"
// import { downloadFile } from "../utils/downloadUtils"

// export default function ProductDetail() {
//   const { slug } = useParams()
//   const navigate = useNavigate()
//   const [showQuoteForm, setShowQuoteForm] = useState(false)
//   const [formData, setFormData] = useState({ name: "", companyName: "", email: "", phone: "", message: "" })
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0)

//   const product = productsData.find((p) => p.slug === slug)

//   if (!product) {
//     return (
//       <main className="w-full">
//         <section className="py-20 text-center">
//           <h1 className="text-3xl font-bold text-foreground mb-4">Product not found</h1>
//           <button
//             onClick={() => navigate("/catalog")}
//             className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to Catalog
//           </button>
//         </section>
//       </main>
//     )
//   }

//   const handleQuoteSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     alert(`Quote request sent for ${product.name}. We'll contact you soon!`)
//     setShowQuoteForm(false)
//     setFormData({ name: "", companyName: "", email: "", phone: "", message: "" })
//   }

//   const handleDownloadCatalog = () => {
//     if (product) {
//       const catalogUrl = product.catalogUrl ?? `/catalogs/${product.slug}-catalog.pdf`
//       downloadFile(`${product.name}-Catalog.pdf`, catalogUrl)
//     }
//   }

//   return (
//     <main className="w-full">
//       {/* Hero Section */}
//       <section className="py-2">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
//           <button
//           type="button"
//           onPointerDown={(e) => {
//           e.stopPropagation()
//            }}
//            onMouseDown={(e) => {
//            e.stopPropagation()
//           }}
//            onClick={(e) => {
//            e.stopPropagation()
//            navigate("/catalog")
//            }}
//            className="relative z-9999 pointer-events-auto flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
//          >
//           <ArrowLeft className="w-5 h-5" />
//            Back to Catalog
//         </button>
//         </div>
//       </section>

//       {/* Product Details */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 mb-12">
//             {/* Product Image Gallery */}
//             <div>
//               {/* Main Image Display */}
//               <div className="relative bg-muted rounded-lg shadow-lg overflow-hidden mb-4">
//                 <img
//                   src={
//                     product.images && product.images.length > 0
//                       ? product.images[selectedImageIndex]
//                       : product.image || "/placeholder.svg"
//                   }
//                   alt={product.name}
//                   className="w-full h-96 object-cover"
//                 />

//                 {/* Image Navigation Arrows */}
//                 {product.images && product.images.length > 1 && (
//                   <>
//                     <button
//                       onClick={() =>
//                         setSelectedImageIndex((prev) => (prev === 0 ? product.images!.length - 1 : prev - 1))
//                       }
//                       className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors z-10"
//                     >
//                       <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={() =>
//                         setSelectedImageIndex((prev) => (prev === product.images!.length - 1 ? 0 : prev + 1))
//                       }
//                       className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors z-10"
//                     >
//                       <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </button>
//                   </>
//                 )}
//               </div>

//               {/* Thumbnail Navigation */}
//               {product.images && product.images.length > 1 && (
//                 <div className="flex gap-3 overflow-x-auto pb-2">
//                   {product.images.map((img, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setSelectedImageIndex(idx)}
//                       className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
//                         selectedImageIndex === idx
//                           ? "border-secondary shadow-md"
//                           : "border-border hover:border-secondary/50"
//                       }`}
//                     >
//                       <img
//                         src={img || "/placeholder.svg"}
//                         alt={`${product.name} view ${idx + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Product Info */}
//             <div>
//               <div className="mb-4">
//                 <div className="flex items-center gap-3 mb-2 bg-gray-50 px-1 py-2 rounded">
//                   <span className="text-sm font-semibold text-white bg-blue-600 px-3 py-1 rounded-full">
//                     {product.type}
//                   </span>
//                   <span className="text-sm font-semibold text-red-500 bg-white px-3 py-1 rounded-full">
//                     {product.supplier}
//                   </span>
//                 </div>
//                 <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
//               </div>

//               <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

//               {/* Action Buttons */}
//               <div className="flex gap-4 mb-12">
//                 <button
//                   onClick={handleDownloadCatalog}
//                   className="flex items-center justify-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-semibold transition-colors"
//                 >
//                   <Download className="w-5 h-5" />
//                   Download Catalog
//                 </button>
//                 <button
//                   onClick={() => setShowQuoteForm(true)}
//                   className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors"
//                 >
//                   <ShoppingCart className="w-5 h-5" />
//                   Request Quote
//                 </button>
//               </div>

//               {/* Key Features */}
//               <div>
//                 <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
//                 <ul className="space-y-3">
//                   {product.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start gap-3">
//                       <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
//                         <Check className="w-3 h-3 text-secondary-foreground" />
//                       </div>
//                       <span className="text-foreground">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Specifications and Benefits */}
//           {product && (
//             <div className="grid md:grid-cols-2 gap-12 border-t border-border pt-12">
//               {/* Specifications */}
//               <div>
//                 <h2 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>
//                 <div className="space-y-4">
//                   {Object.entries(product).map(([key, value]) => {
//                     if (
//                       key !== "id" &&
//                       key !== "slug" &&
//                       key !== "name" &&
//                       key !== "type" &&
//                       key !== "description" &&
//                       key !== "image" &&
//                       key !== "images" &&
//                       key !== "features" &&
//                       key !== "catalogUrl" &&
//                       key !== "catalogName" &&
//                       key !== "supplier"
//                     ) {
//                       return (
//                         <div key={key} className="flex justify-between items-start pb-4 border-b border-border/50">
//                           <span className="font-semibold text-foreground">{key}</span>
//                           <span className="text-muted-foreground text-right">{value}</span>
//                         </div>
//                       )
//                     }
//                     return null
//                   })}
//                 </div>
//               </div>

//               {/* Benefits */}
//               <div>
//                 <h2 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h2>
//                 <ul className="space-y-3">
//                   {product.features.map((benefit, idx) => (
//                     <li key={idx} className="flex items-start gap-3">
//                       <Check className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
//                       <span className="text-foreground">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Quote Modal */}
//       {showQuoteForm && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//           <div className="bg-background rounded-lg shadow-xl w-full max-w-2xl">
//             <div className="flex items-center justify-between p-6 border-b border-border">
//               <h2 className="text-2xl font-bold text-foreground">Request Quote</h2>
//               <button
//                 onClick={() => setShowQuoteForm(false)}
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <form onSubmit={handleQuoteSubmit} className="p-6 space-y-4">
//               <div>
//                 <p className="text-sm font-semibold text-foreground mb-2">Product: {product.name}</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1">Company Name</label>
//                   <input
//                     type="text"
//                     value={formData.companyName}
//                     onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
//                     className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
//                     placeholder="Company name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
//                   <input
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
//                     placeholder="your@email.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1">Phone *</label>
//                   <input
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
//                     placeholder="Your phone number"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-1">Message</label>
//                 <textarea
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   rows={4}
//                   className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
//                   placeholder="Tell us about your requirements"
//                 />
//               </div>

//               <div className="flex gap-3 justify-end">
//                 <button
//                   type="button"
//                   onClick={() => setShowQuoteForm(false)}
//                   className="px-6 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-semibold transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors"
//                 >
//                   Send Quote Request
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </main>
//   )
// }



"use client"

import type React from "react"
import { X } from "lucide-react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Download, ShoppingCart, Check } from "lucide-react"
import { useState } from "react"
import { productsData } from "../data/productsData"
import { downloadFile } from "../utils/downloadUtils"

export default function ProductDetail() {
  
  const { id } = useParams()
  const navigate = useNavigate()
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", companyName: "", email: "", phone: "", message: "" })
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const product = productsData.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <main className="w-full">
        <section className="py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product not found</h1>
          <button
            onClick={() => navigate("/catalog")}
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Catalog
          </button>
        </section>
      </main>
    )
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Quote request sent for ${product.name}. We'll contact you soon!`)
    setShowQuoteForm(false)
    setFormData({ name: "", companyName: "", email: "", phone: "", message: "" })
  }

  const handleDownloadCatalog = () => {
    if (product) {
      const catalogUrl = product.catalogUrl ?? `/catalogs/${product.slug}-catalog.pdf`
      downloadFile(`${product.name}-Catalog.pdf`, catalogUrl)
    }
  }

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-muted py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
          type="button"
          onPointerDown={(e) => {
          e.stopPropagation()
           }}
           onMouseDown={(e) => {
           e.stopPropagation()
          }}
           onClick={(e) => {
           e.stopPropagation()
           navigate("/catalog")
           }}
           className="relative z-9999 pointer-events-auto flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
         >
          <ArrowLeft className="w-5 h-5" />
           Back to Catalog
        </button>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Product Image Gallery */}
            <div>
              {/* Main Image Display */}
              <div className="relative bg-muted rounded-lg shadow-lg overflow-hidden mb-4">
                <img
                  src={
                    product.images && product.images.length > 0
                      ? product.images[selectedImageIndex]
                      : product.image || "/placeholder.svg"
                  }
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />

                {/* Image Navigation Arrows */}
                {product.images && product.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setSelectedImageIndex((prev) => (prev === 0 ? product.images!.length - 1 : prev - 1))
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors z-10"
                    >
                      <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        setSelectedImageIndex((prev) => (prev === product.images!.length - 1 ? 0 : prev + 1))
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors z-10"
                    >
                      <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === idx
                          ? "border-secondary shadow-md"
                          : "border-border hover:border-secondary/50"
                      }`}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${product.name} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-white bg-blue-600 px-3 py-1 rounded-full">
                    {product.type}
                  </span>
                  <span className="text-sm font-semibold text-white bg-green-600 px-3 py-1 rounded-full">
                    {product.supplier}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
              </div>

              <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-12">
                <button
                  onClick={handleDownloadCatalog}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-semibold transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Catalog
                </button>
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Request Quote
                </button>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-secondary-foreground" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Specifications and Benefits */}
          {product && (
            <div className="grid md:grid-cols-2 gap-12 border-t border-border pt-12">
              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>
                <div className="space-y-4">
                  {product.specifications &&
                    Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-start pb-4 border-b border-border/50">
                        <span className="font-semibold text-foreground">{key}</span>
                        <span className="text-muted-foreground text-right">{value}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h2>
                <ul className="space-y-3">
                  {product.features.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quote Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg shadow-xl w-full max-w-2xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground">Request Quote</h2>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleQuoteSubmit} className="p-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Product: {product.name}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Company Name</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Tell us about your requirements"
                />
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setShowQuoteForm(false)}
                  className="px-6 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors"
                >
                  Send Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
