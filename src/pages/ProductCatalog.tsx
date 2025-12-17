// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Download, ShoppingCart, X, ChevronLeft, ChevronRight } from "lucide-react"
// import { productsData } from "../data/productsData"
// import { downloadFile } from "../utils/downloadUtils"

// export default function ProductCatalog() {
//   const [selectedType, setSelectedType] = useState<"All" | "Imaging" | "IVD" | "PMLS">("All")
//   const [selectedSupplier, setSelectedSupplier] = useState("Mindray")
//   const [showQuoteForm, setShowQuoteForm] = useState(false)
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [formData, setFormData] = useState({ name: "", companyName: "", email: "", phone: "", message: "" })
//   const [currentPage, setCurrentPage] = useState(1)
//   const PRODUCTS_PER_PAGE = 6

//   const suppliers = [
//     "Mindray",
//     ...Array.from(new Set(productsData.map((p) => p.supplier))).filter((s) => s !== "Mindray"),
//   ]

//   let filteredProducts = productsData
//   if (selectedType !== "All") {
//     filteredProducts = filteredProducts.filter((p) => p.type === selectedType)
//   }
//   if (selectedSupplier !== "All") {
//     filteredProducts = filteredProducts.filter((p) => p.supplier === selectedSupplier)
//   }

//   const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
//   const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
//   const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE)

//   const handleTypeChange = (type: string) => {
//     setSelectedType(type as "All" | "Imaging" | "IVD" | "PMLS")
//     setCurrentPage(1)
//   }

//   const handleSupplierChange = (supplier: string) => {
//     setSelectedSupplier(supplier)
//     setCurrentPage(1)
//   }

//   const handleQuoteSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     alert(`Quote request sent for ${selectedProduct?.name}. We'll contact you soon!`)
//     setShowQuoteForm(false)
//     setFormData({ name: "", companyName: "", email: "", phone: "", message: "" })
//   }

//   const handleDownloadCatalog = (product: any) => {
//     const catalogUrl = product.catalogUrl ?? `/catalogs/${product.slug}-catalog.pdf`
//     downloadFile(`${product.name}-Catalog.pdf`, catalogUrl)
//   }

//   const navigateToDetail = (product:any) => {
//     window.location.href = `/product/${product.id}`
//   }

//   return (
//     <main className="w-full bg-background">
//       {/* Header Section */}
//       {/* <section className="bg-muted border-b border-border py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl font-bold text-foreground mb-2">Product Catalog</h1>
//           <p className="text-muted-foreground">Explore our comprehensive range of medical equipment</p>
//         </div>
//       </section> */}

//       {/* Content Section */}
//       <section className="py-12">
//         <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* Sidebar Filters */}
//             <aside className="lg:col-span-1">
//               <div className="sticky top-24 space-y-6">
//                 {/* Equipment Type Filter */}
//                 <div>
//                   <h3 className="text-lg font-bold text-foreground mb-4">Equipment Type</h3>
//                   <div className="space-x-2">
//                     {["All", "Imaging", "IVD", "PMLS"].map((type) => (
//                       <button
//                         key={type}
//                         onClick={() => handleTypeChange(type)}
//                         className={`w-fit text-left px-2 py-1 rounded-lg transition-colors ${
//                           selectedType === type
//                             ? "bg-primary text-primary-foreground"
//                             : "bg-muted text-foreground hover:bg-muted/80"
//                         }`}
//                       >
//                         {type}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Supplier Filter */}
//                 <div>
//                   <h3 className="text-lg font-bold text-foreground mb-4">Suppliers</h3>
//                   <div className="space-x-2 space-y-2 max-h-64 overflow-y-auto">
//                     {suppliers.map((supplier) => (
//                       <button
//                         key={supplier}
//                         onClick={() => handleSupplierChange(supplier)}
//                         className={`w-fit text-left px-4 py-2 rounded-lg transition-colors text-sm ${
//                           selectedSupplier === supplier
//                             ? "bg-secondary text-secondary-foreground"
//                             : "bg-muted text-foreground hover:bg-muted/80"
//                         }`}
//                       >
//                         {supplier}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Results Count */}
//                 <div className="p-4 bg-muted rounded-lg">
//                   <p className="text-sm text-muted-foreground">
//                     Showing <span className="font-semibold text-foreground">{paginatedProducts.length}</span> of{" "}
//                     <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
//                   </p>
//                 </div>
//               </div>
//             </aside>

//             {/* Products Grid */}
//             <div className="lg:col-span-3">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//                 {paginatedProducts.map((product) => (
//                   <div
//                     key={product.id}
//                     className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-border"
//                   >
//                     {/* Product Image */}
//                     <div className="relative h-48 bg-muted overflow-hidden">
//                       <img
//                         src={product.image || "/placeholder.svg?height=200&width=300&query=medical-equipment"}
//                         alt={product.name}
//                         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>

//                     {/* Product Info */}
//                     <div className="p-4 bg-gray-100 h-full">
//                       <div className="flex gap-2 mb-2">
//                         <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
//                           {product.type}
//                         </span>
//                         <span className="text-xs font-semibold bg-white text-red-800 px-2 py-1 rounded shadow-amber-950">
//                           {product.supplier}
//                         </span>
//                       </div>
//                       <h3 className="font-bold text-foreground text-sm mb-2 line-clamp-2">{product.name}</h3>
//                       <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

//                       {/* Action Buttons */}
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => handleDownloadCatalog(product)}
//                           className="flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-muted hover:bg-muted/80 text-foreground rounded text-xs font-semibold transition-colors cursor-pointer"
//                         >
//                           <Download className="w-3 h-3" />
//                           Download
//                         </button>
//                         <button
//                           onClick={() => navigateToDetail(product)}
//                           className="flex-1 px-2 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded text-xs font-semibold transition-colors cursor-pointer"
//                         >
//                           Details
//                         </button>
//                         <button
//                           onClick={() => {
//                             setSelectedProduct(product)
//                             setShowQuoteForm(true)
//                           }}
//                           className="flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded text-xs font-semibold transition-colors cursor-pointer"
//                         >
//                           <ShoppingCart className="w-3 h-3" />
//                           Quote
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="flex items-center justify-center gap-2">
//                   <button
//                     onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//                     disabled={currentPage === 1}
//                     className="px-3 py-2 bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed text-foreground rounded-lg transition-colors"
//                   >
//                     <ChevronLeft className="w-5 h-5" />
//                   </button>

//                   {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                     <button
//                       key={page}
//                       onClick={() => setCurrentPage(page)}
//                       className={`px-3 py-2 rounded-lg transition-colors ${
//                         currentPage === page
//                           ? "bg-primary text-primary-foreground"
//                           : "bg-muted hover:bg-muted/80 text-foreground"
//                       }`}
//                     >
//                       {page}
//                     </button>
//                   ))}

//                   <button
//                     onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//                     disabled={currentPage === totalPages}
//                     className="px-3 py-2 bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed text-foreground rounded-lg transition-colors"
//                   >
//                     <ChevronRight className="w-5 h-5" />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quote Modal */}
//       {showQuoteForm && selectedProduct && (
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
//                 <p className="text-sm font-semibold text-foreground mb-2">Product: {selectedProduct.name}</p>
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

import React, { useEffect, useMemo, useState } from "react"
import { Download, ShoppingCart, X, ChevronLeft, ChevronRight } from "lucide-react"
import { productsData } from "../data/productsData"
import { downloadFile } from "../utils/downloadUtils"

type Product = any

export default function ProductCatalog() {
  const [selectedType, setSelectedType] = useState<"All" | "Imaging" | "IVD" | "PMLS">("All")
  const [selectedSupplier, setSelectedSupplier] = useState<string>("Mindray") // default Mindray
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({ name: "", companyName: "", email: "", phone: "", message: "" })
  const [currentPage, setCurrentPage] = useState(1)
  const PRODUCTS_PER_PAGE = 6

  // build suppliers list
  const supplierSet = useMemo(() => {
    const s = new Set<string>()
    productsData.forEach((p: Product) => {
      const sup = p.supplier
      if (Array.isArray(sup)) {
        sup.forEach((si) => si && s.add(String(si).trim()))
      } else if (sup) {
        s.add(String(sup).trim())
      }
    })
    return s
  }, [])

  //...Array.from(supplierSet).filter((x) => x !== "Mindray")],

  // const suppliers = useMemo(
  //   () => [
  //     "All", 
  //     "Mindray",
  //       ...Array.from(supplierSet).filter((x) => x !== "Mindray")],
  //   [supplierSet]
  // )

  const suppliers = 
   [
      "All", 
      "Mindray",
        // ...Array.from(supplierSet).filter((x) => x !== "Mindray")
      ]
  
 

  // FILTERS (memoized)
  const filteredProducts = useMemo(() => {
    let list = productsData.slice()

    if (selectedType !== "All") {
      list = list.filter((p: Product) => p.type === selectedType)
    }

    if (selectedSupplier !== "All") {
      const supplierNormalized = selectedSupplier.toLowerCase().trim()
      list = list.filter((p: Product) => {
        const s = p.supplier
        if (Array.isArray(s)) {
          return s.some((si: string) => String(si).toLowerCase().trim() === supplierNormalized)
        }
        return String(s).toLowerCase().trim() === supplierNormalized
      })
    }

    return list
  }, [selectedType, selectedSupplier])

  // total pages based on filteredProducts
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE))
  }, [filteredProducts.length])

  // Clamp currentPage when filters or totalPages change
  useEffect(() => {
    // if currentPage is out of range, move it to the last available page
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    } else if (currentPage < 1) {
      setCurrentPage(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages, filteredProducts.length])

  // PAGINATION (memoized)
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE
    const end = start + PRODUCTS_PER_PAGE
    // slice safely
    return filteredProducts.slice(start, end)
  }, [filteredProducts, currentPage])

  const handleTypeChange = (type: string) => {
    setSelectedType(type as "All" | "Imaging" | "IVD" | "PMLS")
    setCurrentPage(1)
  }

  const handleSupplierChange = (supplier: string) => {
    setSelectedSupplier(supplier)
    setCurrentPage(1)
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Quote request sent for ${selectedProduct?.name}. We'll contact you soon!`)
    setShowQuoteForm(false)
    setFormData({ name: "", companyName: "", email: "", phone: "", message: "" })
  }

  const handleDownloadCatalog = (product: Product) => {
    const catalogUrl = product.catalogUrl ?? `/catalogs/${product.slug}-catalog.pdf`
    downloadFile(`${product.name}-Catalog.pdf`, catalogUrl)
  }

  const navigateToDetail = (product: Product) => {
    window.location.href = `/product/${product.id}`
  }

  return (
    <main className="w-full bg-background">
      <section className="py-12">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Equipment Type</h3>
                  <div className="space-x-2">
                    {["All", "Imaging", "IVD", "PMLS"].map((type) => (
                      <button
                        key={type}
                        onClick={() => handleTypeChange(type)}
                        className={`w-fit text-left px-2 py-1 rounded-lg transition-colors ${
                          selectedType === type
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Suppliers</h3>
                  <div className="space-x-2 space-y-2 max-h-64 overflow-y-auto">
                    {suppliers.map((supplier) => (
                      <button
                        key={supplier}
                        onClick={() => handleSupplierChange(supplier)}
                        className={`w-fit text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                          selectedSupplier === supplier
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {supplier}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{paginatedProducts.length}</span> of{" "}
                    <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
                  </p>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {paginatedProducts.map((product: Product) => (
                  <div
                    key={product.id}
                    className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-border"
                  >
                    <div className="relative h-48 bg-muted overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg?height=200&width=300&query=medical-equipment"}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-4 bg-gray-100 h-full">
                      <div className="flex gap-2 mb-2">
                        <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {product.type}
                        </span>
                        <span className="text-xs font-semibold bg-white text-red-800 px-2 py-1 rounded shadow-amber-950">
                          {Array.isArray(product.supplier) ? product.supplier.join(", ") : product.supplier}
                        </span>
                      </div>
                      <h3 className="font-bold text-foreground text-sm mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDownloadCatalog(product)}
                          className="flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-muted hover:bg-muted/80 text-foreground rounded text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <Download className="w-3 h-3" />
                          Download
                        </button>
                        <button
                          onClick={() => navigateToDetail(product)}
                          className="flex-1 px-2 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded text-xs font-semibold transition-colors cursor-pointer"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => {
                            setSelectedProduct(product)
                            setShowQuoteForm(true)
                          }}
                          className="flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <ShoppingCart className="w-3 h-3" />
                          Quote
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed text-foreground rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed text-foreground rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {showQuoteForm && selectedProduct && (
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
                <p className="text-sm font-semibold text-foreground mb-2">Product: {selectedProduct.name}</p>
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
